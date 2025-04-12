
import './App.css';
import{useState} from "react";

function App() {
  const[name,setName]=useState(' ');
  const[datetime,setDatetime]=useState('');
  const[description,setDescription]=useState('');


  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form>
        <div className="basic">
          <input type="text" 
                  value={name} 
                  onChange={ev => setName(ev.target.value)}
                  placeholder={'+samsung tv'}/>
          <input value={datetime} 
                  onChange={ev => setName(ev.target.value)}
                  type="datetime-local"/>
        </div>
        <div className="description">
          <input type="text" placeholder={'description'}/>
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung</div>
            <div className="description">it was time for new tv</div>
          </div>
          <div className="right">
            <div className="price">$500</div>
            <div className="datetime">2022-12-18</div>

          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung</div>
            <div className="description">it was time for new tv</div>
          </div>
          <div className="right">
            <div className="price green">+$500</div>
            <div className="datetime">2022-12-18</div>

          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung</div>
            <div className="description">it was time for new tv</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2022-12-18</div>

          </div>
        </div>
      </div>

    </main>
  );
}

export default App;
