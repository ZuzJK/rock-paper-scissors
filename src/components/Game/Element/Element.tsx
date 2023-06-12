import React from 'react';
import styles from './Element.module.scss';

interface ILayoutElementProps {
        type: string;
        selected?: boolean;
}

const Element = ({type,selected}: ILayoutElementProps) => 
        <div>
                <button  
                        className={`${styles.button} ${styles.element} ${styles[type]}`}
                        value={type}
                        aria-label={type}
                        data-highlighted={selected?"true":"false"}>
                </button>
        </div>
                
export default Element;