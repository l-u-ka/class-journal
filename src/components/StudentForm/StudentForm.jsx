import { useState } from "react"
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import Button from "../Buttons/Button/Button";
export default function StudentForm({closeModal}) {
    const [studentName, setStudentName] = useState('');
    const [studentSurname, setStudentSurname] = useState('');
    const [studentId, setStudentId] = useState('');
    const [error, setError] = useState('');

    const {setStudents} = useContext(GlobalContext)

    function isError() {
        const regex = /^(?:(?![\d!@#$%^&*()_+{}[\]:;<>,.?~\\/\\-\s]).)*$/; // not include number, special character or whitespace
        // if (studentName && studentSurname && studentId && regex.test(studentName) && regex.test(studentSurname)) return true;
        // else return false;
        let error = '';
        if (!(studentName && studentSurname && studentId)) {
            error = "შეიყვანეთ ყველა მონაცემი!";
        } else if (!(regex.test(studentName) && regex.test(studentSurname))) {
            error = "სახელი და გვარი არ უნდა შეიცავდეს ნომერს, გამოტოვებულ ადგილს ან სიმბოლოს!";
        }
        return error;
    }

    function addStudent(id, name, surname) {
        if (!isError()) {
            setError('')
            const newStudent = { id, name, surname };
            setStudents(prev => [...prev, newStudent]);
            closeModal();
            setStudentName('');
            setStudentSurname('');
            setStudentId('');
        } else setError(isError())
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
                }}>დაამატე</Button>
                {error && <p className="text-red-600 text-center mt-2">{error}</p>}   
            </form>
        </div>
    )
}