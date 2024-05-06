import { useState } from "react"

export default function Todo() {
    const [input, setInput] = useState('')
    // const [inputs, setInputs] = useState('')
    const [todo, setTodo] = useState([])
    function handleChange(event){
        setInput(event.target.value)            
    }
    function handleTodo(){
       input !== "" ? setTodo([...todo, {id : Date.now() , text: input}]) : ""
        // console.log(todo)
    }
    function handleDelete(id){
      setTodo(todo.filter((e)=>{
       if (e.id !== id) return e
      }))
    }
    function handleEdit(id){
      setTodo(todo.map((e)=>{
        
      }))
    }
  return (
    <>
    <div className='border-4 border-red-500 p-4 '>
      <h1 >Todo</h1>
      
      <input type="text" className='p-1 border-2 rounded-md' placeholder='Enter Todos'
      value={input} 
        onChange={handleChange}
      />
      <button className='m-2' onClick={handleTodo}>Add Todo</button>
      {todo.map((e)=>(
       <div className="flex" key={e.id}>
        <input className=" m-3 p-1 rounded-lg"  value = {e.text} />
        <button className="m-3 w-20 p-1" onClick={()=> handleEdit(e.id)} >Edit</button>
        <button className="m-3 w-20 p-1" onClick={() => handleDelete(e.id)} >Delete</button>
      </div>
      ))}
    </div>

    </>
  )
}
