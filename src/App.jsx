import React from 'react';
import { useState } from 'react'
import Modal from 'react-modal';
import './App.css'
import Button from './components/Button/Button';
import StudentModal from './components/StudentModal/StudentModal';
import StudentTable from './components/StudentTable/StudentTable';


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

  console.log("STUDENTS:", students)
  console.log("SCORES: ", scores)


  // function findStudentScores(studentId, subject, week) {
  //   if (scores[studentId] && scores[studentId][subject] && scores[studentId][subject][week]) {
  //     const score = scores[studentId][subject][week];
  //     score && console.log(score["ორშაბათი"])
  //     return score;
  //   } else {
  //     console.log(`Score not found for Student ID: ${studentId}`);
  //   }
  // }

  // console.log("---------")
  // console.log(findStudentScores("123", "ქართული", "პირველი"))

  function addStudent(id, name, surname) {
    const newStudent = { id, name, surname };
    setStudents([...students, newStudent]);

    const studentScores = {...scores};
    studentScores[id] = {};
    for (const subject of subjects) {
      studentScores[id][subject] = {};
      for (const week of weeks) {
        studentScores[id][subject][week] = {};
        for (const day of days) {
          studentScores[id][subject][week][day] = "-";
        }
      }
    }
    setScores(studentScores)
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  
  return (
    <div className='App'>
      

      <StudentTable students={students}/>
      <Button onClick={openModal} style={{position: 'fixed', bottom: '15px'}}>დაამატე სტუდენტი</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Student Modal"
      >
        <StudentModal onClick={addStudent}/>
      </Modal>
      
    </div>
  )
}

export default App
