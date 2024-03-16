import swal from 'sweetalert';

const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const newProduct = {image, productName, brandName, type, price, description, rating};

        console.log(newProduct);

        fetch('https://brand-shop-server-dlb2p4nqa-riyads-projects.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    swal("Success!", "You have successfully added the product!", "success");
                    e.target.reset();
                }
            })
    }

    return (
        <div>
            <div className="w-3/4 lg:w-1/3 mx-auto border shadow-lg p-6 rounded-lg my-12">
                <form onSubmit={handleAddProduct} className="flex flex-col justify-center gap-4 p-2">
                    <h2 className="text-3xl text-center mb-8 font-bold text-green-600">Add your product</h2>
                    <input className="p-2 rounded-lg border" type="text" name="image" placeholder="Image URL" required />
                    <input className="p-2 rounded-lg border" type="text" name="productName" placeholder="Product Name" required />
                    <input className="p-2 rounded-lg border" type="text" name="brandName" placeholder="Brand Name" required />
                    <input className="p-2 rounded-lg border" type="text" name="type" placeholder="Product Type" required />
                    <input className="p-2 rounded-lg border" type="text" name="price" placeholder="Price" required />
                    <input className="p-2 rounded-lg border" type="text" name="description" placeholder="Short description" required />
                    <input className="p-2 rounded-lg border" type="text" name="rating" placeholder="Rating" required />
                    <button className="p-2 mt-8 rounded-lg border font-semibold border-green-600 hover:bg-green-600 hover:text-white">Add Product</button>

                </form>
            </div>
        </div>
    );
};

export default AddProduct;