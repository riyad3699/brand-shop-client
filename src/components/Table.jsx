const Table = () => {
    return (
        <div className="mx-2 lg:w-[1280px] lg:mx-auto my-16">
            <h2 className="text-4xl my-8 font-bold text-center">Our most selling products</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>iPhone 13 Pro</td>
                            <td>Apple</td>
                            <td>$999</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Pixel 6</td>
                            <td>Google</td>
                            <td>$699</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Surface Laptop 4</td>
                            <td>Microsoft</td>
                            <td>$1299</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;