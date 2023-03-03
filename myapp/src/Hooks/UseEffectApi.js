import React, { useEffect, useState } from 'react'

const UseEffectApi = () => {

    const [update, SetUpdate] = useState('posts');
    const [items, setItems] = useState([])
    console.log("render");

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${update}`)
        .then(response => response.json())
        .then(json => setItems(json))
    },[update])

  return (
    <>
    <button onClick={()=>SetUpdate('posts')}>Posts</button>
    <button onClick={()=>SetUpdate('users')}>users</button>
    <button onClick={()=>SetUpdate('comments')}>Comments</button>
    <h1>{update}</h1>
    {items.map(item =>{
        return <pre>{JSON.stringify(item)}</pre>
    })}
    </>
  )
}

export default UseEffectApi