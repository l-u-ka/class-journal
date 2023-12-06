import ScoreCell from "./ScoreCell/ScoreCell";

export default function ScoreRow({student, scores, selectedSubject, selectedWeek, weekDays}) {
    
    return (
        <tr id={student.id}>
                {weekDays.map((weekDay) => {
                    // Find the score for the current student, week day, and subject
                    const score = scores?.find(
                        (s) =>
                            (s.studentId === student.id) &&
                            (s.dayId === weekDay.id) &&
                            (s.weekId === selectedWeek.id) &&
                            (s.subjectId === selectedSubject.id)
                    );
    
                    return (
                        <ScoreCell 
                            key={`${weekDay.name}-${student.id}`}
                            weekDay={weekDay}
                            score={score}
                            student={student}
                        />
                    );
                })}
            </tr>
    )
}