import React from 'react'
import AlertProvider from './alert/AlertContext'
import Main from './Main'
import Alert from './alert/Alert'

export default function App() {
  return(
    <AlertProvider>
      <div className='container pt-3'>
        <Alert/>
        <Main onClick={() => {}}/>
      </div>
    </AlertProvider>
  )
}