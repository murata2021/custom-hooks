import React,{useState} from "react";


const useFlip=(initialState=true)=>{

    const [isFlip,setIsFlip]=useState(initialState)

    const handleChange=()=>{
        setIsFlip(!isFlip)
    }

    return [isFlip,handleChange]
}

export default useFlip;