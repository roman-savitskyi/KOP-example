import { useState } from 'react'
import './App.css'
import { CustomInput, CustomButton } from './components'
import { Students, Avatar } from './modules';
import { useVideo, useWindowScroll } from 'react-use';

function App() {
  const [count, setCount] = useState(0)
  const [courseName, setCourseName] = useState('JS/TS')
  const {x, y} = useWindowScroll();
  const [video, state, controls, ref] = useVideo(
    <video src="https://media.istockphoto.com/id/1158647615/uk/%D0%B2%D1%96%D0%B4%D0%B5%D0%BE/%D0%B7%D0%B1%D0%BB%D0%B8%D0%B7%D1%8C%D0%BA%D0%B0-%D0%BF%D0%BE%D0%B3%D0%BB%D1%8F%D0%B4-%D0%BD%D0%B0-%D0%BD%D0%B5%D0%B2%D0%BF%D1%96%D0%B7%D0%BD%D0%B0%D0%BD%D0%BD%D1%83-%D0%B6%D1%96%D0%BD%D0%BA%D1%83-%D0%BA%D0%BB%D1%96%D1%94%D0%BD%D1%82%D0%B0-%D1%8F%D0%BA%D0%B0-%D0%B2%D0%B8%D0%B1%D0%B8%D1%80%D0%B0%D1%94-%D0%B7%D1%80%D0%B0%D0%B7%D0%BE%D0%BA-%D0%BA%D0%BE%D0%BB%D1%8C%D0%BE%D1%80%D1%83-%D0%B2-%D0%BB%D0%B0%D0%BA%D0%BE%D1%84%D0%B0%D1%80%D0%B1%D0%BE%D0%B2%D0%BE%D0%BC%D1%83-%D1%86%D0%B5%D1%85%D1%83.mp4?s=mp4-640x640-is&k=20&c=gXK56lRBIrUJugiIxdM0xp_NWQLFz_qnG8yadnW30_k=" autoPlay />
  );
  
  const changeName = (e) => setCourseName(e.target.value);
  const [student, setStudent] = useState({
    name: 'Test User',
    id: -1
  });


  return (
    <>
      <h1>{courseName}</h1>
      <div>
        <div>x: {x}</div>
        <div>y: {y}</div>
      </div>
      <div>
        {video}
        <pre>{JSON.stringify(state, null, 2)}</pre>
        <button onClick={controls.pause}>Pause</button>
        <button onClick={controls.play}>Play</button>
        <br/>
        <button onClick={controls.mute}>Mute</button>
        <button onClick={controls.unmute}>Un-mute</button>
        <br/>
        <button onClick={() => controls.volume(.1)}>Volume: 10%</button>
        <button onClick={() => controls.volume(.5)}>Volume: 50%</button>
        <button onClick={() => controls.volume(1)}>Volume: 100%</button>
        <br/>
        <button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
        <button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>
      </div>

      <div className="card">
        <CustomButton onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </CustomButton>
        <p>
          Clicks: <span>{count}</span>
        </p>
        <p>
          Selected student: {student.name}<br/>
          <Avatar id={student.id}></Avatar>
        </p>
        <CustomInput value={courseName} onChange={changeName} />
        <Students setUser={setStudent}/>
      </div>
    </>
  )
}

export default App
