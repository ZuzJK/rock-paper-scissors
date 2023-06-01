import React from 'react';
import Element  from './Element/Element';
import { handleGame } from '../../helpers';
import styles from './Game.module.scss';

type weapon = "rock" | "paper" | "scissors";

interface IFnProps {
    changeScore: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, 
    newScore: number,
    userChoice: string,
    computerChoice: string,
    result: string) => number;
  }

const Game = ({changeScore}: IFnProps) => {
    const appilance: weapon[] = ['paper', 'scissors', 'rock'];

    const onClickGod = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, appilance: weapon[]) => {
        const {score, user, computer, result} = handleGame(e, appilance);
        changeScore(e, score, user, computer, result!);
    }
    return (
        <div className={styles.container} onClick={e=>onClickGod(e, appilance)} >
            {
                appilance.map(item => <Element type={item} key={item} />)
            }
        </div>
    );
};

export default Game;