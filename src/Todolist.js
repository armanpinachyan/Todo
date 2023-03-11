import React from 'react'
import Todoitem from './Todoitem'

const Todolist = ({todo, removetodo, donetodo,}) => {

  return (

    <div className='TODOS' >
    <div className='Todolist' >
        {
            todo.map(to => <Todoitem key={to.id} {...to} removetodo={removetodo} donetodo={donetodo}  />)
        }
    </div>
    </div>
  )
}

export default Todolist