import React from 'react'

function SearchBar() {
  return (
    <div className='searchBar'>
        <form className='absolute'>
            <input className='car'></input>
            <input className='pickUp'></input>
            <input className='pickUpTime'></input>
            <input className='dropOff'></input>
            <input className='dropOffTime'></input>

        </form>
    </div>
  )
}

export default SearchBar