import React from 'react';
import './Button.scss';

const ArrowIcon = () => (
  <svg
    style={{ marginLeft: '8px' }}
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    viewBox='0 0 24 24'
    aria-hidden='true'
  >
    <line x1='5' y1='12' x2='19' y2='12' />
    <polyline points='12 5 19 12 12 19' />
  </svg>
);

const buttonVariants = {
  solid: 'button-solid',
  glass: 'button-glass',
  fade: 'button-fade',
  outline: 'button-outline',
} as const;

type ButtonVariant = keyof typeof buttonVariants;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  variant?: ButtonVariant;
  withArrow?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'solid',
  withArrow = false,
  className = '',
}) => {
  const classes = `button ${buttonVariants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {withArrow && <ArrowIcon />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} type='button'>
      {children}
      {withArrow && <ArrowIcon />}
    </button>
  );
};

export default Button;
