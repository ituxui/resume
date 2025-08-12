import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import styles from './Badge.module.scss';
import { Icon, type IconTypes } from '@shared/ui/assets/icons';

type Variant = 'fill' | 'outline' | 'black';

type Props = {
  text?: string | React.ReactNode;
  href?: string;
  showIcon?: boolean;
  iconName?: IconTypes;
  variant?: Variant;
  className?: string;
  inverted?: boolean;
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
};

export const Badge: React.FC<Props> = ({
  text,
  href,
  showIcon = true,
  iconName,
  variant = 'fill',
  inverted = false,
  size = 'h1',
  className,
  ...props
}) => {
  const isInternal = href?.startsWith('/');
  const isEmail = href?.startsWith('mailto:') || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(href || '');
  const isTelegram = href?.includes('t.me');
  const isVk = href?.includes('vk.com');
  const isExternal = href?.startsWith('http') && !isTelegram && !isVk;
  const notHoverable = !href && !props.onClick;

  const getIconName = (): IconTypes => {
    if (iconName) return iconName;
    if (isEmail) return 'mail';
    if (isTelegram) return 'telegram';
    if (isVk) return 'vk';
    if (!href) return 'square-arrow-out-up-right';
    if (isInternal) return 'chevron-right';
    if (isExternal) return 'link';
    return 'link';
  };

  const content = (
    <>
      {showIcon && <Icon type={getIconName()} />}
      {text && <span className={styles.text}>{text}</span>}
    </>
  );

  const commonProps = {
    className: classNames(
      styles.badge,
      styles[variant],
      styles[`size-${size}`],
      {
        [styles['inverted']]: inverted,
        [styles['notHoverable']]: notHoverable
      },
      className
    ),
  };

  if (!href) return <button {...commonProps}>{content}</button>;
  if (isInternal) return <Link to={href} {...commonProps}>{content}</Link>;
  if (isEmail) return <a href={`mailto:${href}`} target="_blank" rel="noopener noreferrer" {...commonProps}>{content}</a>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...commonProps}>
      {content}
    </a>
  );
};
