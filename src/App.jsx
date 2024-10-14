import React from 'react'
import WebLayout from './layouts/WebLayout'
import AppRoutes from './router/Routes'

const App = () => {
  return (
    <>
      <WebLayout>
        <AppRoutes />
      </WebLayout>
    </>
  )
}

export default App