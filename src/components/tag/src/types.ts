export interface TagProps {
  // 是否有边框
  border?: boolean;
  // 是否可以选择，使用后 type 将不生效
  checkable?: boolean;
  // 是否被选中，配合 checkable 一起使用
  checked?: boolean;
  // 是否可关闭
  closable?: boolean;
  // 标签颜色，设置该项后 type 无效
  color?: {color?: string; borderColor?: string; textColor?: string;};
  // 是否禁用
  disabled?: boolean;
  // 是否圆角
  round?: boolean;
  // 尺寸
  size?: 'small' | 'medium' | 'large';
  // 文字是否加粗
  strong?: boolean;
  // 关闭时是否触发点击事件
  triggerClickOnClose?: boolean;
  // 类型
  type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error';
  // 自定义类名
  className?: string;
  // 点击关闭时的回调
  onClose?: (e: MouseEvent) => void;
  // 选择状态更改时的回调
  onCheck?: (checked: boolean) => void;
}
