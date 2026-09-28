import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('/api/hello')
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`)
          return res.json()
        })
        .then((data) => setMessage(data.message))
        .catch((err) => setMessage(`Couldn't reach the backend: ${err.message}`))
  }, [])

  return <h1>{message}</h1>
}

export default App