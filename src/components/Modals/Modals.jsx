import Modal from 'react-modal';
import { useState } from 'react';
import StudentForm from '../StudentForm/StudentForm';
import Button from '../Buttons/Button/Button';
import AverageScoreTable from '../AverageScoreTable/AverageScoreTable';

const customStyles = {
    content: {
      top: '40%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none'
    },
  };
  
  Modal.setAppElement('#root');

export default function Modals() {

  const [studentModalIsOpen, setStudentModalIsOpen] = useState(false);
  const [scoreModalIsOpen, setScoreModalIsOpen] = useState(false);

  function openStudentModal() {
    setStudentModalIsOpen(true);
  }
  function closeStudentModal() {
    setStudentModalIsOpen(false);
  }

  function openScoreModal() {
    setScoreModalIsOpen(true);
  }
  function closeScoreModal() {
    setScoreModalIsOpen(false);
  }
  return (
    <>
        <Button onClick={openStudentModal} style={{position: 'fixed', bottom: '15px'}}>დაამატე სტუდენტი</Button>
        <Modal isOpen={studentModalIsOpen} onRequestClose={closeStudentModal} style={customStyles} contentLabel="Student Modal">
            <StudentForm closeModal={closeStudentModal}/>
        </Modal>
        <Button onClick={openScoreModal} style={{position: 'fixed', bottom:'15px', left: '80%'}}>საშუალო ქულები</Button>
        <Modal isOpen={scoreModalIsOpen} onRequestClose={closeScoreModal} style={customStyles} contentLabel="Student Modal">
            <AverageScoreTable/>
        </Modal>
    </>
  )
}
