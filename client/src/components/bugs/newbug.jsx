import React, {useState, useContext} from 'react'
import {GlobalBugContext} from '../../context/GlobalState';
import axios from 'axios'


export const  NewBug =()=> {

    const [name, setName] = useState('');
    const [description, setDescription]= useState('');
    const [status, setStatus]= useState('');
    const {addBug} = useContext(GlobalBugContext);


    const onSubmit = async (event) =>{
        event.preventDefault();
        console.log("starting Submit")
        const newBug = await axios.post('/bugs/newBug', {
            name,
            description,
            status,
        })
        console.log('Im the new bug ',newBug)
        addBug(newBug);
        console.log([addBug, newBug])
    }
    return (
      <>
        <h2 style={{textAlign:"center"}}>Add New Bug </h2>
        <form onSubmit={onSubmit} className='shadow-lg p-3 mb-5 bg-white  rounded'  id="form" style={{width: '18rem', margin: 'auto'}}>
          <div className="form-group">
            <label htmlFor="bugName">Bug Name </label>
            <input
              type="text"
              className="form-control"
              id="Name"
              placeholder="Bug Name "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bug-Description">Bug description</label>
            <textarea
              className="form-control"
              id="Description"
              rows="3"
              placeholder="Minimum of 144 Characters"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="bug Status">Bug Status</label>
            <select className="form-control" id="Status" value={status} placeholder="Default is Submitted "
            onChange={(e) => setStatus(e.target.value)}>
              <option value="submitted">Submitted</option>
              <option value="Reviewing">Reviewing</option>
              <option value="Resolving">Resolving</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
          <button   type="submit" className="btn btn-primary">Submit</button>
        </form>
      </>
    );
    
}
