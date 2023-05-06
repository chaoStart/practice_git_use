import React, { useState, useEffect } from 'react';
function Child(props) {
    let { data } = props;
    let [age, setAge] = useState(8)

    useEffect(() => {
        console.log("挂载了");
    }, []);


    useEffect(() => {
        return () => {
            console.log("卸载了");
        }
    }, [])
    useEffect(() => {
        console.log("更新了");
    }, [age])
    return (
        // <div style={{ backgroundColor: 'red', width: '500px', height: '500px' }}>
        <div style={{ width: '500px', height: '500px' }}>
            <h1 style={{ color: 'rgb(0,0,0)' }}>name:{data.name}</h1>
            <h1 style={{ color: 'rgb(0,0,0)' }}>age:{age}</h1>
            <button onClick={() => { setAge(++age) }}>长一岁</button>
        </div>)
}
export default Child