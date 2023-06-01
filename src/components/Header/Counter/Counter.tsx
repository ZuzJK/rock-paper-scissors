import React from 'react';
import { IScoreProps } from '../../../ts/Interfaces/Interfaces';
import styles from './Counter.module.scss';

const Counter = ({score}: IScoreProps) => 
        <div className={styles.block}>
            Score
            <span className={styles.number}>{score}</span>
        </div>

export default Counter;