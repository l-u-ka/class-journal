import { useState } from "react"

export default function ScoreCell({weekDay, score, setScore}) {

    const [isEditing, setIsEditing] = useState(false)

    return (
        <td 
            className='border border-solid border-black text-left h-6 relative'
            id={weekDay.id}
            onClick={() => !isEditing && setIsEditing(true)}
            >
            {isEditing && <>
                <input
                    className='border-none w-full h-full px-2'
                    type='number'
                    max={10}
                    min={0}
                    value={score ? score.score : ''}
                    onChange={(e) => setScore(e.target)}
                />
                <button onClick={() => setIsEditing(false)} className="absolute right-0 h-full w-[35%] ">click</button>
                </>
            }
            {!isEditing && <p className="text-center">{score ? score.score : ''}</p>}
        </td>
    )
}