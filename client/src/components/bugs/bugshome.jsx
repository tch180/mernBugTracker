import React, { useState, useEffect } from "react";
import axios from "axios";


export default function BugsHome(props) {
    const [bugs, setBugs] = useState([]);
    const [deleteBug, setDeleteBug]= useState();


    useEffect(()=> {
        const getBugs = async ()=>{
            const res = await axios.get('/bugs/allBugs');
            setBugs(res.data);
            console.log(res.data)
        };
        getBugs();
    },[]);

  async function deleteThisBug(){
      console.log('Delete button hit')
      const bugId = props.match.params.id
      const res = await axios.delete(`/bugs/${bugId}`);
      setDeleteBug(res.data)
      console.log('bug deleted')
  }

    const renderBugs =()=> {
        return bugs.map((bug,i)=>{
            return(
                     <div className="card my-3 shadow-lg bg-white" style={{width: '18rem'}} key={i}>
                         <div className="card-body">                   
                            <h5 className="card-title"> {bug.name}</h5>
                            <p className="card-text"> {bug.description}</p>
                         <p className="card-text">  {bug.status}</p>
                         <h6>{bug._id}</h6>
                         <button className="btn btn-primary" >View Bug</button>  
                         <button onClick={deleteThisBug} className="btn btn-danger" >DELETE</button>      
                        </div>
                     </div>
            
               
            )
        })
    }
    return (
        <div className='row  container-fluid ' style={{margin:'0 auto' ,paddingTop:'10vh', display:'flex', justifyContent:'space-around'}}>
            {renderBugs()}
        </div>
    )
}

