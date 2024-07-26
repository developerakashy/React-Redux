import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

export const NewCakeContainer = (props) => {
    const [number, setNumber] = useState(1)

    return(
        <div>
            <h1>Num of Cakes - {props.numOfCakes}</h1>
            <input type="text" onChange={(e) => setNumber(e.target.value)} value={number} />
            <button onClick={() => props.buyCake(number)}>Buy {number} cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (num) => dispatch(buyCake(num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
