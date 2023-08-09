import classNames from 'classnames';
import {NBaseIcon} from 'internal/icon';
import {CloseIcon} from 'internal/icons';
import './index.scss';

interface NBaseCloseProps {
    isButtonTag?: boolean;
    disabled?: boolean;
    foucsable?: boolean;
    round?: boolean;
    onClick?: (event: MouseEvent) => void;
    absolute?: boolean;
    className?: string;
}

export const NBaseClose = (props: NBaseCloseProps) => {
    const {
        isButtonTag = true,
        disabled = undefined,
        foucsable = true,
        round,
        onClick,
        absolute,
        className
    } = props;
    const Tag = isButtonTag ? 'button' : 'div';
    const classes = classNames(className, 'n-base-close', {
        'n-base-close--round': round,
        'n-base-close--absolute': absolute,
        'n-base-close--disabled': disabled
    });

    return <Tag
        type={isButtonTag ? 'button' : undefined}
        tabIndex={disabled ?? !foucsable ? -1 : 0}
        aria-disabled={disabled}
        aria-label='close'
        role={isButtonTag ? undefined : 'button'}
        disabled={disabled}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        onClick={onClick}
        onMouseDown={(e) => {
            if (!foucsable) e.preventDefault();
        }}
        className={classes}
    >
        <NBaseIcon>
            <CloseIcon/>
        </NBaseIcon>
    </Tag>;
};
