import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';

export function ScoreTable({scores, students, selectedSubject, selectedWeek}) {
    console.log("SELECTED SUBJECT: ", selectedSubject);
    console.log("SELECTED WEEK: ", selectedWeek);

    const weekDays = ["ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი"]

    const [scoreRows, setScoreRows] = useState([]);

    console.log("SCORE ROWS: ", scoreRows)

    function getScoretRows(subject, week) {
        console.log("CALLING SCORE ROWS FUNCTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        
        const filered = [];
        for (const student of students) {
          const studentId = student.id;
          if (scores[studentId] && scores[studentId][subject] && scores[studentId][subject][week]) {
            const score = scores[studentId][subject][week];
            filered.push(score);
          } 
        }
        setScoreRows(filered);
      }

    //   getStudentRows();

    useEffect(() => {
        getScoretRows(selectedSubject, selectedWeek)
      }, [scores, students, selectedSubject, selectedWeek]);

    function changeScore(target) {
        let weekDay = target.id;
        let studentId = target.parentElement.parentElement.id;
        console.log(studentId, selectedSubject, selectedWeek, weekDay)
        console.log(scores[studentId][selectedSubject][selectedWeek][weekDay])
    }

    const renderedRows = scoreRows.map((scoreRow, index) => {
        return <tr key={uuidv4()} id={students[index].id}>
            {weekDays.map(weekDay => {
                return <td key={uuidv4()}  className='border border-solid border-black text-left p-2'>
                    <input className='border-none' 
                    value={scoreRow[weekDay]}
                    id={weekDay}
                    onClick={(e) => changeScore(e.target)}
                    />
                    </td>
            })}
            {/* <td id="ორშაბათი" className='border border-solid border-black text-left p-2'>{scoreRow["ორშაბათი"]}</td>
            <td id="სამშაბათი" className='border border-solid border-black text-left p-2'>{scoreRow["სამშაბათი"]}</td>
            <td id="ოთხშაბათი" className='border border-solid border-black text-left p-2'>{scoreRow["ოთხშაბათი"]}</td>
            <td id="ხუთშაბათი" className='border border-solid border-black text-left p-2'>{scoreRow["ხუთშაბათი"]}</td>
            <td id="პარასკევი"className='border border-solid border-black text-left p-2'>{scoreRow["პარასკევი"]}</td> */}
        </tr>
    })

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
                {renderedRows}
            </tbody>
        </table>
    )
}

export default ScoreTable;