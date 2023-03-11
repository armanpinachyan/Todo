import React from 'react'

const Completed = ({todo,filterdone}) => {

  const lengthtodos = todo.filter(to => to.done ).length


  return (
    <div className='Completed' >
      <span className='complet' >{lengthtodos}/{todo.length} Completed</span>
      <button className='clear' onClick={()=>filterdone(todo.done)} >clear Completed</button>
       </div>
  )
}

export default Completed