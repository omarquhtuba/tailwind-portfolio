import React, { useEffect, useState } from 'react'
import './index.css';
import {useWindowScroll} from 'react-use';

const Scroll = () => {
    const { y : pageYOffset } = useWindowScroll();
    const [visible, setVisible] = useState(false);

    useEffect(()=> {
        if(pageYOffset > 400) {
            setVisible(true);
        }else{
            setVisible(false);
        }
    },[pageYOffset])

    const scrollToTop = () => window.scrollTo({top: 0, behavior: "smooth"})

    if(!visible){
        return false;
    }

  return (
    <div className='scrollContainer' onClick={scrollToTop}>
        <div className='scroll'>Top</div>
    </div>
  )
}

export default Scroll