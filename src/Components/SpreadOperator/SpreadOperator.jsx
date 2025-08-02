import React, { useState } from 'react'
import { MdDeleteOutline, MdModeEditOutline } from 'react-icons/md'

const users = [
  { id: 1, name: "Ali", age: 24 },
  { id: 2, name: "Sara", age: 22 },
  { id: 3, name: "Usman", age: 29 },
  { id: 4, name: "Ayesha", age: 25 },
  { id: 5, name: "Ahmed", age: 30 },
  { id: 6, name: "Zainab", age: 21 },
  { id: 7, name: "Bilal", age: 27 },
  { id: 8, name: "Hina", age: 23 },
  { id: 9, name: "Tariq", age: 26 },
  { id: 10, name: "Mehwish", age: 28 }
];


const SpreadOperator = () => {
  const [user, setUser] = useState(users)
  const [value, setValue] = useState({name : "",age: ""})


  const handleEdit = (Name)=>{

    console.log(Name);
    

    const updateUser = {...user?.find((item)=>item.name === Name)}

    setValue(updateUser);
    

  }

  const handleUpdate = ()=>{

    if(value.id){

      
      const newUser  = user.map((item)=>{
        
        return item.id === value.id ? {...value} : item
        
      })
      
      console.log(newUser);
      
      setUser(newUser)
      
      setValue({
        name : "",
        age : "",
        id : null
      })
    }

    else{

      
      
    const newUser = {name : value.name, age : value.age}
    
    setUser([...user,newUser])
    
    console.log(user);
    
    setValue({
      name : "",
      age : "",
      id : null
    })
    
  } 

  }

  const handleChange = (e)=>{

    const { name , value } = e.target

    console.log(name,value);

    setValue((prev)=>({...prev,[name] : value}))

  }



  const handleDel = (index)=>{

    const newUser = [...user.filter((item,ind)=>ind !== index)]

    console.log(newUser);

    setUser(newUser)
    
    
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 p-6'>
      <div className='bg-white shadow-lg rounded-xl p-6 w-full max-w-md'>

        {/* Form Section */}
        <div className='flex flex-col gap-4 mb-6'>
          <input
            type='text'
            className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Name'
            name='name'
            id=''
            value={value?.name}
            onChange={handleChange}
          />
          <input
            type='text'
            className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Age'
            name='age'
            id=''
            value={value?.age}
            onChange={handleChange}
          />
          <button onClick={handleUpdate} className='px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300'>
            Update
          </button>
        </div>

        {/* Users Display Section */}
        <div className='max-h-[300px] overflow-y-auto bg-gray-100 rounded-xl p-4 space-y-4'>
          {user.map((item, index) => (
            <div
              key={index}
              className='bg-white shadow-md rounded-lg p-4 flex justify-between items-center'
            >
              <div>
                <h1 className='text-xl font-semibold text-blue-700'>{item.name}</h1>
                <p className='text-gray-600'>Age: {item.age}</p>
              </div>
              <div className='flex gap-3'>
                <MdDeleteOutline onClick={()=>handleDel(index)} className='text-2xl text-red-600 cursor-pointer hover:scale-110 transition' />
                <MdModeEditOutline onClick={()=>handleEdit(item.name)} className='text-2xl text-blue-600 cursor-pointer hover:scale-110 transition' />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default SpreadOperator
