import ScoreRow from './ScoreRow/ScoreRow';
import { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

export function ScoreTable() {
    const {scores, students, selectedSubject, selectedWeek} = useContext(GlobalContext)
    
    const weekDays = [{id: "111", name: "ორშაბათი"}, {id: "112", name: "სამშაბათი"}, {id: "113", name: "ოთხშაბათი"}, {id: "114", name: "ხუთშაბათი"}, {id: "115", name: "პარასკევი"}]

    const studentScores = students.map((student) => {
        return (
            <ScoreRow
             key={student.id}
             student={student}
             scores={scores}
             selectedSubject={selectedSubject}
             selectedWeek={selectedWeek}
             weekDays={weekDays}
             />
        );
    });
    

    return (
        <table className="w-[700px] border-collapse">
            <thead>
                <tr>
                    {weekDays.map(weekday => <th key={weekday.id} className='border border-solid border-black text-left p-2'>{weekday.name}</th> )}
                </tr>
            </thead>
            <tbody>
                {studentScores}
            </tbody>
        </table>
    )
}


export default ScoreTable;