import { v4 as uuidv4 } from 'uuid';
import { useContext, useEffect, useState } from "react"
import Button from "../../../Buttons/Button/Button"
import { GlobalContext } from "../../../../Context/GlobalContext"

export default function ScoreCell({weekDay, score, student}) {

    const [isEditing, setIsEditing] = useState(false)
    const [scoreInput, setScoreInput] = useState(score?.score || '')
    const [inputError, setInputError] = useState('')
    const {selectedWeek, selectedSubject, setScores, scores} = useContext(GlobalContext)
    
    console.log(score, " : score")
    function setScore() {
        let dayId = weekDay.id;
        let studentId = student.id;
        let selectedSubjectId = selectedSubject.id;
        let selectedWeekId = selectedWeek.id;
        let grade = scoreInput;

        const existingScoreIndex = scores.findIndex((score) => {
                return score.studentId === studentId && score.dayId === dayId && score.weekId === selectedWeekId && score.subjectId === selectedSubjectId
            }
        );

        if (existingScoreIndex !== -1) {
            // Update the existing score
            const updatedScores = [...scores];
            updatedScores[existingScoreIndex] = {
                ...updatedScores[existingScoreIndex],
                score: grade,
            };
            setScores(updatedScores);
        } else {
            // Add a new score
            const newScore = {
                id: uuidv4(),
                score: grade,
                studentId: studentId,
                dayId: dayId,
                weekId: selectedWeekId,
                subjectId: selectedSubjectId,
            };
            setScores((prev) => [...prev, newScore]);
        }
    }

    function validateInput() {
        console.log(Number(scoreInput))
        console.log(scoreInput)
        // if (scoreInput && (Number(scoreInput)) <= 10 && (Number(scoreInput) >=0)) return true
        // else return false;
        setInputError('');
        if (scoreInput) {
            if (scoreInput < 0) {
                setInputError('ნაკლებია 0-ზე!')
                return false;
            } else if (scoreInput > 10) {
                setInputError('მეტია 10-ზე!')
                return false;
            }
            return true;
        }
        else {
            setInputError('შეიყვანეთ ქულა!')
        }
        return false;
    }
    console.log(!inputError)

    function handleClick() {
        if (validateInput()) {
            setScore();
        }
        setIsEditing(false)
    }

    useEffect(()=> {
        setIsEditing(false)
        setInputError('')
    }, [selectedWeek, selectedSubject])

    return (
        <td 
            className='border border-solid border-black text-left h-6 relative cursor-pointer'
            id={weekDay.id}
            onClick={() => !isEditing && setIsEditing(true)}
            >
            {isEditing && <>
                <input
                    className='border-none w-full h-full px-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                    type='number'
                    max={10}
                    min={0}
                    value={scoreInput} //score ? score.score : ''
                    onChange={(e) => setScoreInput(e.target.value)}
                />
                <Button onClick={() => handleClick()} style={{position:'absolute', right:0, height:'100%', width:'35%', padding:0, borderRadius:'5px'}}>Click</Button>
                </>
            }
            {!isEditing && !inputError && <p className="text-center">{score ? score.score : ''}</p>}
            {(!isEditing && inputError) && <p className='text-[14px] text-red-600 text-center'>{inputError}</p>}
        </td>
    )
}