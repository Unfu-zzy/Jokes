import './App.css'
import {useState, useEffect} from "react"

export default function App() {
  const [jokes, setJokes] = useState([]);
  const [render, setRender] = useState(0);

  useEffect(() => {
    fetch(
      `https://v2.jokeapi.dev/joke/Dark?type=single`
    )
    .then((res) =>res.json())
    .then((data) => setJokes(data))
  }, [render]);

  return (
    <div className="container">
      <div className="jokes">
      <h2>{jokes.joke}</h2>
      </div>
      <button onClick={() => setRender(Math.random()) }>New Joke</button>
    </div>
  )
}