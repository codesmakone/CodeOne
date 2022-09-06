import React from 'react'

const Selection_3 = () => {
  return (
    <div>
      <div className='my-5'>
        <h1 className='text-2xl font-medium mb-5'>Level 3: Movie Search System</h1>
        <p className='font-bold'> Task Description</p>
        <p>
        For this task you are required to create an app which display a list of movie titles. You can use this API <mark className='bg-gray-200'>http://www.omdbapi.com/?&apikey=e1a73560&s=query&type="movie"</mark>
        </p>
      </div>
      <br/>
        <p className='font-bold'> Submission Requirement</p>
        <ul className='list-disc list-inside'>
          <li>User can find a list of movies</li>
        </ul>
      <br/>

        <p className='font-bold'>Bonus Points</p>
        <ul className='list-disc list-inside'>
          <li>Use react</li>
          <li>Add design</li>
          <li>Error message when there's no response</li>
        </ul>

      <br/>
      <div className='mb-2'>
        <p className='font-bold'>Demo</p>
        <a href='https://codeone.smakone.org/movies' target="blank" className='text-blue-500 font-bold'>Movies</a>
      </div>


      <hr/>
  </div>
  )
}

export default Selection_3