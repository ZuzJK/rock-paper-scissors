import React from 'react';
import PlayerChoice from './PlayerChoice/PlayerChoice';
import Result from './Result/Result';
import styles from './EndGame.module.scss';

interface IComponentProps {
    userChoice: string;
    computerChoice: string;
    result: string;
    clickFn: () => void;
}

const EndGame = ({userChoice, computerChoice, result, clickFn}: IComponentProps) => 
    <main className={styles.container}>
        <PlayerChoice playerChoice={userChoice} result={result==='You won'?true:false}/>
        <Result result={result} clickFn={clickFn} />
        <PlayerChoice playerChoice={computerChoice} result={result==='You lose'?true:false}/>
    </main>

export default EndGame;