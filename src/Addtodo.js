import React, { useEffect, useState } from 'react'


const Addtodo = ({addtodo,}) => {

    const [input,setinput] = useState('')

    const submit =(e)=>{
        e.preventDefault()
        addtodo(input)
        setinput('')
    }

  

  return (
    <div className='Addtodo' >
        <form onSubmit={submit} >
            <input type={'text' } className={'text'} placeholder={'ADD TODO'} value={input} onChange={(e)=> setinput(e.target.value) }  />
            <input type={'submit'} title={'ADD TODO'} className={'btn'} value={'ավելացնել'} />
        </form>
    </div>
    
  )
}

export default Addtodo

// Создам для Вас красивый сайт , ваш сайт будет красивым для клиентов, полная адаптация под мобилные уeeeeeee