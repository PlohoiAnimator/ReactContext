import React from 'react'
import { useAlert } from './alert/AlertContext'

export default function Main() {

  const {toggle} = useAlert()

  return(
    <div>
      <h1>AlertContext</h1>
      <button onClick={toggle} className='btn btn-success'>Get Alert</button>
    </div>
  )
}