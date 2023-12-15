import React from 'react'

const MyPureComponent = React.memo(({prop1,prop2}) => {
  return (
    <div>
        <p>PROP1:{prop1}</p>
        <p>PROP2:{prop2}</p>
    </div>
  )
})

export default MyPureComponent

//React.memo is a higher-order component (HOC) provided by React that aims to optimize the rendering performance of functional components. It memoizes the rendering of a component based on its props, preventing unnecessary re-renders when the props remain the same. Memoization is a technique to cache the result of a function call based on its input parameters.