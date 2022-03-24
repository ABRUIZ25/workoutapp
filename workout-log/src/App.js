import React, { Component } from 'react'
import Workouts from './components/Workouts'
import './myStyle.css'



export class App extends Component {
  state = {


    name: "",
    oneMax: "",


    newWorkOuts: [

    ]
  }
  NewWorkOutLog = (event) => {
    this.setState({
      name: event.target.value
    })

  }

  newOneMaxRep = (event) => {
    this.setState({
      oneMax: event.target.value
    })
  }

  HandleOnLog = () => {
    // const updatedWorkouts = [...this.state.newWorkOuts, this.state.name, this.state.oneMax]
    const updatedWorkout = {
      name: this.state.name,
      oneMax: this.state.oneMax,
      five: this.state.oneMax / 2,
      seven: this.state.oneMax / 4 * 3,
      eight: this.state.oneMax * .80,
      nine: this.state.oneMax * .90

    }

    this.setState({
      newWorkOuts: [...this.state.newWorkOuts, updatedWorkout],

    })

  }



  render() {

    return (
      <div className='workout'>

        <h1>
          Welcome to your workout log
        </h1>

        <div>

          <h3>
            Enter your workout here
          </h3>

          <input name='workoutName' value={this.state.name} onChange={this.NewWorkOutLog} >
          </input>

          <h4>
            Enter your one max weight
          </h4>

          <input name='oneMax' value={this.state.oneMax} onChange={this.newOneMaxRep}>
          </input>


          <div>
            <button name='addworkout' onClick={this.HandleOnLog}>
              Log
            </button>
          </div>


        </div>

        <h3>
          Your workouts
        </h3>
        <div>
          <div name='addedWorkout' >

            {this.state.newWorkOuts.map(({ name, oneMax, five, seven, eight, nine }) => {

              return (<div><Workouts
                name={name}
                oneMax={oneMax}
                five={five}
                seven={seven}
                eight={eight}
                nine={nine}
              /></div>)

            })}


          </div>

        </div>



      </div >
    )

  }
}

export default App

