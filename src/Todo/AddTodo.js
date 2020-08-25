import React, {useState} from 'react'


function useInput(defaultValue=' '){
    let [typed, setTyped] = useState('')
    return {
        bind: {
            typed,
            onChange: event=>setTyped(event.target.value)
        },
        value: ()=> typed,
        clear: () => setTyped(' ')

    }
}



function AddTodo({onCreate}){
    let input=useInput(' ')
    
    function onChangeHandler(event){
        event.preventDefault()
        if (input.value().trim()){
            onCreate(input.value())}
        input.clear()
    }
    
    
    return(
        <form onSubmit={onChangeHandler}>
            <input {...input.bind}/>
            <button type='submit'>Add New Task</button>
        </form>
    )
}

export default AddTodo