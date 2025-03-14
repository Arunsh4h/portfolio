// RocketForm.js

import { useEffect } from 'react'

const RocketForm = () => {
  useEffect(() => {
    const submitButton = document.querySelector('.button')
    const restartButton = document.querySelector('.restart')
    const container = document.querySelector('.container')

    const toggleAnimate = () => {
      submitButton.classList.add('animate')
      // SOS button will appear via CSS animation after rocket is gone
    }

    const showNotification = (message, color) => {
      const notification = document.createElement('div')
      notification.className = 'notification'
      notification.style.color = color
      notification.style.fontWeight = 'bold'
      notification.innerText = message
      container.appendChild(notification)
      setTimeout(() => {
        notification.remove()
      }, 4000)
    }

    const handleRestartClick = () => {
      // Hide the SOS button immediately when clicked
      restartButton.style.opacity = '0'
      restartButton.style.visibility = 'hidden'
      restartButton.style.pointerEvents = 'none'

      // Simple, cute text notification sequence with random animations
      // Reset any background styling
      container.style.background = 'none'

      // Animation types for random selection
      const animations = ['fadeIn', 'slideLeft', 'slideRight', 'popIn', 'bounce']

      // Show notifications one after another with random cute animations
      setTimeout(
        () =>
          showNotification(
            '🚨 RED ALERT! Is this an emergency or just you avoiding responsibilities?'
          ),
        0
      )
      setTimeout(
        () =>
          showNotification(
            '🤔 Quick question… does this involve fire, aliens, or a free vacation?'
          ),
        5000
      )
      setTimeout(
        () =>
          showNotification(
            '😱 OMG, you’re still here? Now I’m actually worried. Do we call Batman?'
          ),
        10000
      )
      setTimeout(
        () => showNotification('⚠️ When the pop-up comes, hit "YES" like it owes you money!'),
        14000
      )
      setTimeout(
        () => showNotification('🥴 If this isn’t life or death, I’m going back to my nap.'),
        18000
      )

      // Show confirmation alert at the end
      setTimeout(() => {
        showNotification('🤨 You sure about this? Like, REALLY sure?')

        // Add a simple, cute button
        const link = document.createElement('a')
        link.href = 'https://ig.me/m/arunnshah'
        link.target = '_blank'
        link.innerText = 'YES'
        link.className = 'yes-link'

        // Simple styling
        link.style.position = 'absolute'
        link.style.left = '50%'
        link.style.transform = 'translateX(-50%)'
        link.style.bottom = '20%'
        link.style.padding = '10px 30px'
        link.style.fontSize = '18px'
        link.style.fontWeight = 'bold'
        link.style.color = '#fff'
        link.style.backgroundColor = 'transparent'
        link.style.border = '2px solid #333'
        link.style.borderRadius = '50px'
        link.style.textDecoration = 'none'
        link.style.transition = 'all 0.3s ease'

        // Simple click effect
        link.addEventListener('click', () => {
          link.style.transform = 'translateX(-50%) scale(0.95)'

          setTimeout(() => {
            window.open(link.href, '_blank')
            window.location.reload() // Reset the page
          }, 300)
        })

        container.appendChild(link)
      }, 21000)

      // Helper function for creating cute text notifications with random animations
      function showNotification(message) {
        const notification = document.createElement('div')
        notification.className = 'notification'

        // Choose a random animation
        const animationClass = animations[Math.floor(Math.random() * animations.length)]
        notification.classList.add(animationClass)

        // Set the message
        notification.textContent = message

        // Apply simple, cute text styling
        notification.style.color = '#f0f0f0'
        notification.style.padding = '15px'
        notification.style.margin = '10px auto'
        notification.style.maxWidth = '400px'
        notification.style.fontFamily = 'Arial, sans-serif'
        notification.style.fontSize = '18px'
        notification.style.textAlign = 'center'
        notification.style.fontWeight = '500'

        container.appendChild(notification)

        // Auto-remove after display
        setTimeout(() => {
          notification.classList.add('exit')
          setTimeout(() => {
            notification.remove()
          }, 800)
        }, 4500)
      }

      // Add cute animations without SVGs or backgrounds
      const style = document.createElement('style')
      style.textContent = `
  .notification {
    position: relative;
    z-index: 100;
    opacity: 0;
    transition: all 0.5s ease;
  }
  
  /* Entry animations */
  .fadeIn {
    opacity: 0;
    animation: fadeIn 0.8s forwards;
  }
  
  .slideLeft {
    transform: translateX(-50px);
    opacity: 0;
    animation: slideLeft 0.8s forwards;
  }
  
  .slideRight {
    transform: translateX(50px);
    opacity: 0;
    animation: slideRight 0.8s forwards;
  }
  
  .popIn {
    transform: scale(0.5);
    opacity: 0;
    animation: popIn 0.8s forwards;
  }
  
  .bounce {
    transform: translateY(-30px);
    opacity: 0;
    animation: bounce 0.8s forwards;
  }
  
  /* Exit animation for all */
  .exit {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease;
  }
  
  /* Animation keyframes */
  @keyframes fadeIn {
    to { opacity: 1; }
  }
  
  @keyframes slideLeft {
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes slideRight {
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes popIn {
    50% { transform: scale(1.1); opacity: 0.8; }
    to { transform: scale(1); opacity: 1; }
  }
  
  @keyframes bounce {
    0% { transform: translateY(-30px); opacity: 0; }
    50% { transform: translateY(10px); opacity: 0.8; }
    75% { transform: translateY(-5px); opacity: 0.9; }
    100% { transform: translateY(0); opacity: 1; }
  }
  
  /* Button styling */
  .yes-link:hover {
    background-color: #333;
    color: white;
    transform: translateX(-50%) scale(1.05);
  }
`

      document.head.appendChild(style)
    }

    submitButton.addEventListener('click', toggleAnimate)
    restartButton.addEventListener('click', handleRestartClick)

    return () => {
      // Remove event listeners on component unmount
      submitButton.removeEventListener('click', toggleAnimate)
      restartButton.removeEventListener('click', handleRestartClick)
    }
  }, [])

  return (
    <div className="container">
      <button className="restart">Send SOS message!</button>
      <button className="button">
        <div className="text">
          <span>Critical Support Request ? </span>
          <svg
            className="rocket"
            id="Capa_1"
            height="30"
            viewBox="0 0 512.056 512.056"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
          >
            <path d="m350.038 120.265c-7.206-36.687-27.738-70.157-57.939-92.992l-36.071-27.273-36.071 27.272c-30.201 22.835-50.733 56.305-57.939 92.992h188.02z" />
            <path d="m394.777 252.144v151.096h77.609v-69.027z" />
            <path d="m337.633 221.387c-11.732 0-21.277 9.545-21.277 21.278v145.279h48.422v-145.279c0-11.732-9.545-21.278-21.277-21.278z" />
            <path d="m195.701 242.665c0-11.732-9.545-21.278-21.277-21.278h-5.867c-11.732 0-21.277 9.545-21.277 21.278v145.279h48.422v-145.279z" />
            <path d="m117.279 252.144-77.609 82.069v69.027h77.609z" />
            <path d="m286.355 417.944v-175.279c0-28.275 23.003-51.278 51.277-51.278h5.867c3.213 0 6.353.311 9.403.879v-42.001h-193.75v42.001c3.051-.568 6.19-.879 9.403-.879h5.867c28.274 0 51.277 23.003 51.277 51.278v175.279h-54.474c-2.706 12.642-2.828 26.509 3.811 38.389l4.293 7.683h25.264c5.605 13.589 18.466 35.112 45.957 45.893l5.477 2.148 5.477-2.148c27.491-10.781 40.352-32.303 45.957-45.893h25.264l4.294-7.683c6.638-11.88 6.516-25.747 3.81-38.389z" />
          </svg>
          <span></span>
        </div>
      </button>

      <style jsx>{`
        :root {
          --bright-blue: rgb(0, 100, 255);
          --bright-green: rgb(0, 255, 0);
          --bright-red: rgb(255, 0, 0);
          --background: #18181b;
          --foreground: white;
          --border-size: 2px;
          --border-radius: 0.15em;
        }

        /* Container */
        .container {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1rem;
          margin-left: 25px;
          min-height: 80px;
        }

        /* Button styling */
        .button {
          --border-angle-1: 0deg;
          --border-angle-2: 90deg;
          --border-angle-3: 180deg;
          color: inherit;
          cursor: pointer;
          font-size: 1.3rem;
          font-weight: 700;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          border: 0;
          padding: var(--border-size);
          display: flex;
          width: max-content;
          border-radius: var(--border-radius);
          background-color: transparent;
          background-image: conic-gradient(
              from var(--border-angle-1) at 10% 15%,
              transparent,
              var(--bright-blue) 10%,
              transparent 30%,
              transparent
            ),
            conic-gradient(
              from var(--border-angle-2) at 70% 60%,
              transparent,
              var(--bright-green) 10%,
              transparent 60%,
              transparent
            ),
            conic-gradient(
              from var(--border-angle-3) at 50% 20%,
              transparent,
              var(--bright-red) 10%,
              transparent 50%,
              transparent
            );
          animation: rotateBackground 3s linear infinite, rotateBackground2 8s linear infinite,
            rotateBackground3 13s linear infinite;
        }

        .button .text {
          background: var(--background);
          padding: 8px 0;
          width: 180px;
          border-radius: calc(var(--border-radius) - var(--border-size));
          color: #f9d047;
          position: relative;
          z-index: 1;
        }

        /* Enhanced rocket styles */
        .rocket {
          display: inline-block;
          transition: all 0.3s ease-in-out;
          position: relative;
          z-index: 2;
        }

        /* Enhanced rocket animation with flames */
        .button.animate .text > .rocket {
          transform: translateX(-50%);
          animation: vibration 0.5s ease-in-out 0.3s 2, launch 3s ease-in-out 1.3s forwards;
        }

        @keyframes vibration {
          0% {
            margin-left: 0px;
          }
          20% {
            margin-left: -3px;
          }
          40% {
            margin-left: 3px;
          }
          60% {
            margin-left: -3px;
          }
          80% {
            margin-left: 3px;
          }
          100% {
            margin-left: 0px;
          }
        }

        @keyframes launch {
          0% {
            transform: translate(-50%, 0) scale(2);
          }
          5% {
            transform: translate(-50%, -12.5vh) scale(2.1);
          }
          10% {
            transform: translate(-50%, -25vh) scale(2.2);
          }
          15% {
            transform: translate(-50%, -37.5vh) scale(2.3);
          }
          20% {
            transform: translate(-50%, -50vh) scale(2.4);
          }
          25% {
            transform: translate(-50%, -62.5vh) scale(2.5);
          }
          30% {
            transform: translate(-50%, -75vh) scale(2.6);
          }
          35% {
            transform: translate(-50%, -87.5vh) scale(2.7);
          }
          40% {
            transform: translate(-50%, -100vh) scale(2.8);
          }
          45% {
            transform: translate(-50%, -112.5vh) scale(2.9);
          }
          50% {
            transform: translate(-50%, -125vh) scale(3);
          }
          55% {
            transform: translate(-50%, -137.5vh) scale(3.1);
          }
          60% {
            transform: translate(-50%, -150vh) scale(3.2);
          }
          65% {
            transform: translate(-50%, -162.5vh) scale(3.3);
          }
          70% {
            transform: translate(-50%, -175vh) scale(3.4);
          }
          75% {
            transform: translate(-50%, -187.5vh) scale(3.5);
          }
          80% {
            transform: translate(-50%, -200vh) scale(3.6);
          }
          85% {
            transform: translate(-50%, -212.5vh) scale(3.7);
          }
          90% {
            transform: translate(-50%, -225vh) scale(3.8);
          }
          95% {
            transform: translate(-50%, -237.5vh) scale(3.9);
          }
          100% {
            transform: translate(-50%, -250vh) scale(4);
          }
        }

        /* Text animation */
        .button.animate .text > span {
          transition: all 0.3s ease-in-out;
          animation: ocultText 0.3s ease-in-out forwards;
        }

        @keyframes ocultText {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        /* Button background animation */
        .animate {
          animation: backgroundImage 0.1s ease-in-out 1s forwards;
        }

        @keyframes backgroundImage {
          100% {
            background-image: var(--background);
            pointer-events: none;
          }
        }

        /* SOS button - NOW VISIBLE BUT TRANSPARENT INITIALLY */
        .restart {
          position: absolute;
          top: 50;
          left: 25px; /* Align with container's margin-left */
          border: 0;
          font-weight: bolder;
          background: transparent;
          color: rgb(255, 238, 0);
          text-shadow: 1px 1px #ff0000ea;
          font-size: 0.7rem;
          cursor: pointer;
          font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
          border-radius: var(--border-radius);
          transition: all 0.3s ease-in-out;
          padding: 0px;
          opacity: 0; /* Start invisible but present */
          pointer-events: none; /* Disable interaction until shown */
          visibility: visible; /* Ensure it's in the DOM */
          z-index: 10; /* Ensure it's above other elements */
        }

        .restart:hover {
          background: rgb(255, 255, 0);
          color: black;
          padding: 5px;
          border-radius: 9px;
        }

        /* Make SOS button appear after rocket animation */
        .button.animate ~ .restart {
          animation: showRestartButton 0.5s ease-in-out 2.5s forwards;
        }

        @keyframes showRestartButton {
          100% {
            opacity: 1;
            pointer-events: auto; /* Enable interaction */
            cursor: pointer;
          }
        }

        /* Notification styles */
        .notification {
          position: absolute;
          top: 0;
          left: 25px; /* Match the positioning of the SOS button */
          background-color: rgba(0, 0, 0, 0.7);
          padding: 10px 15px;
          border-radius: 8px;
          z-index: 20;
          animation: fadeIn 0.5s ease-in-out;
          text-align: left;
          transform: none; /* Remove transform that was centering */
          max-width: 80%;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* YES link button */
        .yes-link {
          position: absolute;
          top: 50px;
          left: 25px; /* Match positioning with SOS button and notifications */
          background-color: #0066ff;
          color: white;
          padding: 8px 20px;
          border-radius: 20px;
          text-decoration: none;
          font-weight: bold;
          z-index: 30;
          animation: pulseButton 1.5s infinite;
          transform: none; /* Remove transform that was centering */
        }

        @keyframes pulseButton {
          0%,
          100% {
            box-shadow: 0 0 5px rgba(0, 102, 255, 0.5);
          }
          50% {
            box-shadow: 0 0 15px rgba(0, 102, 255, 0.8);
          }
        }

        /* Gradient animations */
        @keyframes rotateBackground {
          to {
            --border-angle-1: 360deg;
          }
        }

        @keyframes rotateBackground2 {
          to {
            --border-angle-2: -270deg;
          }
        }

        @keyframes rotateBackground3 {
          to {
            --border-angle-3: 540deg;
          }
        }
      `}</style>
    </div>
  )
}

export default RocketForm
