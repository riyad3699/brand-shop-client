import { useLoaderData } from "react-router-dom";
import CartProducts from "./CartProducts";
import { useState } from "react";

const Cart = () => {

    const loadedCart = useLoaderData();
    const[cart, setCart] = useState(loadedCart)
    console.log(cart);

    return (
        <div className="flex flex-col gap-4">
            {
                cart.map(prod => <CartProducts key={prod._id} prod={prod} cart={cart} setCart={setCart}></CartProducts>)
            }
        </div>
    );
};

export default Cart;