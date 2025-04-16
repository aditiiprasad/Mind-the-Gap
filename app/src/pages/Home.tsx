import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div
      className="min-h-screen bg-cover bg-center flex p-2 flex-col"
   
    >
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center backdrop-brightness-50 p-4 text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-md mb-8">
          Ready?
        </h1>

       
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 mb-8 max-w-lg w-full text-white shadow-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-pink-300">How to Play</h2>
          <ul className="space-y-3 text-left text-base sm:text-lg">
            <li>
              <strong>Sentence Construction:</strong> Arrange the given words in the correct order to complete the sentence.
            </li>
            <li>
              <strong>Time Per Question:</strong> 30 seconds
            </li>
            <li>
              <strong>Total Questions:</strong> 10
            </li>
          </ul>
        </div>

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
