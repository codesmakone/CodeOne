import React from 'react'
import Header from './Header'
import SearchMovies from './search'

const Movies = () => {
  return (
    <div className="relative width-full">
        <div className="mx-auto overflow-hidden">
          <Header/>
          <SearchMovies/>
        </div>
    </div>
  )
}

export default Movies