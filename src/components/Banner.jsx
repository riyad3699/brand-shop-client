const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://www.blowingideas.com/wp-content/uploads/2021/08/Mobile-Phone-Store-Design-Style.jpg)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <img className="w-[100px] mx-auto" src="/logo.png" alt="" />
                        <h1 className="mb-5 text-7xl font-bold">digiBrand</h1>
                        <p className="mb-5 text-2xl font-semibold text-slate-300">No 1 Tech seller in Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;