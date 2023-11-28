import { v4 as uuidv4 } from 'uuid';

export function ScoreTable({scores, students, selectedSubject, selectedWeek, setScores}) {
    console.log("SELECTED SUBJECT: ", selectedSubject);
    console.log("SELECTED WEEK: ", selectedWeek);

    const weekDays = [{id: "111", name: "ორშაბათი"}, {id: "112", name: "სამშაბათი"}, {id: "113", name: "ოთხშაბათი"}, {id: "114", name: "ხუთშაბათი"}, {id: "115", name: "პარასკევი"}];

    function setScore(target) {
        let dayId = target.parentElement.id;
        let studentId = target.parentElement.parentElement.id;
        let selectedSubjectId = selectedSubject.id;
        let selectedWeekId = selectedWeek.id;
        let grade = target.value;

        const existingScoreIndex = scores.findIndex(
            (score) =>
                score.studentId === studentId &&
                score.dayId === dayId &&
                score.weekId === selectedWeekId &&
                score.subjectId === selectedSubjectId
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
            <tr key={student.id} id={student.id}>
                {weekDays.map((weekDay) => {
                    // Find the score for the current student, week day, and subject
                    const score = scores.find(
                        (s) =>
                            (s.studentId === student.id) &&
                            (s.dayId === weekDay.id) &&
                            (s.weekId === selectedWeek.id) &&
                            (s.subjectId === selectedSubject.id)
                    );
    
                    return (
                        <td
                            key={`${weekDay.name}-${student.id}`}
                            className='border border-solid border-black text-left h-6'
                            id={weekDay.id}
                        >
                            <input
                                className='border-none w-full h-full px-2'
                                type='number'
                                max={10}
                                min={0}
                                value={score ? score.score : ''}
                                onChange={(e) => setScore(e.target)}
                            />
                        </td>
                    );
                })}
            </tr>
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