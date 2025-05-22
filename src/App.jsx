import React, { useState } from 'react'

  function App() {
        
  let [todolist , setTodolist] =useState([])
  
        let  savetodolist = (event)=>{
          let todoname = event.target.todoname.value;
        
            
          if  (todoname=="") {
            alert("plz enter to-do list")
          
          } 
          else if(!todolist.includes(todoname)){
            let finaltodolist = [...todolist,todoname]
               setTodolist(finaltodolist)
          }
          else{
            
            alert("this is already exist")
          }
           
          event.preventDefault();
        }

        let list = todolist.map((value,index)=>{
          return(
            <ToDolistItem value={value} key={index} 
            todolist={todolist} setTodolist={setTodolist}/>
          )
          
        })
        
         
        
  return (
    <div>
      <h1 className='flex justify-center  text-2xl m-10 '>TO-DO LIST</h1>
      <form onSubmit={savetodolist}>
        <input   className=" border border-solid border-indigo-600 italic text text-center" type="text" placeholder='Any To-DO ?'  name='todoname'/>
        <button className='bg-slate-600 text-white '>save</button>
      </form>
      
      <div className='outerdiv'>
        <ul>
          {list}
          
        </ul>
      </div>
    </div>
  )
}

export default App;
function ToDolistItem ({value,todolist,setTodolist}){
  let [cleartodo , Setclear] = useState(false)
  let deleterow = ()=>{
   let finaldata = todolist.filter((v,i)=>v!= value)
   setTodolist(finaldata)

  }
 
   let clear=()=>{
    Setclear(!cleartodo)
   }
  return(
    <li className={(cleartodo)? 'completetodo' : ''} onClick={clear}>{value}  <span onClick={deleterow}> &times;</span></li>
  )
}


