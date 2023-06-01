import React from 'react';
import Button from '../Button/Button';
import rules from '../../assets/img/image-rules.svg';
import close from '../../assets/img/icon-close.svg';
import styles from './Rules.module.scss';

interface IModalProps {
    closeModal: () => void;
}

const Rules = ({closeModal}: IModalProps) => 
        <div className={styles.wrapper} id="rules" onClick={closeModal}>
            <div className={styles.card} onClick={e => e.stopPropagation()}>
                <h2>Rules</h2>
                <figure className={styles.picture}>
                    <img src={rules} alt="Game Rules" />
                    <figcaption className={styles.rules}>
                        Rock beats scissors, 
                        Scissors beats paper, 
                        Paper beats rock.
                    </figcaption>
                </figure>
                <Button 
                    type={'Icon'}
                    clickFn={closeModal}>
                    <img src={close} alt="close the rules" />
                </Button>
            </div>
        </div>

export default Rules;