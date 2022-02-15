import React,{useState,useEffect} from 'react';
import axios from 'axios';
import uuid from "uuid";
import useLocalStorageState from './useLocalStorage';



const useAxios=(URL,key,isVariable=false)=>{

    const [cards,setCards]=useLocalStorageState(key,[])
    // const [cards,setCards]=useState([])
    const [draw,setDraw]=useState(false)
    const [url,setUrl]=useState(URL)
    
    useEffect(()=>{
        const addCard=async()=>{
            try{
                const response=await axios.get(url)
                setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    
            }catch(err){
                console.log(err)
            }
        }
        if (draw){
            addCard()
            setDraw(!draw)
        }
      
    },[draw])
   

    const reset=()=>{

        setCards(cards=>[...[]])
    }

    return [cards,setDraw,reset,setUrl]
}


export default useAxios;