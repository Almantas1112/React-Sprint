import React from 'react'
import ListItem from './ListItem'

const Lists = ({update, delAll, done, del, todos}) => {

    if (todos.length <= 0) {
        return (
            <div className='jumbotron text-center'>
                <h1 className='text-danger'>EMPTY CART!</h1>
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
                update={update}
            />
            ))}
        </ul>
    </div>
  )
}

export default Lists