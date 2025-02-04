import { useState } from 'react'
import Values from 'values.js'
import './App.css'
import DisplayColors from './components/DisplayColors';
import FormColor from './components/FormColor';

function App() {
  const [list, setList] = useState(new Values('#802FDE').all(10));

  //console.log(list);

  return (
      <div className='App'>
          <FormColor setList={setList}/>
          <DisplayColors list={list}/>
      </div>
  )
}
export default App;
