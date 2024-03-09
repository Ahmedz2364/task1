import React from 'react'

function Header() {
  return (
    <div className='container'>
        <h2>Weather Check app</h2>
        <div className='sty'>
        <label htmlFor="City" className='city'>City Name</label>
        <input type='text' className='city' id='city1' placeholder="Enter City Name"/>
        <br></br>
        <button type='sumbit' className='button' >Get Weather</button>
        </div>
    </div>
  )
}

export default Header