import React from 'react';
import { ButtonProps } from '../../button/interfaces';
import { IconProps } from '../../icon/interfaces';
export interface TriggerButtonProps {
    ariaLabel?: string;
    className?: string;
    iconName?: IconProps.Name;
    iconSvg?: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    selected?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<TriggerButtonProps & React.RefAttributes<ButtonProps.Ref>>;
export default _default;
//# sourceMappingURL=trigger-button.d.ts.map