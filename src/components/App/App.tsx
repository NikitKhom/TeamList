// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from '../Main/Main'

const App: React.FC = () => {


  return (
    <div className='app'>
      <Routes>
          <Route
          path='/'
          element={<Main />}
          />
      </Routes>
    </div>
  )
}

export default App
