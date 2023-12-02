import { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import Button from './Button/Button'

export default function Buttons() {

  const {subjects, selectedSubject, setSelectedSubject, weeks, selectedWeek, setSelectedWeek} = useContext(GlobalContext)
  
  return (
    <div className='flex justify-between mb-6 mt-2'>
            <div className='grid grid-cols-3 gap-2'>
              {subjects?.map(subject => {
                if (selectedSubject.id === subject.id) {
                  return <Button onClick={() => setSelectedSubject(subject)} key={subject.id} style={{color: '#8a2be2',backgroundColor: '#FFFFFF', borderStyle: 'solid', borderColor: '#8a2be2', borderWidth: '2px'}}>{subject.subjectName}</Button>
                } else return <Button onClick={() => setSelectedSubject(subject)} key={subject.id}>{subject.subjectName}</Button>
              })}
            </div>
            <div className='grid grid-cols-3 gap-2'>
              {weeks?.map(week => {
                if (selectedWeek.id === week.id) {
                  return <Button onClick={() => setSelectedWeek(week)} key={week.id} style={{color: '#8a2be2',backgroundColor: '#FFFFFF', borderStyle: 'solid', borderColor: '#8a2be2', borderWidth: '2px'}}>{week.weekName}</Button>
                } else return <Button onClick={() => setSelectedWeek(week)} key={week.id} >{week.weekName}</Button>
              })}
            </div>
    </div>
  )
}
