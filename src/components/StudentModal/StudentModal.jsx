import { useState } from "react"
import Button from "../Buttons/Button/Button";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

export default function StudentModal({closeModal}) {
    const [studentName, setStudentName] = useState('');
    const [studentSurname, setStudentSurname] = useState('');
    const [studentId, setStudentId] = useState('');

    const {setStudents} = useContext(GlobalContext)

    function addStudent(id, name, surname) {
        const newStudent = { id, name, surname };
        setStudents(prev => [...prev, newStudent]);
        closeModal();
      }

    return (
        <div className="w-[350px] p-2 border-[3px] border-black border-solid">
            <h3 className="w-[80%] m-0">ახალი მოსწავლის დამატება</h3>
            <form className="flex flex-col items-center w-80 mx-auto my-4">
                <input type="text" className="w-full p-2 mb-2" placeholder="მოსწავლის სახელი" value={studentName} onChange={e => setStudentName(e.target.value)}/>
                <input type="text" className="w-full p-2 mb-2" placeholder="მოსწავლის გვარი" value={studentSurname} onChange={e => setStudentSurname(e.target.value)}/>
                <input type="number" className="w-full p-2 mb-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" placeholder="მოსწავლის პირადი ნომერი" value={studentId} onChange={e => setStudentId(e.target.value)}/>
                <Button type="submit" onClick={e => {
                    e.preventDefault();
                    addStudent(studentId, studentName, studentSurname);
                    setStudentName('');
                    setStudentSurname('');
                    setStudentId('');
                }}>დაამატე</Button>   
            </form>
        </div>
    )
}