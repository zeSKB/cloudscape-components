/// <reference types="react" />
export interface FormFieldControlProps {
    /**
     * Specifies the ID of the native form element. You can use it to relate
     * a label element's `for` attribute to this control.
     *
     * It defaults to an automatically generated ID that
     * is provided by its parent form field component.
     */
    controlId?: string;
    /**
     * Adds `aria-labelledby` to the component. If you're using this component within a form field,
     * don't set this property because the form field component automatically sets it.
     *
     * Use this property if the component isn't surrounded by a form field, or you want to override the value
     * automatically set by the form field (for example, if you have two components within a single form field).
     *
     * To use it correctly, define an ID for the element you want to use as label and set the property to that ID.
     */
    ariaLabelledby?: string;
    /**
     * Adds `aria-describedby` to the component. If you're using this component within a form field,
     * don't set this property because the form field component automatically sets it.
     *
     * Use this property if the component isn't surrounded by a form field, or you want to override the value
     * automatically set by the form field (for example, if you have two components within a single form field).
     *
     * To use it correctly, define an ID for each element that you want to use as a description
     * and set the property to a string of each ID separated by spaces (for example, `"id1 id2 id3"`).
     */
    ariaDescribedby?: string;
}
export interface FormFieldValidationControlProps extends FormFieldControlProps {
    /**
     * Overrides the invalidation state. Usually the invalid state
     * comes from the parent `FormField`component,
     * however sometimes you need to override its
     * state when you have more than one input within a
     * single form field.
     */
    invalid?: boolean;
}
export declare const FormFieldContext: import("react").Context<FormFieldValidationControlProps>;
export declare function useFormFieldContext(props: FormFieldValidationControlProps): FormFieldValidationControlProps;
//# sourceMappingURL=form-field-context.d.ts.map