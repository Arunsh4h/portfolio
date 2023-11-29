// RocketForm.js

import { useEffect } from 'react'

const RocketForm = () => {
  useEffect(() => {
    const submitButton = document.querySelector('.button')
    const restartButton = document.querySelector('.restart')
    const container = document.querySelector('.container')
    const toggleAnimate = () => submitButton.classList.toggle('animate')

    const showNotification = (message, color) => {
      const notification = document.createElement('div')
      notification.className = 'notification'
      notification.style.color = color
      notification.style.fontWeight = 'bold'
      notification.innerText = message
      container.appendChild(notification)
      setTimeout(() => {
        notification.remove()
      }, 3000)
    }

    const handleRestartClick = () => {
      // Show notifications
      setTimeout(() => showNotification('If this isnt super-duper important,', 'purple'), 0)
      setTimeout(() => showNotification('4 seconds to ponder life choices...', 'yellow'), 3000)
      setTimeout(() => showNotification('THREEEEEE!!!!!!', 'pink'), 6000)
      setTimeout(
        () => showNotification('Seriously, do you need to connect RIGHT now?', 'red'),
        9000
      )
      setTimeout(() => showNotification('Click "Yes" When Asked', 'green'), 12000)

      // Show confirmation alert at the end
      setTimeout(() => {
        showNotification('You sure?', 'blue')
        // You can add a link below for user to click
        const link = document.createElement('a')
        link.href = 'https://ig.me/m/arunnshah'
        link.target = '_blank'
        link.innerText = 'YES'
        link.addEventListener('click', () => {
          window.open(link.href, '_blank')
          window.location.reload()
        })
        container.appendChild(link)
      }, 15000)
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
      <button className="restart">URGENT!!👆🚨</button>
      <button className="button">
        <div className="text">
          <span>🚢🆘🛟</span>
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
    </div>
  )
}

export default RocketForm
