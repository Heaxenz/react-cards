import React, {useState} from 'react';
import axios from 'axios';

const useFlip = () => {
    const [flip, setFlip] = useState(true);

    const toggleFlip = () => {
        setFlip(!flip);
    }

    return [flip, toggleFlip]
}

export {useFlip};



const useAxios = (keyInLS, baseUrl) => {
    const [data, setData] = useState([])

    const addData = async () => {
        const res = await axios.get(`${baseUrl}`)
        setData(data => [...data, (res.data)]);
    };
    return [data, addData];
}

export {useAxios};


