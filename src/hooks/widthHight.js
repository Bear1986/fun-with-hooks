import React from 'react'
import {
    useState,
    useEffect
} from 'react'

const WindowEffect = () => {
    //window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    // window hight
    const [windowHight, setWindowHight] = useState(window.innerHeight)
    const handleResizeHight = () => {
        setWindowHight(window.innerHeight)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResizeHight)
        return () => {
            window.removeEventListener('resize', handleResizeHight)
        }
    }, [])

  return (
    <div className="bg-blue-300 p-4 m-3 rounded flex flex-col content-center items-center">
      <h1>
        your screen width is:{" "}
        <span className="text-red-600 font-bold">{windowWidth}</span> px
      </h1>
      <h1>
        your screen height is:{" "}
        <span className="text-red-600 font-bold">{windowHight}</span>px
      </h1>
    </div>
  );
}

export default WindowEffect