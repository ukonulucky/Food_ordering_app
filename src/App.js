
import React, { useEffect} from 'react'
import { render } from 'react-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/js/dist/collapse"
import Cart from "./components/Cart"

import Navbar from './components/Navbar';
import Pizza from './components/Pizza';
import Spinner from './components/Spinner';

import { fetchData } from './redux/store';
import {useDispatch, useSelector} from "react-redux"

import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {

  const dispatch = useDispatch()
  const data  = useSelector( state => state )
 

  useEffect(() => {
     dispatch(fetchData())
  },[])
 
  const PizzaComponent = data.users.map((x, y) => <div key={ y }> <Pizza pizza = { x } /> </div>)
  return (
   
    <Router>
    <div className="App">
            <Routes>
          <Route exact path="/" element={<>
            <Navbar />
             {data.loading || data.error !== "" ? <Spinner /> :  <div className="pizzaBody">
              { PizzaComponent }
              </div>}
          </>}>
          </Route>
          
          <Route exact path="/viewpiza" element={<>
            <Navbar />
             <Cart />
              
          </>}>
            </Route>
        </Routes>
      </div>
   </Router>

   
  )
}

export default App;
