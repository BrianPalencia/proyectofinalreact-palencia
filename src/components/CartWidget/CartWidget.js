import cart from './assets/cart.png'

const CartWidget = () => {
    return (
        <div className='column is-2 cart-widget'>
            <img className='cart' src={cart} alt="cart-widget"/>
            0
        </div>
    )
}

export default CartWidget