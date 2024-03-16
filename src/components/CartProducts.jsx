import Swal from "sweetalert2";

const CartProducts = ({ prod, cart, setCart }) => {

    const { _id, productName, brandName, type, price } = prod;

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brand-shop-server-dlb2p4nqa-riyads-projects.vercel.app/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = cart.filter(pro => pro._id !== _id);
                            setCart(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div className="grid grid-cols-2 gap-2 text-center md:grid-cols-5 items-center rounded-lg bg-green-50 p-4 mx-2 lg:w-[1280px] lg:mx-auto">
            <h2>{productName}</h2>
            <p>{brandName}</p>
            <p>{type}</p>
            <p>${price}</p>
            <button onClick={() => handleDelete(_id)} className="border border-red-600 p-2 rounded-lg hover:bg-red-600 hover:text-white">Delete</button>
        </div>
    );
};

export default CartProducts;