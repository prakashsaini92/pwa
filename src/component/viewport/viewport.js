import React, {useState, useEffect} from "react";

const ViewPort = ({children, ...props}) => {
    const [device, setDevice] = useState({isMobile: false, isDesktop: false});
    const {forDesktop = false, forMobile = false} = props

    function handlerResize(){
        const resulation = window.innerWidth;
        const isMobile = resulation < 768;
        const isDesktop = resulation >= 1024;

        setDevice({isMobile, isDesktop});

    }
    useEffect(() => {
        handlerResize();
        window.addEventListener('resize', handlerResize);
        return () => {
            window.removeEventListener("resize", handlerResize);
        }
    },[])
     if(device.isDesktop && forDesktop || device.isMobile && forMobile){
        return children
     }
     return null
}

export default ViewPort;