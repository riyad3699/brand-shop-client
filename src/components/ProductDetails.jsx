import { useLoaderData } from "react-router-dom";
import swal from 'sweetalert';

const ProductDetails = () => {

    const product = useLoaderData();
    const { image, productName, brandName, type, price, description, rating } = product;


    const handleAddToCart = () => {
        fetch('https://brand-shop-server-dlb2p4nqa-riyads-projects.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    swal("Success!", "Product is added to the cart", "success");
                }
            })
    }

    return (
        <div className="flex flex-col rounded-lg bg-green-50 p-4 justify-center items-center mx-2 lg:w-[1280px] lg:mx-auto">
            <div>
                <img className="flex-1 rounded-xl p-6" src={image} alt="" />
            </div>
            <div className="ml-4 flex-1">
                <div className="flex justify-between">
                    <p className="font-bold text-slate-400">{brandName}</p>
                    <p className="font-medium text-blue-400">{type}</p>
                </div>
                <h2 className="text-2xl font-bold text-green-600">{productName}</h2>
                <div className="flex gap-4">
                    <p className="font-semibold">${price}</p>
                    <p className="font-semibold">Rating: {rating}</p>
                </div>
                <p className="text-slate-500">{description}</p>
            </div>
            <button onClick={handleAddToCart} className="p-2 mt-8 rounded-lg border font-semibold border-green-600 hover:bg-green-600 hover:text-white">Add to cart</button>
        </div>
    );
};

export default ProductDetails;