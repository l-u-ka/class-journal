import React from 'react';
import { useState, useEffect } from 'react'
import Modal from 'react-modal';
import './App.css'
import Button from './components/Button/Button';
import StudentModal from './components/StudentModal/StudentModal';
import StudentTable from './components/StudentTable/StudentTable';
import ScoreTable from './components/ScoreTable/ScoreTable';


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
  const [scores, setScores] = useState({});

  

  const subjects = ["ქართული", "ინგლისური", "მათემატიკა"];
  const weeks = ["პირველი", "მეორე", "მესამე"];
  const days = ["ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი"];

  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [selectedWeek, setSelectedWeek] = useState(weeks[0]);

  console.log("STUDENTS:", students);
  console.log("SCORES: ", scores);
  


  // console.log("---------")
  // console.log(findStudentScores(students, "ქართული", "პირველი"))

  function addStudent(id, name, surname) {
    const newStudent = { id, name, surname };
    setStudents([...students, newStudent]);

    const studentScores = {...scores};
    studentScores[id] = {};
    for (const subject of subjects) {
      studentScores[id][subject] = {};
      for (const week of weeks) {
        studentScores[id][subject][week] = {};
        // for (const day of days) {
        //   studentScores[id][subject][week][day] = "-";
        // }
        studentScores[id][subject][week]["ორშაბათი"] = "1";
        studentScores[id][subject][week]["სამშაბათი"] = "2";
        studentScores[id][subject][week]["ოთხშაბათი"] = "3";
        studentScores[id][subject][week]["ხუთშაბათი"] = "4";
        studentScores[id][subject][week]["პარასკევი"] = "5";
      }
    }
    setScores(studentScores)
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
            {subjects.map(subject => <Button onClick={() => setSelectedSubject(subject)} key={subject}>{subject}</Button>)}
          </div>
          <div className='grid grid-cols-3 gap-2'>
            {weeks.map(week => <Button onClick={() => setSelectedWeek(week)} key={week}>{week}</Button>)}
          </div>
        </div>
        <div className='flex justify-between'>
          <StudentTable students={students}/>
          <ScoreTable scores={scores} students={students} selectedSubject={selectedSubject} selectedWeek={selectedWeek}/>
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
