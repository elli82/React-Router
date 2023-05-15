import React from "react";
import {useState, useEffect} from 'react'
import styles from '../Portfolio.module.css'; 

export default function PortfolioComponent(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded]= useState(false);
    const [items, setItems] = useState([]);
    useEffect(() =>{
        fetch('https://api.github.com/users/elli82/starred')
        .then(res => res.json())
        .then(
            (result)=>{
                setIsLoaded(true);
                setItems(result);
            },
            (error)=>{
                setIsLoaded(true)
                setError(error)
            }
        )
    },[])
    console.log(items);
    if(error){

    }
    else if(!isLoaded){
        return <div>Is loading...</div>
    }
    else{
        return(
            
            <ul className={styles.list}>
            {items.map(item =>(
                <li key={item.id}className={styles.listItem}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <a href={item.html_url} target="_blank" rel="noopener noreferrer">{item.html_url}</a>
                </li>
                
            ))}
            </ul>          
        );
    }
}
