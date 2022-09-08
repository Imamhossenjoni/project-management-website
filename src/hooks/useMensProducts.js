import { useEffect, useState } from "react"

const useMensProducts = () => {
    const [mProducts, setMProducts] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/mens`)
        .then(res=>res.json())
        .then(data=>setMProducts(data))
    },[])
    return [mProducts,setMProducts]
}
export default useMensProducts;