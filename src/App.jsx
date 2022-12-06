import zapa1 from "../src/img/1.png";
import zapa2 from "../src/img/2.png";
import zapa3 from "../src/img/3.png";
import zapa4 from "../src/img/4.png";
import zapa5 from "../src/img/5.png";

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-img">
          <img src={zapa1} alt=".." />
        </div>
        <div className="card-content">
          <h3>Zapatisha</h3>
          <p>zapa pase facha</p>
          <button className="add-cart">agregar al carro</button>
        </div>
      </div>

      <div className="card">
        <div className="card-img">
          <img src={zapa2} alt=".." />
        </div>
        <div className="card-content">
          <h3>Zapatisha</h3>
          <p>zapa pa corre</p>
          <button className="add-cart">agregar al carro</button>
        </div>
      </div>

      <div className="card">
        <div className="card-img">
          <img src={zapa3} alt=".." />
        </div>
        <div className="card-content">
          <h3>Zapatisha</h3>
          <p>zapa pascala</p>
          <button className="add-cart">agregar al carro</button>
        </div>
      </div>

      <div className="card">
        <div className="card-img">
          <img src={zapa4} alt=".." />
        </div>
        <div className="card-content">
          <h3>Zapatisha</h3>
          <p>zapa pa squatea</p>
          <button className="add-cart">agregar al carro</button>
        </div>
      </div>

      <div className="card">
        <div className="card-img">
          <img src={zapa5} alt=".." />
        </div>
        <div className="card-content">
          <h3>Zapatisha</h3>
          <p>zapa pa eso</p>
          <button className="add-cart">agregar al carro</button>
        </div>
      </div>
    </div>
  );
}

export default App;
