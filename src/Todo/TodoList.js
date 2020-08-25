import React from 'react'
import ListItem from './ListItem'
import PropTypes from 'prop-types'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function TodoList(props){
    return(
        <ul style={styles.ul}>
            { props.feature.map((item) => {
                return (<ListItem onChange={props.onToggle} todo={item} key={item.id}/>)
            }) }
        </ul>
    )
}

TodoList.propTypes = {
    feature: PropTypes.arrayOf(PropTypes.object).isRequired,
    todo: PropTypes.object
}

export default TodoList