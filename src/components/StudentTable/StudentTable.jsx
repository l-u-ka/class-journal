import './student-table.css';

export default function StudentTable({students}) {

    const studentRows = students.map(student => {
        return <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.surname}</td>
            </tr>
    })

    return (
        <table className="student-table">
            <thead>
                <tr>
                <th>სახელი</th>
                <th>გვარი</th>
                </tr>
            </thead>
            <tbody>
            {studentRows}
            </tbody>
        </table>
    )
}