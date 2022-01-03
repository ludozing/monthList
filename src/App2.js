import React, { useEffect, useState } from 'react';
export default function App2(){
    useEffect(()=>{
        console.log('effect');
        console.log(visible);
        return () => {
            console.log('effect2');
            console.log(visible);
        }
    })
    const [visible,setVisible] = useState(false);
    return(
        <div>
            <button onClick={()=>{
                setVisible(!visible)
            }}>
                {visible? '숨기기':'보이기'}
            </button>
        </div>
    );
}