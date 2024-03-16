import { useLoaderData } from "react-router-dom";
import swal from 'sweetalert';

const UpdateProduct = () => {

    const product = useLoaderData();
    const { _id, image, productName, brandName, type, price, rating, description } = product;
    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const updatedProduct = { image, productName, brandName, type, price, description, rating };


        fetch(`https://brand-shop-server-dlb2p4nqa-riyads-projects.vercel.app/products/brand/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    swal("Success!", "You have successfully updated the product!", "success");
                    e.target.reset();
                }
            })
    }

    return (
        <div>
            <div className="w-3/4 lg:w-1/3 mx-auto border shadow-lg p-6 rounded-lg my-12">
                <form onSubmit={handleUpdateProduct} className="flex flex-col justify-center gap-4 p-2">
                    <h2 className="text-3xl text-center mb-8 font-bold text-green-600">Update product: <span className="text-slate-500">{productName}</span></h2>
                    <p className="text-green-600">Image URL</p>
                    <input className="p-2 rounded-lg border" type="text" name="image" placeholder="Image URL" defaultValue={image} required />
                    <p className="text-green-600">Product Name</p>
                    <input className="p-2 rounded-lg border" type="text" name="productName" placeholder="Product Name" defaultValue={productName} required />
                    <p className="text-green-600">Brand Name</p>
                    <input className="p-2 rounded-lg border" type="text" name="brandName" placeholder="Brand Name" defaultValue={brandName} required />
                    <p className="text-green-600">Type</p>
                    <input className="p-2 rounded-lg border" type="text" name="type" placeholder="Product Type" defaultValue={type} required />
                    <p className="text-green-600">Price</p>
                    <input className="p-2 rounded-lg border" type="text" name="price" placeholder="Price" defaultValue={price} required />
                    <p className="text-green-600">Short Description</p>
                    <input className="p-2 rounded-lg border" type="text" name="description" placeholder="Short description" defaultValue={description} required />
                    <p className="text-green-600">Rating</p>
                    <input className="p-2 rounded-lg border" type="text" name="rating" placeholder="Rating" defaultValue={rating} required />
                    <button className="p-2 mt-8 rounded-lg border font-semibold border-green-600 hover:bg-green-600 hover:text-white">Update Product</button>

                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;