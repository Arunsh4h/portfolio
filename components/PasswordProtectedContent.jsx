import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image' // Assuming you're using Next.js based on your code
import Typewriter from '@/components/Typewriter'

// Add regular CSS instead of styled-jsx
const styles = {
  xMark: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  xMarkLine1: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '70%',
    height: '3px',
    background: '#3B82F6',
    borderRadius: '2px',
    transform: 'translate(-50%, -50%) rotate(45deg)',
  },
  xMarkLine2: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '70%',
    height: '3px',
    background: '#3B82F6',
    borderRadius: '2px',
    transform: 'translate(-50%, -50%) rotate(-45deg)',
  },
  oMark: {
    width: '70%',
    height: '70%',
    border: '3px solid #3B82F6',
    borderRadius: '50%',
  },
  cell: {
    aspectRatio: '1/1',
  },
}

// AnimatedPasswordInput component with improved debugging
const AnimatedPasswordInput = ({
  password,
  setPassword,
  handleKeyPress,
  checkPassword,
  hint,
  shake,
}) => {
  const [showParticles, setShowParticles] = useState(false)
  const [particles, setParticles] = useState([])

  // Create particles animation effect
  const createParticles = () => {
    setShowParticles(true)
    const newParticles = []

    for (let i = 0; i < 40; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        scale: Math.random() * 0.6 + 0.2,
        opacity: Math.random(),
        speed: Math.random() * 2 + 1,
      })
    }

    setParticles(newParticles)

    // Clear particles after animation completes
    setTimeout(() => {
      setShowParticles(false)
      setParticles([])
    }, 2000)
  }

  // Trigger particles on successful unlock
  useEffect(() => {
    if (hint && hint.includes && hint.includes('granted')) {
      createParticles()
    }
  }, [hint])

  // Handle password submission directly in component
  const handleSubmit = () => {
    checkPassword()
  }

  return (
    <div className="mb-8 w-full max-w-xs">
      <style>
        {`
      input:not(:last-child),
      textarea:not(:last-child) {
        margin-bottom: 0;
      }
    `}
      </style>
      <div className="flex items-center rounded-2xl border border-gray-600 bg-gray-900 shadow-lg transition-all focus-within:border-blue-500">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter password"
          className="w-full bg-transparent px-4 py-3 text-white placeholder-gray-400 outline-none"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-full items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-[14px] text-white transition-all duration-300 hover:from-blue-500 hover:to-purple-500"
          onClick={handleSubmit}
        >
          Unlock
        </motion.button>
      </div>

      {hint && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-center text-sm text-blue-400"
        >
          {hint}
        </motion.p>
      )}
    </div>
  )
}

const TicTacToePasswordGame = ({ children }) => {
  // Custom password list
  const passwordList = [
    'blacklisted',
    'Blacklisted',
    'superman',
    'bittu',
    'Blacky',
    'blacky',
    'Bittu',
    'potter',
    'Potter',
    'Harry potter',
    'Harry Potter',
    'Chidu',
    'chidu',
    'BT',
    'bt',
    'b.t',
    'B.T',
    'justsuperman',
    'Superman',
    'JustSuperman',
    'January',
    'january',
    'goa',
    'Goa',
    'Mumbai',
    'mumbai',
    'Delhi',
    'delhi',
    'hogward',
    'ujjain',
    'Ujjain',
    'Morjim',
    'morjim',
    'papa',
    'Papa',
    'sexy',
    'Sexy',
    'motigand',
    'mg',
    'moti gand',
    'Moti gand',
    'Moti Gand',
    'M G',
    'm g',
    'MG',
    'Shahji',
    'shahji',
    'Bhopal',
    'bhopal',
    'Blacklisted Boy Arun',
    'Blacklisted Boy arun',
    'Blacklisted boy arun',
    'blacklisted boy arun',
    'blacklisted boy arunn',
    'New York',
    'new york',
    'Tokyo',
    'tokyo',
    'Sydney',
    'sydney',
    'Bangkok',
    'bangkok',
    'Berlin',
    'berlin',
    'Los Angeles',
    'los angeles',
    'Barcelona',
    'barcelona',
    'Paris',
    'paris',
    'Vienna',
    'vienna',
    'Amsterdam',
    'amsterdam',
    'Beijing',
    'beijing',
    'Prague',
    'prague',
    'Cape Town',
    'cape town',
    'Rome',
    'rome',
    'Vancouver',
    'vancouver',
    'San Francisco',
    'san francisco',
    'Madrid',
    'madrid',
    'London',
    'london',
    'Dubai',
    'dubai',
    'Melbourne',
    'melbourne',
    'Seoul',
    'seoul',
    'Montreal',
    'montreal',
    'Chicago',
    'chicago',
    'İstanbul',
    'istanbul',
    'Hong Kong',
    'hong kong',
    'New Orleans',
    'new orleans',
    'Lisbon',
    'lisbon',
    'Miami',
    'miami',
    'Stockholm',
    'stockholm',
    'Milan',
    'milan',
    'Las Vegas',
    'las vegas',
    'Budapest',
    'budapest',
    'Copenhagen',
    'copenhagen',
    'Valencia',
    'valencia',
    'Helsinki',
    'helsinki',
    'Toronto',
    'toronto',
    'Porto',
    'porto',
    'Dublin',
    'dublin',
    'Oslo',
    'oslo',
    'Munich',
    'munich',
    'Orlando',
    'orlando',
    'Mexico City',
    'mexico city',
    'Rio de Janeiro',
    'rio de janeiro',
    'Shanghai',
    'shanghai',
    'Boston',
    'boston',
    'Glasgow',
    'glasgow',
    'Abu Dhabi',
    'abu dhabi',
    'Hanoi',
    'hanoi',
    'Osaka',
    'osaka',
    'Marrakesh',
    'marrakesh',
    'Seattle',
    'seattle',
    'Mumbai',
    'mumbai',
    'Bengaluru',
    'bengaluru',
    'Pune',
    'pune',
    'Chennai',
    'chennai',
    'Ahmedabad',
    'ahmedabad',
    'Coimbatore',
    'coimbatore',
    'Surat',
    'surat',
    'Navi Mumbai',
    'navi mumbai',
    'Kolkata',
    'kolkata',
    'Hyderabad',
    'hyderabad',
    'Indore',
    'indore',
    'Vadodara',
    'vadodara',
    'Kochi',
    'kochi',
    'Chandigarh',
    'chandigarh',
    'Jaipur',
    'jaipur',
    'Visakhapatnam',
    'visakhapatnam',
    'Gurugram',
    'gurugram',
    'Lucknow',
    'lucknow',
    'Bhubaneswar',
    'bhubaneswar',
    'Amritsar',
    'amritsar',
    'Thiruvananthapuram',
    'thiruvananthapuram',
    'Nagpur',
    'nagpur',
    'Bhopal',
    'bhopal',
    'New Delhi',
    'new delhi',
    'Jodhpur',
    'jodhpur',
    'Madurai',
    'madurai',
    'Chhatrapati Sambhaji Nagar',
    'chhatrapati sambhaji nagar',
    'Noida',
    'noida',
    'Varanasi',
    'varanasi',
    'Agra',
    'agra',
    'Udaipur',
    'udaipur',
    'Mangaluru',
    'mangaluru',
    'Dehradun',
    'dehradun',
    'Prayagraj',
    'prayagraj',
    'Nashik',
    'nashik',
    'Guwahati',
    'guwahati',
    'Jamshedpur',
    'jamshedpur',
    'Mysuru',
    'mysuru',
    'Bhiwandi',
    'bhiwandi',
    'Jabalpur',
    'jabalpur',
    'Ghaziabad',
    'ghaziabad',
    'Tiruchirappalli',
    'tiruchirappalli',
    'Kanpur',
    'kanpur',
    'Kolhapur',
    'kolhapur',
    'Meerut',
    'meerut',
    'Thane',
    'thane',
    'Patna',
    'patna',
    'Ludhiana',
    'ludhiana',
  ]

  // Password protection state
  const [isLocked, setIsLocked] = useState(true)
  const [password, setPassword] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [shake, setShake] = useState(false)
  const [hint, setHint] = useState('')
  const [unlockMethod, setUnlockMethod] = useState('')

  // Game state
  const [board, setBoard] = useState(Array(9).fill(0))
  const [turn, setTurn] = useState('X')
  const [gameStatus, setGameStatus] = useState('selection') // selection, running, over
  const [result, setResult] = useState('active')
  const [playerSymbol, setPlayerSymbol] = useState('')
  const [compSymbol, setCompSymbol] = useState('')
  const [playerTurn, setPlayerTurn] = useState(true)
  const [message, setMessage] = useState('')

  // Password check with debug logging
  const checkPassword = () => {
    console.log(`Checking password: "${password}"`)
    console.log(`Normalized password: "${password.toLowerCase().trim()}"`)

    // For debugging, log a few passwords from the list
    console.log('Sample passwords from list:', passwordList.slice(0, 5))
    console.log('List length:', passwordList.length)

    const normalizedPassword = password.toLowerCase().trim()
    const isMatch = passwordList.some((p) => p.toLowerCase().trim() === normalizedPassword)

    console.log('Password match found:', isMatch)

    if (isMatch) {
      setHint('Access granted! 🎉')
      setIsLocked(false)
      setUnlockMethod('password')
      try {
        localStorage.setItem('contentUnlocked', 'true')
      } catch (error) {
        console.error('Local storage error:', error)
      }
    } else {
      setHint('Access denied')
      setShake(true)
      setAttempts(attempts + 1)
      setTimeout(() => setShake(false), 500)
    }
  }

  // Check if content was previously unlocked
  useEffect(() => {
    try {
      const isUnlocked =
        typeof window !== 'undefined' && localStorage.getItem('contentUnlocked') === 'true'
      if (isUnlocked) {
        setIsLocked(false)
      }
    } catch (error) {
      console.error('Local storage access error:', error)
    }
  }, [])

  // Show hint after 3 failed attempts
  useEffect(() => {
    if (attempts >= 3 && !hint) {
      setHint('Try one of the passwords from the hint.')
    }
  }, [attempts, hint])

  // Handle keyboard press for password input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      checkPassword()
    }
  }

  // Game logic functions
  const checkGameOver = (currentBoard) => {
    // Check horizontally
    for (let i = 0; i <= 6; i += 3) {
      if (
        currentBoard[i] !== 0 &&
        currentBoard[i] === currentBoard[i + 1] &&
        currentBoard[i + 1] === currentBoard[i + 2]
      ) {
        return currentBoard[i]
      }
    }

    // Check vertically
    for (let i = 0; i <= 2; i++) {
      if (
        currentBoard[i] !== 0 &&
        currentBoard[i] === currentBoard[i + 3] &&
        currentBoard[i + 3] === currentBoard[i + 6]
      ) {
        return currentBoard[i]
      }
    }

    // Check diagonally
    if (
      currentBoard[4] !== 0 &&
      ((currentBoard[0] === currentBoard[4] && currentBoard[4] === currentBoard[8]) ||
        (currentBoard[2] === currentBoard[4] && currentBoard[4] === currentBoard[6]))
    ) {
      return currentBoard[4]
    }

    // Check for draw
    if (!currentBoard.includes(0)) {
      return 'draw'
    }

    return 'active'
  }

  const getEmptyCells = (currentBoard) => {
    const indexes = []
    for (let i = 0; i < 9; i++) {
      if (currentBoard[i] === 0) {
        indexes.push(i)
      }
    }
    return indexes
  }

  // Minimax algorithm for AI
  const minimax = (depth, isMaximizing, currentBoard, alpha, beta) => {
    const result = checkGameOver(currentBoard)

    if (result !== 'active') {
      if (result === playerSymbol) return -10 + depth
      if (result === compSymbol) return 10 - depth
      return 0
    }

    if (isMaximizing) {
      let bestScore = -Infinity
      const emptyCells = getEmptyCells(currentBoard)

      for (let i = 0; i < emptyCells.length; i++) {
        const cell = emptyCells[i]
        const newBoard = [...currentBoard]
        newBoard[cell] = compSymbol

        const score = minimax(depth + 1, false, newBoard, alpha, beta)
        bestScore = Math.max(score, bestScore)
        alpha = Math.max(alpha, bestScore)

        if (beta <= alpha) break
      }

      return bestScore
    } else {
      let bestScore = Infinity
      const emptyCells = getEmptyCells(currentBoard)

      for (let i = 0; i < emptyCells.length; i++) {
        const cell = emptyCells[i]
        const newBoard = [...currentBoard]
        newBoard[cell] = playerSymbol

        const score = minimax(depth + 1, true, newBoard, alpha, beta)
        bestScore = Math.min(score, bestScore)
        beta = Math.min(beta, bestScore)

        if (beta <= alpha) break
      }

      return bestScore
    }
  }

  const findBestMove = (currentBoard) => {
    let bestScore = -Infinity
    let bestMove
    const emptyCells = getEmptyCells(currentBoard)

    for (let i = 0; i < emptyCells.length; i++) {
      const cell = emptyCells[i]
      const newBoard = [...currentBoard]
      newBoard[cell] = compSymbol

      const score = minimax(0, false, newBoard, -Infinity, Infinity)

      if (score > bestScore) {
        bestScore = score
        bestMove = cell
      }
    }

    return bestMove
  }

  // AI move
  const aiMove = () => {
    if (gameStatus === 'running' && !playerTurn) {
      const bestMove = findBestMove(board)
      const newBoard = [...board]
      newBoard[bestMove] = compSymbol
      setBoard(newBoard)

      const gameResult = checkGameOver(newBoard)
      if (gameResult !== 'active') {
        endGame(gameResult)
      } else {
        setPlayerTurn(true)
      }
    }
  }

  // Effect for AI move with delay
  useEffect(() => {
    let timer
    if (gameStatus === 'running' && !playerTurn) {
      timer = setTimeout(() => {
        aiMove()
      }, 700)
    }
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [playerTurn, gameStatus])

  // Player move
  const handleCellClick = (index) => {
    if (gameStatus === 'running' && playerTurn && board[index] === 0) {
      const newBoard = [...board]
      newBoard[index] = playerSymbol
      setBoard(newBoard)

      const gameResult = checkGameOver(newBoard)
      if (gameResult !== 'active') {
        endGame(gameResult)
      } else {
        setPlayerTurn(false)
      }
    }
  }

  // End game and check if player won
  const endGame = (result) => {
    setGameStatus('over')
    setResult(result)

    if (result === 'draw') {
      setMessage("It's a draw!")
    } else if (result === playerSymbol) {
      setMessage('You win!')
      setHint('Access granted! 🎉')
      setIsLocked(false)
      setUnlockMethod('game')
      try {
        localStorage.setItem('contentUnlocked', 'true')
      } catch (error) {
        console.error('Local storage error:', error)
      }
    } else {
      setMessage('You lose!')
    }
  }

  // Start a new game
  const startGame = (symbol) => {
    setPlayerSymbol(symbol)
    setCompSymbol(symbol === 'X' ? 'O' : 'X')
    setGameStatus('running')
    setBoard(Array(9).fill(0))
    setResult('active')
    setMessage('')

    if (symbol === 'O') {
      setPlayerTurn(false)
    } else {
      setPlayerTurn(true)
    }
  }

  // Reset game for a new round
  const resetGame = () => {
    setGameStatus('selection')
    setBoard(Array(9).fill(0))
    setResult('active')
    setMessage('')
  }

  // Render cell content
  const renderCell = (index) => {
    if (board[index] === 'X') {
      return (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} style={styles.xMark}>
          <span style={styles.xMarkLine1}></span>
          <span style={styles.xMarkLine2}></span>
        </motion.div>
      )
    } else if (board[index] === 'O') {
      return <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} style={styles.oMark} />
    }
    return null
  }

  return (
    <div className="mx-auto w-full max-w-full">
      <AnimatePresence>
        {isLocked ? (
          <motion.div
            className="relative overflow-hidden rounded-lg bg-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Blurred Background with Animated Gradient */}
            <motion.div
              className="absolute inset-0 z-10 bg-black backdrop-blur-md"
              animate={{
                background: [
                  'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(17,24,39,0.8) 50%, rgba(0,0,0,0.9) 100%)',
                  'linear-gradient(135deg, rgba(17,24,39,0.8) 0%, rgba(0,0,0,0.9) 50%, rgba(17,24,39,0.8) 100%)',
                  'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(17,24,39,0.8) 50%, rgba(0,0,0,0.9) 100%)',
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
            >
              {/* Animated particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-blue-500 opacity-20"
                    style={{
                      width: Math.random() * 8 + 2,
                      height: Math.random() * 8 + 2,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -100],
                      opacity: [0.2, 0],
                    }}
                    transition={{
                      duration: Math.random() * 5 + 5,
                      repeat: Infinity,
                      repeatType: 'loop',
                      delay: Math.random() * 5,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Lock UI */}
            <motion.div
              className="relative z-20 flex min-h-[730px] flex-col items-center justify-center p-8"
              animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              <motion.h3
                className="mb-4 text-center text-2xl font-bold text-white"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                🔒 Protected Content
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex justify-center overflow-hidden rounded-lg shadow-lg"
              >
                {/* Using the GIF from the public directory */}
                <img
                  src="/fbbdaffeaaf99090ff2a6ffc1160cc70.gif"
                  alt="Protected Content Animation"
                  className="h-auto w-full max-w-md"
                />
              </motion.div>
              <Typewriter lineClassName="text-gradient-500">
                <motion.p
                  className="mb-0 w-full overflow-hidden break-words px-4 py-3 text-center text-base sm:text-lg md:text-xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  🔐 Hint: My name, my nicknames, and cities
                </motion.p>
              </Typewriter>

              <Typewriter lineClassName="text-gradient-500">
                <motion.p
                  className="mb-0 w-full overflow-hidden break-words pb-4 text-center text-base sm:text-lg md:text-xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  i love can be used as the password.
                </motion.p>
              </Typewriter>

              {/* Replace original password input with AnimatedPasswordInput */}
              <AnimatedPasswordInput
                password={password}
                setPassword={setPassword}
                handleKeyPress={handleKeyPress}
                checkPassword={checkPassword}
                hint={hint}
                shake={shake}
              />

              <motion.div
                className="mt-4 w-full max-w-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="border-t border-gray-700 pt-6 pb-4">
                  <Typewriter lineClassName="text-gradient-500">
                    <motion.p
                      className="mb-6 pt-4 pb-4 text-center text-xl "
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <p className="mb-4 text-center text-yellow-300">Or beat my AI to unlock</p>
                    </motion.p>
                  </Typewriter>
                </div>

                {gameStatus === 'selection' && (
                  <div className="text-center">
                    <h4 className="mb-3 text-white">Play as:</h4>
                    <div className="flex justify-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
                        onClick={() => startGame('X')}
                      >
                        X
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
                        onClick={() => startGame('O')}
                      >
                        O
                      </motion.button>
                    </div>
                  </div>
                )}

                {gameStatus !== 'selection' && (
                  <div className="game-container">
                    <div className="grid grid-cols-3 items-center justify-center gap-1 rounded bg-gray-700 p-1">
                      {board.map((cell, index) => (
                        <motion.div
                          key={index}
                          style={styles.cell}
                          className={`h-26 relative flex cursor-pointer items-center justify-center bg-gray-800 ${
                            board[index] === 0 && gameStatus === 'running' && playerTurn
                              ? 'hover:bg-gray-700'
                              : ''
                          }`}
                          onClick={() => handleCellClick(index)}
                          whileHover={
                            board[index] === 0 && gameStatus === 'running' && playerTurn
                              ? { scale: 1.05 }
                              : {}
                          }
                          whileTap={
                            board[index] === 0 && gameStatus === 'running' && playerTurn
                              ? { scale: 0.95 }
                              : {}
                          }
                        >
                          {renderCell(index)}
                        </motion.div>
                      ))}
                    </div>

                    {gameStatus === 'over' && (
                      <motion.div
                        className="mt-4 text-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <h4 className="mb-2 text-white">{message}</h4>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-2 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                          onClick={resetGame}
                        >
                          Play Again
                        </motion.button>
                      </motion.div>
                    )}
                  </div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Render the children prop which will be your about.jsx content */}
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TicTacToePasswordGame
