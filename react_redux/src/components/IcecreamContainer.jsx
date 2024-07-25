import React from 'react'
import {connect} from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'


const IcecreamContainer = (props) => {
    return(
        <div>
            <h1>Number of Cakes - {props.numOfIceCreams}</h1>
            <button onClick={props.buyIceCream}>Buy Cakes</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfIceCreams: state.icecream.numOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer)
