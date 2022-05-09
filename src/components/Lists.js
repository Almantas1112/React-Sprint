import React from 'react'
import ListItem from './ListItem'

const Lists = ({done, del, todos}) => {
  return (
    <div className='listWrap'>
        <ul className='list-group'>
            {todos.map((todo) => (
            <ListItem 
                id={todo.id}
                key={todo.id} 
                title={todo.title} 
                delHandler={del} 
                doneHandler={done}
            />
            ))}
        </ul>
    </div>
  )
}

export default Lists