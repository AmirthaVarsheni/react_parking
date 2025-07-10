import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

 
  return (
    <>
      <style>{`
        .counter-container {
          text-align: center;
          margin: 20px 0;
        }
        .counter-title {
          font-size: 1.25rem;
          font-weight: 600;
        }
        .button-group {
          margin-top: 16px;
        }
        .btn {
          padding: 8px 16px;
          border-radius: 4px;
          margin-right: 8px;
          border: none;
          color: white;
          cursor: pointer;
        }
        .btn-increment {
          background-color: green;
        }
        .btn-decrement {
          background-color: red;
        }
        .btn-reset {
          background-color: gray;
          margin-right: 0;
        }
      `}</style>

      <div className="counter-container">
        <h2 className="counter-title">Counter: {count}</h2>
        <div className="button-group">
          <button onClick={()=>setCount(count+1)} className="btn btn-increment">Increment</button>
          <button onClick={()=> setCount(count>0 ? count-1 : 0)} className="btn btn-decrement">Decrement</button>
          <button onClick={()=>setCount(0)} className="btn btn-reset">Reset</button>
        </div>
      </div>
    </>
  );
}

export default Counter;
