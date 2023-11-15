import { useState, useEffect } from 'react';

export function ScoreTable({scores, students, selectedSubject, selectedWeek, setScores}) {
    console.log("SELECTED SUBJECT: ", selectedSubject);
    console.log("SELECTED WEEK: ", selectedWeek);

    const weekDays = ["ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი"]

    const [scoreRows, setScoreRows] = useState([]);

    console.log("SCORE ROWS: ", scoreRows)

    console.log("RENDERING!!!!!")

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

    setScores(prevScores => {
        // Create a shallow copy of the scores object
        const newScores = { ...prevScores };
        
        // Check if the nested properties exist, and create them if not
        newScores[studentId] = newScores[studentId] || {};
        newScores[studentId][selectedSubject] = newScores[studentId][selectedSubject] || {};
        newScores[studentId][selectedSubject][selectedWeek] = newScores[studentId][selectedSubject][selectedWeek] || {};
        
        // Update the score for the specific week and day
        newScores[studentId][selectedSubject][selectedWeek][weekDay] = target.value;

        return newScores;
    });

    console.log("Scores: ", scores); // This will log the old state due to the asynchronous nature of setScores
    }

    const renderedRows = scoreRows.map((scoreRow, index) => {
        return <tr key={students[index].id} id={students[index].id}>
            {weekDays.map(weekDay => {
                return <td key={`${weekDay}-${students[index].id}`}  className='border border-solid border-black text-left h-6'>
                        <input className='border-none w-full h-full px-2'
                        type='number'
                        max={10}
                        min={0} 
                        value={scoreRow[weekDay]}
                        id={weekDay}
                        onChange={(e) => changeScore(e.target)}
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