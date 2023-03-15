import React from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";



export default function Pagerouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Page1 />}></Route>
          <Route path="/Page2" element={<Page2 />}></Route>
        </Routes>
      </Router>
    </div>
  )
}
