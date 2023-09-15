import React from 'react'

const Selection_1b = () => {
  return (
    <div>
      <div className='my-5'>
        <h1 className='text-2xl font-medium mb-5'>Level 1B: Todo List</h1>
        <p className='font-bold'> Task Description</p>
        <p>
        For this task you are required to create an app which displays a list of activities when you enter the task in the input box. The user should be able to add, edit, and delete todo list.
        </p>
      </div>
      <br/>
        <p className='font-bold'> Submission Requirement</p>
        <ul className='list-disc list-inside'>
          <li>User can add, and delete todo list</li>
        </ul>
      <br/>

        <p className='font-bold'>Bonus Points</p>
        <ul className='list-disc list-inside'>
          <li>Use react</li>
          <li>Add design</li>
          <li>User can edit todo list</li>
        </ul>

      <br/>
      <div className='mb-2'>
        <p className='font-bold'>Demo</p>
        <a href='https://codeone.smakone.org/todo' target="blank" className='text-blue-500 font-bold'>Todo</a>
      </div>


      <hr/>
    </div>
  )
}

export default Selection_1b