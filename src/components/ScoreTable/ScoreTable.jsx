import { v4 as uuidv4 } from 'uuid';
import ScoreRow from './ScoreRow/ScoreRow';

export function ScoreTable({scores, students, selectedSubject, selectedWeek, setScores}) {
    console.log("SELECTED SUBJECT: ", selectedSubject);
    console.log("SELECTED WEEK: ", selectedWeek);

    function setScore(target) {
        let dayId = target.parentElement.id;
        let studentId = target.parentElement.parentElement.id;
        let selectedSubjectId = selectedSubject.id;
        let selectedWeekId = selectedWeek.id;
        let grade = target.value;

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

    const studentScores = students.map((student) => {
        return (
            <ScoreRow
             key={student.id}
             student={student}
             scores={scores}
             selectedSubject={selectedSubject}
             selectedWeek={selectedWeek}
             setScore={setScore}
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