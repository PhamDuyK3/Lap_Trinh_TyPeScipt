import { useState } from "react"

const Square= ()=>{
 const [value, setValue]=useState(null)
 const handlePay =()=>{
    setValue("X");
 }
 return <button className="bg-[#14bdac] border-0 w-[100px] h-[100px] text-[50px] text-white" onClick={handlePay}>{value}</button>
}
export default Square