import React from 'react'
import Modal from 'react-modal';
import './App.css'
import Button from './components/Buttons/Button/Button';
import Buttons from './components/Buttons/Buttons';
import StudentModal from './components/StudentModal/StudentModal';
import StudentTable from './components/StudentTable/StudentTable';
import ScoreTable from './components/ScoreTable/ScoreTable';
import { GlobalContextProvider } from './Context/GlobalContext';

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
  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
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
            <Button onClick={openModal} style={{position: 'fixed', bottom: '15px'}}>დაამატე სტუდენტი</Button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Student Modal">
              <StudentModal closeModal={closeModal}/>
            </Modal>
          </div>
        </div>
      </GlobalContextProvider>
  )
}

export default App
