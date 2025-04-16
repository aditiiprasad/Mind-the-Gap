import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import bgGif from '../assets/bg.gif' 

export default function Home() {
  const navigate = useNavigate()

  return (
    <div
      className="min-h-screen bg-cover bg-center flex p-2 flex-col"
      style={{
        backgroundImage: `url(${bgGif})`
      }}
    >
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center backdrop-brightness-50 p-4 text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-md mb-8">
          🧠 Welcome to the Drag & Drop Quiz!
        </h1>
        <button
          onClick={() => navigate('/game')}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full text-lg sm:text-xl shadow-xl transition-all duration-300"
        >
          Start Game
        </button>
      </div>
    </div>
  )
}
