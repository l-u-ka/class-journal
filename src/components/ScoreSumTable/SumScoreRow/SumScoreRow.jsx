import { useContext } from 'react'
import SumScoreCell from './SumScoreCell/SumScoreCell'
import { GlobalContext } from '../../../Context/GlobalContext'

export default function SumScoreRow({student}) {

    const {scores, subjects}= useContext(GlobalContext);
    const studentScores = scores.filter(score => score.studentId == student.id);

  return (
    <tr>
        <td className='border border-solid border-black text-left p-2'>{student.name}</td>
        {subjects.map(subject => <SumScoreCell key={`${student.id}-${subject.id}`} subject={subject} studentScores={studentScores}/>)}
    </tr>
  )
}
