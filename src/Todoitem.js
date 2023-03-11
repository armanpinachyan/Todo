import React from 'react'

const Todoitem = ({id,title,done,removetodo, donetodo}) => {
  return (
    <div className={done ? 'Todoitem active': 'Todoitem'}  >
        <span>{title}</span>
        <div>
        <i className='fas fa-check' onClick={()=> donetodo(id)} ></i>
        <i className='fas fa-trash' onClick={()=> removetodo(id)} ></i>
        </div>
         </div>
  )
}

export default Todoitem