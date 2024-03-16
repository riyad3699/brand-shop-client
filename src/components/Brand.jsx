import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
    return (
        <Link to={`/brandDetails/${brand.name}`}>
            <div className="flex flex-col border shadow-md rounded-lg">
                <img className="h-[400px] p-8 rounded-t-lg flex-grow" src={brand.image} alt="" />
                <h2 className="text-2xl py-4 font-bold text-center">{brand.name}</h2>
            </div>
        </Link>
    );
};

export default Brand;