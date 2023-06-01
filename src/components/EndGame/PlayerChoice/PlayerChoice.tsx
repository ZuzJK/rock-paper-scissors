import React from 'react';
import Element from '../../Game/Element/Element';
import styles from './PlayerChoice.module.scss';

interface IPlayerChoiceProps {
    playerChoice: string;
    result: boolean;
}
const PlayerChoice = ({playerChoice, result}: IPlayerChoiceProps) => 
    <div className={styles.col}>
        <h2 className={styles.title}>House Picked</h2>
        <Element 
            type={playerChoice}
            selected={result}
            />
    </div>

export default PlayerChoice;