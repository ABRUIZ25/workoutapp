import React, { Component } from 'react'

export class App extends Component {
  state = {
    workout: [
      {
        name: "",
        oneMax: "",
        50: "",
        75: "",
        80: "",
        90: "",
      }
    ]
  }



  render() {
    return (
      <div>

        <h1>
          Welcome your workout log
        </h1>

        <div>
          <h3>
            Enter your workout here
          </h3>
          <input>
          </input>
          <h4>
            Enter your one max weight
          </h4>
          <input>
          </input>
          <div>
            <button>
              Log
            </button>
          </div>
        </div>

        <h3>
          Your workouts
        </h3>
        <div className='new weight'>
          50%:
          75%:
          80%:
          90%:
        </div>



      </div>
    )
  }
}

export default App

