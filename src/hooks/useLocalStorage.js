import React,{useState,useEffect} from "react";

const useLocalStorageState=(key,defaultValue)=>{
    const [state,setState]=useState(()=>{
        console.log(key)
        console.log(defaultValue)
        let value;
        try {
            
            value=JSON.parse(
                window.localStorage.getItem(key)||JSON.stringify(defaultValue)
            )

            return value;

        }
        catch (err){
            console.log(err)
            value=defaultValue;
        }
        
    })

    useEffect(()=>{
        window.localStorage.setItem(key,JSON.stringify(state))
    },[key,state])

    return [state,setState];

}

export default useLocalStorageState;