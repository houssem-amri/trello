import React from 'react'

export default function Child(props) {



    console.log("here props",props);




  return (
    <div>hello {props.name} {props.count}</div>
  )
}
