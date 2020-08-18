import React from 'react';

// Import CSS
import '../App/App.css';
import './Home.css';

import Header from '../Header/Header';

export default Home;

let PrevHash = 100;
let CurHash = PrevHash;
let key = 100;
let time = 0;

function Home() {
  return (
    <div className="App">
      <Header/>

      <div className="content-container">

        <h1> Hello </h1>
        <p> Here are some transactions... </p>

        <div className="card-container">
          <div className="card" id='0'>
              <card-body>
                <h3> Block 1 </h3> (Genesis block)
              </card-body>
              <list-items>
                Previous hash: {PrevHash}<br></br>
                Current hash: {CurHash}
              </list-items>
              <list-items>
                Key: {key}
              </list-items>
              <list-items-bruh>
                Timestamp: {time}
              </list-items-bruh>
          </div>

          <div className="card" id='1'>
              <card-body>
                <h3> Block 2 </h3>
              </card-body>
              <list-items>
                Previous hash: {PrevHash}<br></br>
                Current hash: {CurHash}
              </list-items>
              <list-items>
                Key: {key}
              </list-items>
              <list-items-bruh>
                Timestamp: {time}
              </list-items-bruh>
          </div>

        </div>

      </div>
    </div>
  );
}
