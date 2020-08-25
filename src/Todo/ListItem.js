import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1 rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function ListItem({todo, onChange}){
    let {deleteTodo}=useContext(Context)
    let classes=[]

    if (todo.completed){
        classes.push('done')
    }

    return(    
    <li style = {styles.li}>
        <span className={classes.join(' ')}>
            <input  type='checkbox' 
                    style={styles.input} 
                    onChange={() => onChange(todo.id)}
                    checked={todo.completed}/>
            <strong>{todo.id}</strong>
            &nbsp;
            {todo.title}
        </span>
        <button className='rm'
                onClick={()=>deleteTodo(todo.id)}>
            &times;
        </button>
    </li>
    )
}

ListItem.propTypes = {
    todo: PropTypes.object
}


export default ListItem