import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  small,
  outlineBlack = false,
  children,
  onClick,
  ...args
}) {
  let ElementComponent = 'button';
  const props = {
    onClick,
    ...args,
  };
  if (to) {
    props.to = to;
    ElementComponent = Link;
  } else if (href) {
    props.href = href;
    ElementComponent = 'a';
  }
  const classname = cx('wrapper', {
    primary,
    outline,
    small,
    outlineBlack,
  });
  return (
    <ElementComponent className={classname} {...props}>
      <span>{children}</span>
    </ElementComponent>
  );
}

export default Button;
