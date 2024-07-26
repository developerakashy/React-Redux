import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'

const ItemContainer = ({itemCount, buyItem}) => {

    return(
        <div>
            <h1>Item - {itemCount}</h1>
            <button onClick={buyItem}>Buy Item</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemCount = ownProps.cake ? state.cake.numOfCakes : state.icecream.numOfIceCreams

    return {
        itemCount: itemCount
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const buyItem = ownProps.cake ? buyCake : buyIceCream

    return {
        buyItem: () => dispatch(buyItem())
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
