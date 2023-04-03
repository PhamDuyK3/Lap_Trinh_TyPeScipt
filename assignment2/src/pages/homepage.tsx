import Product from "../components/product"

const HomePage = () => {
    return <div className="px-[30px]">
        <h1 className="pb-5 text-[#444444] text-[22px]">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
        <div className="grid grid-cols-4 gap-4">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>
}

export default HomePage