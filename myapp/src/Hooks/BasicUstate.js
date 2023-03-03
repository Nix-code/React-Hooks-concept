import React, {useState} from 'react'

const BasicUstate = () => {

    const [clickType, setClickType] = useState("posts")
  return (
    <>
        <button onClick={()=>setClickType('posts')}>Posts</button>
        <button onClick={()=>setClickType('users')}>Users</button>
        <button onClick={()=>setClickType('comments')}>Comments</button>

        <h1>{clickType}</h1>
    </>
  )
}

export default BasicUstate