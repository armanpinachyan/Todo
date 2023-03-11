import React, { useState } from 'react'
import Addtodo from './Addtodo'
import Todolist from './Todolist'
import Completed from './Completed'
import Select from './Select'

const App = () => {

  const [todo,settodo] = useState([
    {id: Math.random(), title: 'react', done: false },
    {id: Math.random(), title: 'javascript', done: false},
    {id: Math.random(), title: 'node js', done: true}
  ])
  const [filter, setfilter] = useState('all')

  const filtertodo = todo.filter(to =>{ 
      if(filter == 'completed'){
        return to.done == true
      } else if(filter == 'uncompleted'){
        return to.done == false
      } else {
        return to
      }
  })
  

  const addtodo = (title)=>{
    const newtodo = {
      id: Math.random(),
      title,
      done: false
    }
    settodo([...todo, newtodo])
  }

  const filterdone = (id)=>{
    const newtodo = todo.filter(to => !to.done) 
    settodo(newtodo)
  }

  const removetodo = (id) =>{
    const newtodo = todo.filter(to => to.id != id)
    settodo(newtodo)
  }

  const donetodo = (id) =>{
    const newtodo = todo.map(to => {
      if(to.id == id) to.done = !to.done
      return to
    })
    settodo(newtodo)
  }

  const selecttodo =(event)=>{
    setfilter(event)
  }


  return (

    <div className='App' >
        <Addtodo addtodo={addtodo}  />
        <Select selecttodo={selecttodo} />
      <Todolist todo={filtertodo} removetodo={removetodo} donetodo={donetodo}  />
      <Completed todo={todo} filterdone={filterdone} />
    </div>
  )
}

export default App