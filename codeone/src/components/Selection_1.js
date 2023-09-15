import React from 'react'

const Selection_1 = () => {
  return (
    <div>
      <div className='my-5'>
        <h1 className='text-2xl font-medium mb-5'>Level 1A: Modified Counter</h1>
        <p className='font-bold'> Task Description</p>
        <p>
        For this task you are required to modify the counter created in the workshop. You have to add a text input and subtraction, multiplication, and division button. When you put a number in the text input you should be able to add, subtract, multiply or divide the current counter number by the number you inputted.
        </p>
      </div>
      <br/>
        <p className='font-bold'> Submission Requirement</p>
        <ul className='list-disc list-inside'>
          <li>Add a subtraction feature</li>
          <li>Add the custom addition</li>
          <li>Add the custom subtraction, multiplication, and division</li>
        </ul>
      <br/>

        <p className='font-bold'>Bonus Points</p>
        <ul className='list-disc list-inside'>
          <li>Use react</li>
          <li>Add design</li>
          <li>Counter does not reset when page is refreshed</li>
        </ul>

      <br/>
      <div className='mb-2'>
        <p className='font-bold'>Demo</p>
        <a href='https://codeone.smakone.org/calculator' target="blank" className='text-blue-500 font-bold'>Counter</a>
      </div>

      <hr/>
    </div>
  )
}

export default Selection_1