import React , {useEffect, useState}from 'react'

const WindowSize = () => {
    const [WindowSize, setWindowSize] = useState(window.innerWidth);

    const handleResize = ()=>{
        setWindowSize(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener('resize',handleResize);
        // clean up  useEffect evey time state variable changes
        return()=>{
            window.removeEventListener('removed', handleResize);
        }
    },[])
    
  return (
    <>
        <h1>{WindowSize}</h1>
    </>
  )
}

export default WindowSize