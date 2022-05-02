
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/js/dist/collapse"
import pizzaData from "./pizzaData"
import Navbar from './components/Navbar';
import Pizza from './components/Pizza';
function App() {
  
  const PizzaComponent = pizzaData.map((x, y) => <div key={ y }> <Pizza pizza = { x } /> </div>)
  return (
    <div className="App">
      <Navbar />
      <div className="pizzaBody">
      { PizzaComponent }
      </div>
    </div>
  );
}

export default App;
