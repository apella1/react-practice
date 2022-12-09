import React, { useState } from 'react'
import { useEffect } from 'react';

const Watch = () => {
    const [time, setTime] = useState(0);
    
    useEffect( () => {
        const interval = setInterval(() => {
            setTime((time) => {
                return time + 1
            })
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    return (
    <div className='p-2 text-center'>
       Time {time} 
    </div>
  )
}

export default Watch;