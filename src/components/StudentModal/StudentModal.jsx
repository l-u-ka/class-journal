import { useState } from "react"
import './student-modal.css';
import Button from "../Button/Button";

export default function StudentModal({onClick}) {
    const [studentName, setStudentName] = useState('');
    const [studentSurname, setStudentSurname] = useState('');
    const [studentId, setStudentId] = useState('');

    console.log(studentName, studentSurname, studentId)
    return (
        <div className="student-modal">
            <h3>ახალი მოსწავლის დამატება</h3>
            <form className="student-form">
                <input type="text" className="student-input" placeholder="მოსწავლის სახელი" value={studentName} onChange={e => setStudentName(e.target.value)}/>
                <input type="text" className="student-input" placeholder="მოსწავლის გვარი" value={studentSurname} onChange={e => setStudentSurname(e.target.value)}/>
                <input className="student-input" placeholder="მოსწავლის პირადი ნომერი" value={studentId} onChange={e => setStudentId(Number(e.target.value))}/>
                <Button type="submit" onClick={e => {
                    e.preventDefault();
                    onClick(studentId, studentName, studentSurname);
                    setStudentName('');
                    setStudentSurname('');
                    setStudentId('');
                }}>დაამატე</Button>   
            </form>
        </div>
    )
}