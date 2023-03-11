import React from 'react'

const Select = ({selecttodo}) => {

  const filterselect = (e)=>{
    selecttodo(e.target.value);
  }
    
  return (
    <form  >
        <select className='filter' onChange={filterselect}  >
            <option value="all"  >ALL</option>
            <option value="completed">COMPLETED</option>
            <option value="uncompleted">UNCOMPLETED</option>
        </select>

    </form>
  )
}

export default Select