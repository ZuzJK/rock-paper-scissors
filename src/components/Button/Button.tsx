import React from 'react';
import styles from './Button.module.scss';

interface ILayoutProps {
    children: string | JSX.Element;
    type?: string;
    isOpen?: boolean;
    ariaControl?: string;
    clickFn?: () => void; 
}

const Button = ({children, type = '', isOpen, ariaControl, clickFn}: ILayoutProps) => 
            <button 
                    className={`${styles['button'.concat(type)]}`}
                    aria-expanded={isOpen}
                    aria-controls={ariaControl}
                    onClick={clickFn}>
                {children}
            </button>           

export default Button;