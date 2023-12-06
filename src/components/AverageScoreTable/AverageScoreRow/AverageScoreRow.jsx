import { useContext } from 'react'
import AverageScoreCell from './AverageScoreCell/AverageScoreCell'
import { GlobalContext } from '../../../Context/GlobalContext'

export default function AverageScoreRow({student}) {

    const {scores, subjects}= useContext(GlobalContext);
    const studentScores = scores.filter(score => score.studentId == student.id);

  return (
    <tr>
        <td className='border border-solid border-black text-center p-2'>{student.name + " " + student.surname}</td>
        {subjects.map(subject => <AverageScoreCell key={`${student.id}-${subject.id}`} subject={subject} studentScores={studentScores}/>)}
    </tr>
  )
}
