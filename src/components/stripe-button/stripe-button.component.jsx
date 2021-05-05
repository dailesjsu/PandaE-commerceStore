import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout'
import { createStructuredSelector } from 'reselect';
import {
        clearItemFromCart,
} from '../../redux/cart/cart.actions';
import {
        selectCartItems,
        selectCartTotal
} from '../../redux/cart/cart.selectors';
const StripeCheckoutButton = ({ price, cartItems, total, clearItem}) => {
        const priceForStripe = price * 100
        const publishableKey = "pk_test_fBmoDEXZrRpYvNu9EHBlVRHO0055ECS7Oi"
        const onToken = token => {
                console.log(token)
                alert('Payment Successful')
                cartItems.map((items) => { clearItem(items) })
        }



        return (
                <StripeCheckout
                        label='Pay Now'
                        name='Panda Shop'
                        billingAddress
                        shippingAddress
                        image='https://sendeyo.com/up/d/f3eb2117da'
                        description={`Your total is ${price}`}
                        amount={priceForStripe}
                        panelLabel='Pay Now'
                        token={onToken}
                        stripeKey={publishableKey}
                />
        )
}
const mapDispatchToProps = dispatch => ({
        clearItem: item => dispatch(clearItemFromCart(item)),
});
const mapStateToProps = createStructuredSelector({
        cartItems: selectCartItems,
});
export default connect(
        mapStateToProps,
        mapDispatchToProps
)(StripeCheckoutButton);