import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect }){
    const shuffledAnswers = useRef();
    
    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }
    return(
        <ul id="answers">
            {shuffledAnswers.current.map((answer) => {
                const isSelected = selectedAnswer === answer; // use to get the last answer in the array of answer
                let ccClasses = '';
                if (answerState === 'answered' && isSelected) {
                    ccClasses = 'selected'
                }
                if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                    ccClasses = answerState     
                }
                return (
                    <li key={answer} className= "answer">
                        <button 
                            onClick={() => onSelect(answer)} 
                            className={ccClasses} disabled={answerState !== ''}>
                                {answer}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}