import { Link } from "react-router-dom";

const AllProduct = ({ prod }) => {
    const { _id, image, productName, brandName, type, price, rating } = prod;

    return (
        <div>
            <div className="bg-green-50 rounded-lg border">
                <img className="h-80 w-full rounded-t-lg" src={image} alt="" />
                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-slate-400">{brandName}</h2>
                        <h2 className="text-base text-blue-600">{type}</h2>
                    </div>
                    <h2 className="text-xl font-bold">{productName}</h2>
                    <h2 className="">Rating: {rating}</h2>
                    <p className="text-lg font-semibold text-green-600">${price}</p>
                </div>
                <div className="flex justify-center">
                    <Link to={`/details/${_id}`}>
                        <div className="flex justify-center p-4">
                            <button className="py-3 px-4 rounded-lg font-semibold bg-green-500 hover:bg-green-600 text-white">Show more</button>
                        </div>
                    </Link>
                    <Link to={`/updateProduct/${_id}`}>
                        <div className="flex justify-center p-4">
                            <button className="py-3 px-4 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white">Update</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllProduct;