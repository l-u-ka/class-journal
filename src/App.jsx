import React from 'react'
import Modal from 'react-modal';
import Button from './components/Buttons/Button/Button';
import Buttons from './components/Buttons/Buttons';
import StudentModal from './components/StudentModal/StudentModal';
import StudentTable from './components/StudentTable/StudentTable';
import ScoreTable from './components/ScoreTable/ScoreTable';
import { GlobalContextProvider } from './Context/GlobalContext';
import SumScoreTable from './components/ScoreSumTable/ScoreSumTable';

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
  const [studentModalIsOpen, setStudentModalIsOpen] = React.useState(false);
  const [scoreModalIsOpen, setScoreModalIsOpen] = React.useState(false);

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
    <GlobalContextProvider>
        <div className='App'>
          <div className='w-[80%] mx-auto'>
            <Buttons/>
            <div className='flex justify-between'>
              <StudentTable/>
              <ScoreTable />
            </div>
            <Button onClick={openStudentModal} style={{position: 'fixed', bottom: '15px'}}>დაამატე სტუდენტი</Button>
            <Modal isOpen={studentModalIsOpen} onRequestClose={closeStudentModal} style={customStyles} contentLabel="Student Modal">
              <StudentModal closeModal={closeStudentModal}/>
            </Modal>
            <Button onClick={openScoreModal} style={{position: 'fixed', bottom:'15px', left: '80%'}}>საბოლოო ქულები</Button>
            <Modal isOpen={scoreModalIsOpen} onRequestClose={closeScoreModal} style={customStyles} contentLabel="Student Modal">
              <SumScoreTable/>
            </Modal>
          </div>
        </div>
      </GlobalContextProvider>
  )
}

export default App
