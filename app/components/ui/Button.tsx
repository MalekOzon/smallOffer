import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'none';
type ButtonType = 'submit' | 'reset' | 'button';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  type?: ButtonType
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '' ,type}) => {
  const baseStyles = 'px-4 py-2 rounded font-medium focus:outline-none transition-colors';
  
  const variantStyles = {
    primary: 'bg-cgreen text-cwhite ',
    secondary: 'bg-clightgray text-cwhite ',
    outline: 'border border-cgreen text-cgreen hover:bg-green-50',
    none:''
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;