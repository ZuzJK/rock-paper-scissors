import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Game from './components/Game/Game';
import EndGame from './components/EndGame/EndGame';
import Rules from './components/Rules/Rules';
import Button from './components/Button/Button';
import './App.scss';
import './App.module.scss';

function App() {
  
  const [modalOpen,setModalOpen] = useState(false);
  const [score,setScore] = useState(0);
  const [result,setResult] = useState(null);
  const [playersChoice,setPlayersChoice] = useState({user:"paper", computer:"rock"});
  const [step,setStep] = useState(0);

  const handleGame = (e,newScore,user,computer,result) => {
     if(user) {
      setScore(score + newScore);
      setResult(result);
      setStep(step + 1);
     }
    setPlayersChoice({user,computer});
  }

  const nextStage = () => setStep(step + 1);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const {user,computer} = playersChoice;
  useEffect(()=>{
  },[playersChoice]);
  return (
    <div className="container">
        <Header score={score} />
            {
              step%2===0?<Game changeScore={handleGame}/> : 
              <EndGame userChoice={user} 
                       computerChoice={computer} 
                       result={result} 
                       clickFn={nextStage}/>
            }
        <Button 
            type={'Ghost'} 
            isOpen={modalOpen} 
            ariaControl={'rules'}
            clickFn={openModal}>
          Rules</Button>
        { modalOpen && <Rules closeModal={closeModal} />}
    </div>
  );
}

export default App;