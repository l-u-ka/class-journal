import { useContext } from "react"
import { GlobalContext } from "../../Context/GlobalContext"
import SumScoreRow from "./SumScoreRow/SumScoreRow";

export default function SumScoreTable() {

  const {subjects, students} = useContext(GlobalContext);
  const sumRows = students.map(student => <SumScoreRow key={student.id} student={student}/>)

  return (
    <table className="w-[800px] border-collapse">
            <thead>
                <tr>
                    <th className='border border-solid border-black text-left p-2'>მოსწავლე</th>
                    {subjects.map(subject => <th key={subject.id} className='border border-solid border-black text-left p-2'>{subject.subjectName}</th>)}
                </tr>
            </thead>
            <tbody>
                {sumRows}
            </tbody>
        </table>
  )
}
