import React, { useState } from 'react'

const App = () => {
  const [ count, setCount ] = useState(1)
  
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const increment2 = () => setCount(previousCount => previousCount + 1)
  const reset = () => setCount(0)
  const double = () => setCount(count*2)
  const divide3 = () => setCount(previousCount => {
    return previousCount % 3 === 0 ? previousCount / 3 : previousCount
  })

  // jsx
  return (
    <React.Fragment>
      <div>
        count: { count }
      </div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={increment2}>+1</button>

      <button onClick={reset}>reset</button>
      <button onClick={double}>double</button>
      <button onClick={divide3}>3の倍数のときだけ3で割る</button>
    </React.Fragment>
  )
}

export default App
