import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import QuizPage from './pages/QuixPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <QuizPage/>
    </>
  )
}

export default App
