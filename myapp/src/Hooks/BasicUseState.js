/*
useEffect is a built-in hook in React that allows you to perform side effects in your functional components. Side effects are any 
operations that are 
performed outside of the normal rendering process, such as fetching data from an API, updating the DOM, or subscribing to events
*/

import React, {useState, useEffect} from 'react'

const BasicUseState = () => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title =`count: ${count}`
    },[count])
  return (
    <>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </>
  )
}

export default BasicUseState