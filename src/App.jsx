import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
import Posts from './Posts'

function App() {
  function handleClick() {
    alert('button click')
  }
  const handleClick2 = () => {
    alert('button 2 click')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Posts></Posts>

      {/* <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <br /> <br />
      <button onClick={handleClick2}>Click2</button>
      <br /> <br />
      <button onClick={() => { alert('third click') }}>Third</button>
      <br /><br />
      <button onClick={() => addToFive(3)}>Four</button> */}
    </>
  )
}

export default App