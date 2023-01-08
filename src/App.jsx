import { useState } from 'react'

function App () {
  const [count, setCount] = useState(0)


  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl'>BOLIER PLATE PROJECT BASED REACT + VITE + TAILWIND + RTK + REDUX-SAGA</h1>
      <h6>Created By: Dadan Gusna</h6>
    </div>
  )
}

export default App
