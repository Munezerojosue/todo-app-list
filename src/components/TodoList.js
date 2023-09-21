import React, { useState } from 'react'

function TodoList() {
    const [activity,setActivity]=useState("")
    const [listData,setlistData]=useState([])
    function addActivity(){

        // setlistData(()=>{
        //     const updatedList =[...listData,activity]
        //     console.log(updatedList)
        //     setActivity("")
        setlistData((listData)=>{
            const updatedList =[...listData,activity]
            console.log(updatedList)
            setActivity("")
            return updatedList
        })
    }

    function  deleteActivity(i){
        const updatedListData = listData.filter((elem,id)=>{
            return i!=id

        })
        setlistData(updatedListData)


    }

  return (

    < div className='container'>
    <div>
        <div className='card'>
        <h1 className='text'> TodoList</h1>
        <input className='placeholder' type='text' placeholder='type item'
         value={activity}
         onChange={(e)=>setActivity(e.target.value)}/>

         <button className='add' onClick={addActivity}>add</button>
         <h2 className='text'>Item List:</h2>

         <div className='list'>
        
         { listData !=[] && listData.map((data, i)=>{
                return(
                    
                    <form className='list1' key={i}>
                    
                        <ul>
                        
                        <li>{data}</li> 
                        <button className='delete' onClick={()=>deleteActivity(i)}>delete</button>

                        
                        </ul>
                    </form>
                    
                    
                )
            })
           
         }
         </div>
          </div>

      
    </div>
    </div>
  )
}

export default TodoList
