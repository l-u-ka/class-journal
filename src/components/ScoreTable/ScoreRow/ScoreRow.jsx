import { useContext } from "react";
import ScoreCell from "./ScoreCell/ScoreCell";
import { GlobalContext } from "../../../Context/GlobalContext";

export default function ScoreRow({student, scores, selectedSubject, selectedWeek}) {
    
    const {weekDays} = useContext(GlobalContext);

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