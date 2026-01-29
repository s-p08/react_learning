import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setpassword] = useState("")
  const passwordRef = useRef(null) // 🔹 reference to password input

  // 🔹 Generate password logic
  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIKLMNOPQRSTVXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*_+=[]{}~`"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setpassword(pass)
  }, [length, numberAllowed, charAllowed, setpassword])

  // 🔹 Automatically generate password when options change
  useEffect(() => {
    PasswordGenerator()
  }, [PasswordGenerator])

  // 🔹 Copy password to clipboard using ref
  const copyToClipboard = () => {
    passwordRef.current?.select() // select the text inside input
    passwordRef.current?.setSelectionRange(0, 999) // optional for mobile
    window.navigator.clipboard.writeText(Password)
  }

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange bg-gray-900'>
        <h2 className='text-center text-white py-3 text-xl font-semibold'>Password Generator</h2>

        <div className='flex flex-col shadow rounded-lg overflow-hidden mb-4 p-4 text-white'>
          {/* Password + Copy */}
          <div className='flex mb-3'>
            <input
              type="text"
              value={Password}
              ref={passwordRef} // 🔹 useRef linked here
              className='outline-none w-full py-1 px-3 text-black rounded-l'
              placeholder="password"
              readOnly
            />
            <button
              onClick={copyToClipboard}
              className='outline-none bg-green-700 hover:bg-green-800 text-white px-3 py-0.5 shrink-0 rounded-r'
            >
              Copy
            </button>
          </div>

          {/* Length Slider */}
          <div className='flex items-center gap-3 mb-3'>
            <label>Length: {length}</label>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => setlength(Number(e.target.value))}
              className='cursor-pointer w-full accent-green-600'
            />
          </div>

          {/* Checkboxes */}
          <div className='flex items-center justify-between'>
            <label className='flex items-center gap-2'>
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed(prev => !prev)}
              />
              Numbers
            </label>

            <label className='flex items-center gap-2'>
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed(prev => !prev)}
              />
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
