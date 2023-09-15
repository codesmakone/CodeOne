import React from 'react'
import starbuck from '../Images/Starbucks.webp'

const Selection_2 = () => {
  return (
    <div>
      <div className='my-5'>
        <h1 className='text-2xl font-medium mb-5'>Level 2A: Copying A Website</h1>
        <p className='font-bold'> Task Description</p>
        <p>
        For this task you are required to copy the website in this task demo. Images for the page could be downloaded <a target="blank" href='https://drive.google.com/drive/folders/1IdYVPw4LEd_iXZTMseQ1ek8lOzmInD2b?usp=sharing' className='text-blue-500 font-bold'>here</a>. 
        </p>
      </div>
      <br/>
        <p className='font-bold'> Submission Requirement</p>
        <p>
        There are no submission requirements for this task
        </p>

        <br/>
        <p className='font-bold'>Bonus Points</p>
        <ul className='list-disc list-inside'>
          <li>Insert the text</li>
          <li>Insert the image</li>
          <li>Style the text and image</li>
          <li>Put necessary margin and paddings</li>
          <li>Finish the rest of the design</li>
          <li>Put it in React</li>
        </ul>

      <br/>
        <p className='font-bold'>Demo</p>
        <img src={starbuck} alt="demo images"/>

      <hr/>
      <div className='my-5'>
      <h1 className='text-2xl font-medium mb-5'>Level 2B: Design A web</h1>
        <p className='font-bold'> Task Description</p>
        <p>
        For this task you are required to design an e-commerce landing page website.  
        </p>
      </div>
      <br/>
        <p className='font-bold'> Submission Requirement</p>
        <ul className='list-disc list-inside'>
          <li>Design minimal 2 landing pages of an e-commerce website</li>
          <li>Use Figma</li>
        </ul>
      <br/>
      <hr/>
    </div>
  )
}

export default Selection_2