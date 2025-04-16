import { Home } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png"

export default function Header() {
  const navigate = useNavigate()

  return (
    <header className="w-full bg-gradient-to-r from-pink-500 via-yellow-500 to-orange-500 p-2 shadow-lg rounded-2xl flex items-center justify-between px-6">
      {/* Logo & Title */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="logo"
          className="w-20 h-20"
        />
        <h1 className="text-2xl font-bold text-white drop-shadow ">
          Mind The Gap
        </h1>
      </div>

      {/* Home Icon */}
      <button
        onClick={() => navigate('/')}
        className="text-white hover:text-purple-900 transition"
        title="Home"
      >
        <Home size={32} />
      </button>
    </header>
  )
}
