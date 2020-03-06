import React, {useState} from 'react';
import './App.css';
import Wrapper from './components/Wrapper'
import Navbar from './components/Navbar'
import FormWrapper from './components/FormWrapper'

function App() {
  const [nameState, setNameState] = useState("")
  return (
    <Wrapper.Provider value={{nameState, setNameState}}>
        <Navbar/>
        <FormWrapper/>
    </Wrapper.Provider>
  )
}

export default App;
