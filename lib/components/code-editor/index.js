import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useCallback, useEffect, useMemo, useRef, useState, forwardRef } from 'react';
import clsx from 'clsx';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import { getBaseProps } from '../internal/base-component';
import { KeyCode } from '../internal/keycode';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import { Pane } from './pane';
import { useChangeEffect } from './listeners';
import { getDefaultConfig, getAceTheme, getLanguageLabel, DEFAULT_DARK_THEME, DEFAULT_LIGHT_THEME, getDefaultTheme, } from './util';
import { fireNonCancelableEvent } from '../internal/events';
import { setupEditor } from './setup-editor';
import { ResizableBox } from './resizable-box';
import PreferencesModal from './preferences-modal';
import LoadingScreen from './loading-screen';
import ErrorScreen from './error-screen';
import useBaseComponent from '../internal/hooks/use-base-component';
import useForwardFocus from '../internal/hooks/forward-focus';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import { useContainerQuery } from '../internal/hooks/container-queries/use-container-query';
import { useCurrentMode } from '../internal/hooks/use-visual-mode';
import { StatusBar } from './status-bar';
import { useFormFieldContext } from '../internal/context/form-field-context';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import { useControllable } from '../internal/hooks/use-controllable';
import LiveRegion from '../internal/components/live-region';
import styles from './styles.css.js';
import { useInternalI18n } from '../internal/i18n/context';
const CodeEditor = forwardRef((props, ref) => {
    const codeEditorRef = useRef(null);
    const { __internalRootRef } = useBaseComponent('CodeEditor');
    const { controlId, ariaLabelledby, ariaDescribedby } = useFormFieldContext(props);
    const { ace, value, language, i18nStrings, editorContentHeight, onEditorContentResize, ariaLabel, languageLabel: customLanguageLabel } = props, rest = __rest(props, ["ace", "value", "language", "i18nStrings", "editorContentHeight", "onEditorContentResize", "ariaLabel", "languageLabel"]);
    const [editorHeight = 480, setEditorHeight] = useControllable(editorContentHeight, onEditorContentResize, 480, {
        componentName: 'code-editor',
        changeHandler: 'onEditorContentResize',
        controlledProp: 'editorContentHeight',
    });
    const baseProps = getBaseProps(rest);
    const i18n = useInternalI18n('code-editor');
    const [editor, setEditor] = useState();
    const mode = useCurrentMode(__internalRootRef);
    const defaultTheme = mode === 'dark' ? DEFAULT_DARK_THEME : DEFAULT_LIGHT_THEME;
    useEffect(() => {
        if (!editor) {
            return;
        }
        const { textarea } = editor.renderer;
        if (!textarea) {
            return;
        }
        const updateAttribute = (attribute, value) => value ? textarea.setAttribute(attribute, value) : textarea.removeAttribute(attribute);
        updateAttribute('id', controlId);
        updateAttribute('aria-label', ariaLabel);
        updateAttribute('aria-labelledby', ariaLabelledby);
        updateAttribute('aria-describedby', ariaDescribedby);
    }, [ariaLabel, ariaDescribedby, ariaLabelledby, controlId, editor]);
    const [paneStatus, setPaneStatus] = useState('hidden');
    const [annotations, setAnnotations] = useState([]);
    const [highlightedAnnotation, setHighlightedAnnotation] = useState();
    const [cursorPosition, setCursorPosition] = useState({ row: 0, column: 0 });
    const [isTabFocused, setTabFocused] = useState(false);
    const errorsTabRef = useRef(null);
    const warningsTabRef = useRef(null);
    useEffect(() => {
        const elem = codeEditorRef.current;
        if (!ace || !elem) {
            return;
        }
        const config = getDefaultConfig();
        setEditor(ace.edit(elem, Object.assign(Object.assign({}, config), { theme: getAceTheme(getDefaultTheme(elem)) })));
    }, [ace, props.loading]);
    const [codeEditorWidth, codeEditorMeasureRef] = useContainerQuery(rect => rect.width);
    const mergedRef = useMergeRefs(codeEditorMeasureRef, __internalRootRef);
    useForwardFocus(ref, codeEditorRef);
    const isRefresh = useVisualRefresh();
    useEffect(() => {
        editor === null || editor === void 0 ? void 0 : editor.resize();
    }, [editor, editorContentHeight, codeEditorWidth]);
    const paneId = useUniqueId('code-editor-pane');
    useEffect(() => {
        if (!ace || !editor) {
            return;
        }
        setupEditor(ace, editor, setAnnotations, setCursorPosition, setHighlightedAnnotation, setPaneStatus);
        return () => {
            editor === null || editor === void 0 ? void 0 : editor.destroy();
        };
    }, [ace, editor, __internalRootRef]);
    useEffect(() => {
        if (!editor) {
            return;
        }
        if (value === editor.getValue()) {
            return;
        }
        // TODO maintain cursor position?
        const pos = editor.session.selection.toJSON();
        editor.setValue(value, -1);
        editor.session.selection.fromJSON(pos);
    }, [editor, value]);
    useEffect(() => {
        editor === null || editor === void 0 ? void 0 : editor.session.setMode(`ace/mode/${language}`);
    }, [editor, language]);
    useEffect(() => {
        var _a, _b, _c, _d;
        if (!editor) {
            return;
        }
        const theme = (_b = (_a = props.preferences) === null || _a === void 0 ? void 0 : _a.theme) !== null && _b !== void 0 ? _b : defaultTheme;
        editor.setTheme(getAceTheme(theme));
        editor.session.setUseWrapMode((_d = (_c = props.preferences) === null || _c === void 0 ? void 0 : _c.wrapLines) !== null && _d !== void 0 ? _d : true);
    }, [editor, defaultTheme, props.preferences]);
    // Change listeners
    useChangeEffect(editor, props.onChange, props.onDelayedChange);
    // Hide error panel when there are no errors to show.
    useEffect(() => {
        if (annotations.length === 0) {
            setPaneStatus('hidden');
        }
        if (props.onValidate) {
            fireNonCancelableEvent(props.onValidate, { annotations });
        }
    }, [annotations, props.onValidate]);
    const languageLabel = customLanguageLabel !== null && customLanguageLabel !== void 0 ? customLanguageLabel : getLanguageLabel(language);
    const errorCount = annotations.filter(a => a.type === 'error').length;
    const warningCount = annotations.filter(a => a.type === 'warning').length;
    const currentAnnotations = useMemo(() => annotations.filter(a => a.type === paneStatus), [annotations, paneStatus]);
    /*
     * Callbacks
     */
    const onEditorKeydown = useCallback((e) => {
        if (editor && e.target === editor.container && e.keyCode === KeyCode.enter) {
            e.stopPropagation();
            e.preventDefault();
            editor.focus();
        }
    }, [editor]);
    const onTabFocus = useCallback(() => setTabFocused(true), []);
    const onTabBlur = useCallback(() => setTabFocused(false), []);
    const onResize = useCallback(() => {
        editor === null || editor === void 0 ? void 0 : editor.resize();
    }, [editor]);
    const onErrorPaneToggle = useCallback(() => {
        setPaneStatus(paneStatus !== 'error' ? 'error' : 'hidden');
    }, [paneStatus]);
    const onWarningPaneToggle = useCallback(() => {
        setPaneStatus(paneStatus !== 'warning' ? 'warning' : 'hidden');
    }, [paneStatus]);
    const onPaneClose = useCallback(() => {
        if (paneStatus === 'error' && errorsTabRef.current) {
            errorsTabRef.current.focus();
        }
        if (paneStatus === 'warning' && warningsTabRef.current) {
            warningsTabRef.current.focus();
        }
        setPaneStatus('hidden');
    }, [paneStatus]);
    const onAnnotationClick = ({ row = 0, column = 0 }) => {
        if (!editor) {
            return;
        }
        editor.focus();
        editor.gotoLine(row + 1, column, false);
        setHighlightedAnnotation(undefined);
    };
    const onAnnotationClear = useCallback(() => {
        setHighlightedAnnotation(undefined);
    }, []);
    const [isPreferencesModalVisible, setPreferencesModalVisible] = useState(false);
    const onPreferencesOpen = () => setPreferencesModalVisible(true);
    const onPreferencesConfirm = (p) => {
        fireNonCancelableEvent(props.onPreferencesChange, p);
        setPreferencesModalVisible(false);
    };
    const onPreferencesDismiss = () => setPreferencesModalVisible(false);
    const isPaneVisible = paneStatus !== 'hidden';
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(styles['code-editor'], baseProps.className, { [styles['code-editor-refresh']]: isRefresh }), ref: mergedRef }),
        props.loading && (React.createElement(LoadingScreen, null,
            React.createElement(LiveRegion, { visible: true }, i18n('i18nStrings.loadingState', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.loadingState)))),
        !ace && !props.loading && (React.createElement(ErrorScreen, { recoveryText: i18n('i18nStrings.errorStateRecovery', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.errorStateRecovery), onRecoveryClick: props.onRecoveryClick }, i18n('i18nStrings.errorState', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.errorState))),
        ace && !props.loading && (React.createElement(React.Fragment, null,
            React.createElement(ResizableBox, { height: Math.max(editorHeight, 20), minHeight: 20, onResize: height => {
                    setEditorHeight(height);
                    onResize();
                    fireNonCancelableEvent(onEditorContentResize, { height });
                } },
                React.createElement("div", { ref: codeEditorRef, className: clsx(styles.editor, styles.ace, isRefresh && styles['editor-refresh']), onKeyDown: onEditorKeydown, tabIndex: 0, role: "group", "aria-label": i18n('i18nStrings.editorGroupAriaLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.editorGroupAriaLabel) })),
            React.createElement("div", { role: "group", "aria-label": i18n('i18nStrings.statusBarGroupAriaLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.statusBarGroupAriaLabel) },
                React.createElement(StatusBar, { languageLabel: languageLabel, cursorPosition: i18n('i18nStrings.cursorPosition', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.cursorPosition(cursorPosition.row + 1, cursorPosition.column + 1), format => format({ row: cursorPosition.row + 1, column: cursorPosition.column + 1 })), errorCount: errorCount, warningCount: warningCount, paneStatus: paneStatus, onErrorPaneToggle: onErrorPaneToggle, onWarningPaneToggle: onWarningPaneToggle, onTabFocus: onTabFocus, onTabBlur: onTabBlur, errorsTabRef: errorsTabRef, warningsTabRef: warningsTabRef, i18nStrings: i18nStrings, isTabFocused: isTabFocused, paneId: isPaneVisible ? paneId : undefined, onPreferencesOpen: onPreferencesOpen, isRefresh: isRefresh }),
                React.createElement(Pane, { id: paneId, visible: isPaneVisible, annotations: currentAnnotations, highlighted: highlightedAnnotation, onAnnotationClick: onAnnotationClick, onAnnotationClear: onAnnotationClear, onClose: onPaneClose, cursorPositionLabel: i18n('i18nStrings.cursorPosition', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.cursorPosition, format => (row, column) => format({ row, column })), closeButtonAriaLabel: i18n('i18nStrings.paneCloseButtonAriaLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.paneCloseButtonAriaLabel) })),
            isPreferencesModalVisible && (React.createElement(PreferencesModal, { onConfirm: onPreferencesConfirm, onDismiss: onPreferencesDismiss, themes: props.themes, preferences: props.preferences, defaultTheme: defaultTheme, i18nStrings: {
                    header: i18n('i18nStrings.preferencesModalHeader', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.preferencesModalHeader),
                    cancel: i18n('i18nStrings.preferencesModalCancel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.preferencesModalCancel),
                    confirm: i18n('i18nStrings.preferencesModalConfirm', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.preferencesModalConfirm),
                    wrapLines: i18n('i18nStrings.preferencesModalWrapLines', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.preferencesModalWrapLines),
                    theme: i18n('i18nStrings.preferencesModalTheme', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.preferencesModalTheme),
                    lightThemes: i18n('i18nStrings.preferencesModalLightThemes', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.preferencesModalLightThemes),
                    darkThemes: i18n('i18nStrings.preferencesModalDarkThemes', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.preferencesModalDarkThemes),
                    themeFilteringAriaLabel: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.preferencesModalThemeFilteringAriaLabel,
                    themeFilteringClearAriaLabel: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.preferencesModalThemeFilteringClearAriaLabel,
                    themeFilteringPlaceholder: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.preferencesModalThemeFilteringPlaceholder,
                } }))))));
});
applyDisplayName(CodeEditor, 'CodeEditor');
export default CodeEditor;
//# sourceMappingURL=index.js.map