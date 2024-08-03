// ---------------------BATCHING

// this is react batching process example where the count will be 4 because
// it will not have the current state value, it will just treat count as 0 
// for every time if u want to get the current state value then kindly use functional version of state update
"use client"

import React, { useState } from 'react'

function page() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
        setCount(count + 2)
        setCount(count + 3)
        setCount(count + 4)
    }

    console.log(count)

    return (
        <button onClick={handleClick}>add</button>
    )
}

export default page


// Important Note:
// If the state updates are triggered by asynchronous events(e.g., setTimeout, promises), React does not batch those 
// updates sometimes.

// In React version less than 18, only state updates inside event handler functions are batched together but state updates inside promises, setTimeout function, native event handlers, or any other event handlers are not getting batched.

// If you're using a React version less than 18, then for the above code, as there are three state updates, the component will be re-rendered three times which is performance-in-efficient.

// With version 18, state updates inside of timeouts, promises, native event handlers or any other event will batch together to re - render only once.



