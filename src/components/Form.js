import React, {useContext} from 'react'
import Wrapper from './Wrapper'
 
const Form = () => {
    const context = useContext(Wrapper)
    const onChangeHandler = (e) => {
        context.setNameState(
            e.target.value
        )
    }
    return (
        <div className="inputBox">
            <label>Your Name:</label>
            <input type="text" name="name" onChange={onChangeHandler} />
        </div>
    )
}
export default Form