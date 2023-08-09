import {PropsWithChildren} from 'react';
import './index.scss';
interface NBaseIconProps {
    role?: string;
    ariaLabel?: string;
    ariaHidden?: boolean;
    ariaDisabled?: boolean;
    onClick?: (event: MouseEvent) => void;
    onMouseDown?: (event: MouseEvent) => void;
    onMouseUp?: (event: MouseEvent) => void;
}
export const NBaseIcon = (props: PropsWithChildren<NBaseIconProps>) => {
    const {
        role,
        ariaLabel,
        ariaHidden = undefined,
        ariaDisabled = undefined,
        onClick,
        onMouseDown,
        onMouseUp,
        children
    } = props;
    return <i
        className="n-base-icon"
        role={role}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        aria-disabled={ariaDisabled}
        onClick={() => onClick}
        onMouseDown={() => onMouseDown}
        onMouseUp={() => onMouseUp}
    >{children}</i>;
};
