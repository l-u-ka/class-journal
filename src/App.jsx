import React from 'react';
import { useState} from 'react'
import Modal from 'react-modal';
import './App.css'
import Button from './components/Button/Button';
import StudentModal from './components/StudentModal/StudentModal';
import StudentTable from './components/StudentTable/StudentTable';
import ScoreTable from './components/ScoreTable/ScoreTable';
import { v4 as uuidv4 } from 'uuid';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none'
  },
};

Modal.setAppElement('#root');



function App() {
  // const subjects = ["ქართული", "მათემატიკა", "ინგლისური"];
  // const weeks = ["პირველი", "მეორე", "მესამე"];

  const [students, setStudents] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [scores, setScores] = useState([]);

  

  const subjects = [{id: "001", subjectName: "ქართული"}, {id: "002", subjectName: "ინგლისური"}, {id: "003", subjectName: "მათემატიკა"}];
  const weeks = [{id: "011", weekName: "პირველი"}, {id: "012", weekName: "მეორე"}, {id: "013", weekName: "მესამე"}];
  

  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [selectedWeek, setSelectedWeek] = useState(weeks[0]);

  console.log("STUDENTS:", students);
  console.log("SCORES: ", scores);
  

  function addStudent(id, name, surname) {
    const newStudent = { id, name, surname };
    setStudents([...students, newStudent]);

    // const studentScores = {...scores};
    // studentScores[id] = {};
    // for (const subject of subjects) {
    //   studentScores[id][subject] = {};
    //   for (const week of weeks) {
    //     studentScores[id][subject][week] = {};
    //     for (const day of days) {
    //       studentScores[id][subject][week][day] = "";
    //     }
    //   }
    // }
    // setScores(studentScores)
    closeModal();
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div className='App'>
      <div className='w-[80%] mx-auto'>
        <div className='flex justify-between mb-6 mt-2'>
          <div className='grid grid-cols-3 gap-2'>
            {subjects.map(subject => {
              if (selectedSubject.id === subject.id) {
                return <Button onClick={() => setSelectedSubject(subject)} key={subject.id} style={{color: '#8a2be2',backgroundColor: '#FFFFFF', borderStyle: 'solid', borderColor: '#8a2be2', borderWidth: '2px'}}>{subject.subjectName}</Button>
              } else return <Button onClick={() => setSelectedSubject(subject)} key={subject.id}>{subject.subjectName}</Button>
            })}
          </div>
          <div className='grid grid-cols-3 gap-2'>
            {weeks.map(week => {
              if (selectedWeek.id === week.id) {
                return <Button onClick={() => setSelectedWeek(week)} key={week.id} style={{color: '#8a2be2',backgroundColor: '#FFFFFF', borderStyle: 'solid', borderColor: '#8a2be2', borderWidth: '2px'}}>{week.weekName}</Button>
              } else return <Button onClick={() => setSelectedWeek(week)} key={week.id} >{week.weekName}</Button>
            })}
          </div>
        </div>
        <div className='flex justify-between'>
          <StudentTable students={students}/>
          <ScoreTable 
          scores={scores} 
          students={students} 
          selectedSubject={selectedSubject} 
          selectedWeek={selectedWeek}
          setScores={setScores}
          />
        </div>
        
        <Button onClick={openModal} style={{position: 'fixed', bottom: '15px'}}>დაამატე სტუდენტი</Button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Student Modal"
        >
          <StudentModal addStudent={addStudent}/>
        </Modal>
      </div>
    </div>
  )
}

export default App
