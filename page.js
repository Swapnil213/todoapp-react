"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }])
    settitle("")
    setdesc("")
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setMainTask(copytask)
  }

  let renderTask = <h2>No Task Available..</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, index) => {
      return (
        <li key={index} className='flex justify-between items-center mb-8'>
          <div className='flex items-center justify-between mb-5 w-2/3'>
            <h5 className='font-semibold text-2xl'>{task.title}</h5>
            <h6 className='font-normal text-lg'>{task.desc}</h6>
          </div>
          <button
            className='bg-red-400 text-white px-4 py-2 rounded font-bold'
            onClick={() => {
              deleteHandler(index)
            }}
          >Delete</button>
        </li> 
      )
    })
  }
  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>My ToDo List</h1>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2'
          placeholder='Enter Title here..'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }
          }
        />

        <input
          type='text'
          className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2'
          placeholder='Enter Description here..'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />

        <button
          className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>
          Add Task
        </button>

      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page
