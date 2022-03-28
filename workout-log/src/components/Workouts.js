import React, { Component } from 'react'


const Workouts = (props) => {
    const { name, oneMax, five, seven, eight, nine } = props

    return (
        <div className='workout'>
            <h6>{`workout: ${name}`}</h6>
            <h6>{`one max rep: ${oneMax}`}</h6>
            <h4>The amount of sets will go as follows</h4>
            <h6>{`50%:${five}`}  this is your warm up 12 reps</h6>
            <h6>{`75%:${seven}`}  8-10 reps </h6>
            <h6>{`80%%:${eight}`}  6-8 reps</h6>
            <h6>{`90%:${nine}`}  4-6 or till falure</h6>

        </div>
    )

}



export default Workouts
