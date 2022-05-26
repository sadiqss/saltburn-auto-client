import { useEffect, useState } from "react"

const useParts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-mesa-87312.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])
    return [parts, setParts];
}
export default useParts;