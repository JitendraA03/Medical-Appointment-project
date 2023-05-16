import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ShowNavbar = ({children}) => {
    const location = useLocation();
    const [showNavBar,setshowNavBar] = useState(false)
    useEffect(()=> {
        console.log('this is location: ',location);
        if(location.pathname==='/Login' || location.pathname=='/Register')
        {
            setshowNavBar(false)
        }
        else{
            setshowNavBar(true)
        }
    } , [location] )
  return (
    <div>{showNavBar && children}</div>
  )
}
export default ShowNavbar