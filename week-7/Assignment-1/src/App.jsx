import { RecoilRoot } from "recoil"
import Home from "./components/Home"

function App() {
  const colors = ['black', 'blue', 'Green', 'red', 'yellow']

  return (
    <>
      <RecoilRoot>
        <Home colors={colors} />
      </RecoilRoot>
    </>
  )
}

export default App
