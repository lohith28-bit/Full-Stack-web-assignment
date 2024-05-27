import { useEffect, useState } from "react"
import './App.css'

function App() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    let text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, id. Tempora ex, aperiam vero consectetur odit tempore quae necessitatibus voluptatum eius ab repellendus, itaque, dignissimos eaque minus nisi laborum ducimus"
    text = text.replace(/,/g, '')
    setWords(() => text.split(' '))
  }, [])

  const handleSubmit = () => {
    const para = [];
    const inputVal = parseInt(document.querySelector('input').value);
    for (let i = 0; i < inputVal; i++) {
      para.push(words[Math.floor(Math.random() * words.length)])
    }
    const ele = document.getElementById('para')
    ele.innerHTML = para.join(' ')
  }
  return (
    <>
      <div>
        <h1>Para Generator</h1>
        <input type="number" placeholder="Enter Number of words" style={{ padding: '10px' }} />
        <button onClick={handleSubmit} style={{ margin: '10px' }}>Generate</button>
        <div onClick={handleSubmit}>
          <div>
            <p id='para'></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
