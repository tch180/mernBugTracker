import React, { useState, useEffect } from "react";
import axios from "axios";


export default function BugsHome() {
    const [bugs, setBugs] = useState([]);


    useEffect(()=> {
        const getBugs = async ()=>{
            const res = await axios.get('/bugs/allBugs');
            setBugs(res.data);
        };
        getBugs();
    })

    const renderList =()=> {
        return bugs.map((bug,i)=>{
            return(
                     <div className="card my-3 shadow-lg  bg-white" style={{width: '18rem'}} key={i}>
                         <div className="card-body">
                            <h5 className="card-title"> {bug.name}</h5>
                            <p className="card-text"> {bug.description}</p>
                         <p className="card-text">  {bug.status}</p>        
                        </div>

                     </div>
            
               
            )
        })
    }
    return (
        <div className='row  container-fluid ' style={{margin:'0 auto' ,paddingTop:'10vh', display:'flex', justifyContent:'space-around'}}>
            {renderList()}
        </div>
    )
}

