import React from 'react'
import ListItem from './ListItem'

const Lists = ({done, del}) => {
  return (
    <div className='listWrap'>
        <ul className='list-group'>
            <ListItem title="Title 1" delHandler={del} doneHandler={done}/>
        </ul>
    </div>
  )
}

export default Lists