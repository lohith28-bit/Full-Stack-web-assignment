import './App.css'
import { useState } from "react"

function App() {
  const [data, setData] = useState({})

  const handleClick = url => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleSearch = () => {
    const inputVal = document.querySelector('input').value
    fetch(`https://api.github.com/users/${inputVal}`)
      .then(res => res.json())
      .then(resData => {
        const {
          login,
          name,
          avatar_url,
          html_url,
          blog,
          location,
          followers,
          following,
          public_repos
        } = resData;
        setData({
          name,
          login,
          avatar_url,
          html_url,
          blog,
          location,
          followers,
          following,
          public_repos
        })
      })
      .catch(err => {
        console.log("Error fetching the data ", err)
        document.querySelector('input').value = '';
      })
  }

  return (
    <>
      <div>
        <input type="text" placeholder='Enter the GitHub name' />
        <button style={{ backgroundColor: 'yellow', color: 'black', margin: '14px' }} onClick={handleSearch}>Search</button>
      </div>
      <div>
        <h1>GitHub Profile</h1>

        {data.name && <div>
          <div>
            <img src={data.avatar_url} alt={`${data.login}'s avatar`} height='100' />
            <div><h2>{data.login}</h2></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <h3>Followers : {data.followers}</h3>
            <h3>Following : {data.following}</h3>
          </div>
          <div><h3>No. Repository : {data.public_repos}</h3></div>
          <div>{data.location}</div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <button onClick={() => handleClick(data.html_url)} style={{ backgroundColor: 'red', color: 'black' }}>Github</button>
            <button onClick={() => handleClick(data.blog)} style={{ backgroundColor: 'violet', color: 'black', opacity: data.blog === "" ? 0.5 : 1, cursor: data.blog === "" ? 'not-allowed' : 'pointer' }} disabled={data.blog === ""}>blog</button>
          </div>
        </div>}
        {!data.name && <div><h2>No Data found</h2></div>}
        <div>
        </div>
      </div>
    </>
  )
}

export default App
