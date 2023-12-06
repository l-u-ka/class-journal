import Buttons from './components/Buttons/Buttons';
import StudentTable from './components/StudentTable/StudentTable';
import ScoreTable from './components/ScoreTable/ScoreTable';
import { GlobalContextProvider } from './Context/GlobalContext';
import Modals from './components/Modals/Modals';


function App() {
  return (
    <GlobalContextProvider>
        <div className='App'>
          <div className='w-[80%] mx-auto'>
            <Buttons/>
            <div className='flex justify-between'>
              <StudentTable/>
              <ScoreTable />
            </div>
            <Modals/>
          </div>
        </div>
      </GlobalContextProvider>
  )
}

export default App
