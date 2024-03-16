import { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('/brand.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])


    return (
        <div>
            <h1 className="text-4xl text-center font-bold mt-12">Our Brands</h1>
            <div className="mx-2 lg:w-[1280px] lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
                {
                    brands.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;