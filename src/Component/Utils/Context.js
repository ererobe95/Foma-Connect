import React, {useState, useContext} from 'react';
import { data } from './data';
const ContextApi = React.createContext();


const ContextProvider = ({children}) => {
    const [feedData, setFeedData] = useState(data)
    const [isLike, setIsLike] = useState({on:true})

    const feedUpdate = (to) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const like = Math.floor(Math.random() * 100)
        const newItem = {id, like, ...to, ...isLike}
        setFeedData([...feedData, newItem])
      }

    return(
        <ContextApi.Provider value={{feedData, setFeedData, isLike, setIsLike, feedUpdate}}>
            {children}
        </ContextApi.Provider>
    )
}

export default ContextProvider

export const useGlobalContext = ()=>{
    return useContext(ContextApi)
}