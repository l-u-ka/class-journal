export default function SumScoreCell({subject, studentScores}) {
  const studentSubjectScores = studentScores.filter(studentScore => studentScore.subjectId === subject.id)
  let sum = 0;
  for (let i=0; i<studentSubjectScores.length; i++) {
    sum += Number(studentSubjectScores[i].score);
  }
  const average = sum / studentSubjectScores.length;

  return (
    <td className='border border-solid border-black text-center h-6'>{average || 'ქულა არ არის'}</td>
  )
}
