const { useEffect } = require("react")

const Counter = () => {
    const [count, setCount] = useState(10)
    const [Image, setImage] = useState(null)

    const handleShowImage = async () => {
        const data = await fetch("https://picsum.photos/200/300")
        setImage(data)
    }
    useEffect(() => {
        handleShowImage()
        // const interval = setInterval(()=>{
        //     setCount(count+1)

        // },2000)
        // return ()=> clearInterval(interval)
    }, [])
    console.log(count);
    return <>
        <h1>Count : {count}</h1>
        <img src={Image} alt="" />
        <button className="bg-red-700 " onClick={handleShowImage}></button>
    </>
}