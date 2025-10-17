import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-black h-screen'>
      <Footer />
    </main>
  )
}

export default App
