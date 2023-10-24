import React from 'react';
import { useTypewriter,Cursor } from 'react-simple-typewriter';

const TypeEffect = (props) => {
    const {text} = useTypewriter({
        words: [props.title],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 50
    })
    return (
        <>
        <h1 className=" font-weight-lighter text-white">{text}</h1>
        <Cursor/>
        </>
    );
}

export default TypeEffect;