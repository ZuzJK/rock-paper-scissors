import React from 'react';
import Button from '../../Button/Button';
import styles from './Result.module.scss';

interface IResultProps {
    result: string;
    clickFn: () => void;
}
const Result = ({result, clickFn}: IResultProps) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{result}</h2>
            <Button clickFn={clickFn}>Play again</Button>
        </div>
    );
};

export default Result;