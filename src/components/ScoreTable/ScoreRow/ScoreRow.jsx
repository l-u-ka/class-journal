import ScoreCell from "./ScoreCell/ScoreCell";

export default function ScoreRow({student, scores, selectedSubject, selectedWeek}) {

    const weekDays = [{id: "111", name: "ორშაბათი"}, {id: "112", name: "სამშაბათი"}, {id: "113", name: "ოთხშაბათი"}, {id: "114", name: "ხუთშაბათი"}, {id: "115", name: "პარასკევი"}];

    return (
        <tr key={student.id} id={student.id}>
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