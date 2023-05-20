import React from 'react'
import Main from './pages/main'
import ShopDetail from './pages/shopDetail'
import { Routes, Route} from 'react-router-dom'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/detail" element={<ShopDetail />}/>
      </Routes>
    </>
  )
}

export default App