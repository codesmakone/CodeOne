import React from 'react'
import Selection1 from '../components/Selection_1'
import Selection1b from '../components/Selection_1b'
import Selection2 from '../components/Selection_2'
import Selection3 from '../components/Selection_3'

const Selection = () => {
  return (
    <div className='container mx-auto px-5 xl:px-0'>
      <div className='mt-10 mb-5'>
        <h1 className='text-5xl font-bold mb-1'>CODEONE Selection Information</h1>
      </div>
        <hr/>
      <div className='my-5'>
        <h1 className='text-2xl font-medium mb-5'>Selection Process</h1>
        <p>
          The selection will consist of 2 parts: a coding task (9th September 2023- 20th September 2023) and an interview. You will only be invited to the interview if you successfully submit the coding task.
        </p>
      </div>
        <hr/>      
      <div className='my-5'>
        <h1 className='text-2xl font-medium mb-5'>Coding Task</h1>
        <p>
        There are 4 coding tasks of different difficulties levels to choose from. You are only required to submit <strong>one</strong> of them. The more difficult the task is, the higher score you will obtain. <strong>Your submission will only be considered if it fulfills the submission requirement</strong>. There will also be bonus point in each task, <strong>these are not mandatory</strong>, however you will gain extra points if you do them. Additionally, you can also score extra points by making modifications that adds extra functionality to the task.
        </p>
      </div>
        <hr/>
      <div className='my-5'>
        <h1 className='text-2xl font-medium mb-5'>Getting Help</h1>
        <p>
        If you need help in debugging your code (note: <strong>only debugging and getting rid of errors, no solutions or ideas</strong>). You can request any of the trainers to help you by sending them a message through Line (it is recommended that you ask all of them and see who respond first).
        </p>
      </div>
        <hr/>
      <div className='my-5'>
        <h1 className='text-2xl font-medium mb-5'>Deadlines</h1>
        <p>
        The submission deadline for the coding task is 23:59 WIB on the 20th September 2023. Any submissions later than that will not be accepted.
        </p>
      </div>
        <hr/>
      <Selection1/>
      <Selection1b/>
      <Selection2/>
      <Selection3/>
      <div className='my-5'>
        <h1 className='text-2xl font-medium mb-5'>Submission Guide</h1>
        <p className='mb-4'>
        If you are not using react. zip/compress all of your codes and submit them using the google form provided. If are using react zip all of the files inside your react folder except your node_modules folder and then submit using the google form.
        </p>
        <a target="blank" href="https://forms.gle/CHFDc4fJFsZFPwam6" className='text-blue-500 mt-2 font-bold'>Link To Submission Form</a>
      </div>
        <hr/>
      <div className='flex justify-between'>
      <h5 className='text-left my-3 text-blue-500 font-bold'>
        <a href='https://codeone.smakone.org/'> ← Back To Mainpage</a>
      </h5>
      <h5 className='text-right my-3 pb-2'>
                @CodeOne Team 2022
      </h5>
      </div>

    </div>
  )
}

export default Selection