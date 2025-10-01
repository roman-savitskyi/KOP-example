import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CustomInput, CustomButton } from './components'
import { Students } from './modules';

function App() {
  const [count, setCount] = useState(0)
  const [courseName, setCourseName] = useState('JS/TS')
  
  const changeName = (e) => setCourseName(e.target.value);
  const defaultStudents = ['Ivanov', 'Petrenko', 'Sidorov'];

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{courseName}</h1>

      <div className="card">
        <CustomButton onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </CustomButton>
        <p>
          Clicks: <span>{count}</span> <br />
        </p>
        <CustomInput value={courseName} onChange={changeName} />
        <Students defaultStudents={defaultStudents} />
      </div>
    </>
  )
}

export default App
