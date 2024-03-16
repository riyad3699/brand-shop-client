import { useLoaderData } from "react-router-dom";
import AllProduct from "./AllProduct";

const BrandDetails = () => {
    const brandName = useLoaderData();
    console.log(brandName)

    return (
        <div>
            {
                brandName.length > 0 ?
                    <div>
                        <div>
                            <div className="carousel w-full]">
                                <div id="slide1" className="carousel-item relative w-full">
                                    <div className="mx-auto flex justify-center items-center text-center h-[500px]"><img src={brandName[0].image} className="h-full" /></div>
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide4" className="btn btn-circle">❮</a>
                                        <a href="#slide2" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide2" className="carousel-item relative w-full">
                                    <div className="mx-auto flex justify-center items-center h-[500px]"><img src={brandName[1].image} className="h-full" /></div>
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide1" className="btn btn-circle">❮</a>
                                        <a href="#slide3" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide3" className="carousel-item relative w-full">
                                    <div className="mx-auto flex justify-center h-[500px] items-center"><img src={brandName[2].image} className="h-full" /></div>
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide2" className="btn btn-circle">❮</a>
                                        <a href="#slide4" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide4" className="carousel-item relative w-full">
                                    <div className="mx-auto flex justify-center h-[500px] items-center"><img src={brandName[3].image} className="h-full" /></div>
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide3" className="btn btn-circle">❮</a>
                                        <a href="#slide1" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mx-2 lg:w-[1280px] lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
                            {
                                brandName.map(prod => <AllProduct key={prod._id} prod={prod}></AllProduct>)
                            }
                        </div>
                    </div>
                    :
                    <div className="h-[80vh] flex justify-center items-center">
                        <h2 className="text-3xl font-bold text-center">Products are coming soon...</h2>
                    </div>
            }
        </div>
    );
};

export default BrandDetails;