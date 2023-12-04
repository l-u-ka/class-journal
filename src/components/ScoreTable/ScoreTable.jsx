import ScoreRow from './ScoreRow/ScoreRow';
import { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

export function ScoreTable() {
    const {scores, students, selectedSubject, selectedWeek} = useContext(GlobalContext)
    console.log("SELECTED SUBJECT: ", selectedSubject);
    console.log("SELECTED WEEK: ", selectedWeek);

    const studentScores = students.map((student) => {
        return (
            <ScoreRow
             key={student.id}
             student={student}
             scores={scores}
             selectedSubject={selectedSubject}
             selectedWeek={selectedWeek}
             />
        );
    });
    

    return (
        <table className="w-[700px] border-collapse">
            <thead>
                <tr>
                    <th className='border border-solid border-black text-left p-2'>ორშაბათი</th>
                    <th className='border border-solid border-black text-left p-2'>სამშაბათი</th>
                    <th className='border border-solid border-black text-left p-2'>ოთხშაბათი</th>
                    <th className='border border-solid border-black text-left p-2'>ხუთშაბათი</th>
                    <th className='border border-solid border-black text-left p-2'>პარასკევი</th>
                </tr>
            </thead>
            <tbody>
                {studentScores}
            </tbody>
        </table>
    )
}


export default ScoreTable;