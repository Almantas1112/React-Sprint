import React from 'react'

const ListItem = ({update, id, title, delHandler, doneHandler, done}) => {
  return (
    <li className={`list-group-item d-flex justify-content-between ${done ? 'bg-success' : ''}`}>
        {done ? <del>{title}</del> : title}
            <div>
                <button className='btn btn-sm btn-danger mr-2' onClick={() => delHandler(id)}><i className='far fa-trash-alt'></i></button>
                <button className='btn btn-sm btn-success' onClick={() => doneHandler(id)}>
                    {done ?
                     (<i className='fas fa-undo-alt'></i>) : (<i className='fas fa-check'></i>)}
                    </button>
                <button className='btn btn-sm btn-warning mr-2' onClick={() => update(id)}><i className="fa-solid fa-pen"></i></button>
            </div>
    </li>
  )
}

export default ListItem