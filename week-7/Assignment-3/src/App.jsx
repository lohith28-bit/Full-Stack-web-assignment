import { useEffect } from "react";
import './App.css'

function App() {
  const ele = {
    type: 'a',
    props: {
      href: 'https://www.linkedin.com',
      target: '_blank',
      childern: "Go to linkedIN"
    }
  }
  useEffect(() => {
    mountEle(ele, 'root1')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div id="root1">
      </div>
    </>
  )
}

function createEle(eleData) {
  const { type, props } = eleData;
  const eleA = document.createElement(type)
  for (const [key, value] of Object.entries(props)) {
    if (key !== 'childern') {
      eleA.setAttribute(key, value)
    }
  }
  eleA.textContent = props.childern
  console.log(eleA)
  return eleA
}

function mountEle(element, divID) {
  const divEle = document.getElementById(divID);
  const htmlEle = createEle(element)
  divEle.innerHTML = '';
  divEle.appendChild(htmlEle)
}

export default App