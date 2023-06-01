import React from 'react';
//import Icon from '../Icon/Icon';
import Icon from './Icon/Icon';
import Counter from './Counter/Counter';
import styles from './Header.module.scss';
import logo from '../../assets/img/logo.svg';
import { IScoreProps } from '../../ts/Interfaces/Interfaces';

const Header = ({score}: IScoreProps) => {
    return (
        <header className={styles.container}>

                <Icon icon={logo} label={"Rock Paper Scissors"} />
                <Counter score={score} />
 
        </header>
    );
};

export default Header;