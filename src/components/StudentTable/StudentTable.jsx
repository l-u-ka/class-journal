import { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

export default function StudentTable() {
    const {students} = useContext(GlobalContext);
    const studentRows = students.map(student => {
        return <tr key={student.id}>
                <td className='border border-solid border-black text-left p-2'>{student.name}</td>
                <td className='border border-solid border-black text-left p-2'>{student.surname}</td>
            </tr>
    })

    return (
        <table className='border-collapse w-[300px]'>
            <thead>
                <tr>
                <th className='border border-solid border-black text-left p-2'>სახელი</th>
                <th className='border border-solid border-black text-left p-2'>გვარი</th>
                </tr>
            </thead>
            <tbody>
            {studentRows}
            </tbody>
        </table>
    )
}
