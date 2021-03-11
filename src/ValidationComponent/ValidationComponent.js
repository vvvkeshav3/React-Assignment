import React from 'react';

const ValidationComponent = (props)=>{
    let str;
    const style = {
        fontWeight: '700'
    };
    if(props.length<=5){
        str = "Text too short";
        style.color = "red";
    }
    else{
        str = "Text long enough";
        style.color = "blue";
    }
    return(
        <p style={style}>{str}</p>
    )
}

export default ValidationComponent;
