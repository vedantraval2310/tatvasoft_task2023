import React from 'react'
import Title from './Title';
function List(){
    const data1 = [
        {
            id:1001,
            title:"datastructure",
            description:"this is concept of dsa"
        },
        {
            id:1002,
            title:"dbms",
            description:"this is concept of dbms"
        },
        {
            id:1003,
            title:"os",
            description:"this is concept of os"
        }
    ]
    const datalist = data1.map(data2 => (
    <Title data2 = {data2}></Title> ))
    return <div>{datalist}</div>
}

export default List;