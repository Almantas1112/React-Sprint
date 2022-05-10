import React from 'react'
import ListItem from './ListItem'

const Lists = ({delAll, done, del, todos}) => {

    if (todos.length <= 0) {
        return (
            <div className='jumbotron text-center'>
                <h1 className='text-danger'>Nothing added yet!</h1>
                <h4>Add something!</h4>
            </div>
        )
    }

  return (
    <div className='listWrap'>
        <ul className='list-group'>
        <button className='btn btn-sm btn-danger mr-2' onClick={delAll}>Delete all</button>
            {todos && 
            todos.map((todo) => (
            <ListItem 
                id={todo.id}
                key={todo.id} 
                title={todo.title} 
                delHandler={del} 
                doneHandler={done}
                done={todo.done}
            />
            ))}
        </ul>
    </div>
  )
}

export default Lists