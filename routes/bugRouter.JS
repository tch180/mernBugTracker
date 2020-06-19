const router = require("express").Router();
const bugModel = require("../models/bugModel");



//get all bugs 
router.get('/allBugs', async (req,res)=>{
    try {
        console.log("get all bugs route")
        const bugs = await bugModel.find({})
        res.json(bugs)
        
    } catch (error) {
        res 
        .status(500)
        .json({ error: err.message})
    }
})
//Post new Bug
router.post("/newBug", async (req, res)=>{
    try {
        console.log("submit new bug hit")
        let { name, description, status} = req.body;
    // validation 
        if(!name || !description || !status)
        return res.status(400).json({msg: "Please enter all fields, Description must be at least 144 characters"})
        
        if(description.length < 144)
        return res.status(400).json({msg: 'Description needs to be at least 144 chars'})

        // if no status, default status is submitted 
        if(!status) status = "submitted";
        //saving new bug 
        const newBug = new bugModel({
            name,
            description,
            status,
        });
        const savedBug = await newBug.save();
        console.log("saving new bug")
        res.json(savedBug);
    } catch(err) {
        res 
        .status(500)
        .json({ error:err.message})

    }
})
//Update Bug
router.patch('/:id', async (req, res)=>{
    try {
        // update bug body
    const updateBug = req.body
        //find the bug by Id 
        const currentBug = await bugModel.findById(req.params.id)
        //update fields 
        currentBug.name = updateBug.name
        currentBug.description = updateBug.description
        currentBug.status = updateBug.status
        // save the changes 
        let saveUpdatedBug = await currentBug.save()
        //send the changes
        res.json(saveUpdatedBug)
        //basic error message
    } catch (err) {
        res 
        .status(500)
        .json({ error: err.message})
    }
})
//delete bugs 
router.delete('/:id', async (req, res)=>{
    try {
        console.log("delete route hit on bugs")
        const deleteBug = await bugModel.findByIdAndDelete(req.params.id);
        console.log('bug ID:', req.params.id)
        res.json(deleteBug);
        console.log("bug deleted ")
    } catch (err) {
        res 
        .status(500)
        .json({ error:err.message,})
    }
})



























module.exports = router;
