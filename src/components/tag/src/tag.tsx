import classNames from 'classnames';
import {PropsWithChildren} from 'react';
import './style.scss';
import {TagProps} from './types';

export const Tag = (props: PropsWithChildren<TagProps>) => {
  const {
    border = true,
    checkable = false,
    checked = false,
    // closable = false,
    color,
    disabled = false,
    round = false,
    size = 'medium',
    // strong = false,
    // triggerClickOnClose = false,
    type = 'default',
    // onClose,
    onCheck,
    children,
    className
  } = props;
  const classes = classNames(
    className,
    'n-tag',
    `n-tag-${size}`,
    {
      [`n-tag-theme-${type}`]: !checkable && !color,
      'n-tag-disabled': disabled,
      'n-tag-round': round,
      'n-tag-checkable': checkable,
      'n-tag-checked': checked
    }
  );
  const borderClasses = classNames('n-tag__border', `n-tag-border-${type}`);

  // checkable的点击事件
  const handleCheck = () => {
    if (!disabled && checkable && onCheck && typeof onCheck === 'function') {
      onCheck(!checked);
    }
  };
  return (
    <div className={classes} style={{
      backgroundColor: color?.color,
      color: color?.textColor
    }}
      onClick={handleCheck}
    >
      <span className="n-tag__content">{children}</span>
      {border && (checkable && checked) && <span style={{borderColor: color?.borderColor}} className={borderClasses}></span>}
    </div>
  );
};
