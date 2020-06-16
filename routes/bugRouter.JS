const bugModel = require("../models/bugModel");
const router = require("express").Router();

//Post new Bug
router.post("/newBug", async (req, res)=>{
    try {
        let { name, description, status} = req.body;
        console.log("submit new bug hit")
        const newBug = new bugModel({
            name,
            description,
            status,
        });
        if(!status) status = "submitted";
        const savedBug = await newBug.save();
        console.log("saving new bug")
        res.json(savedBug);
    } catch(err) {
        res 
        .status(500)
        .json({ error:err.message})

    }
})
//get all bugs 
router.get('/allBugs', async (req,res)=>{
    try {
        console.log("get all bugs route")
        const bugs = await bugModel.find({})
        res.json(bugs)
    } catch (error) {
        res 
        .status(500)
        .json({ error:err.message})
    }
})


//delete bugs 
router.delete('/delete', async (req, res)=>{
    try {
        console.log("delete route hit on bugs")
        const deleteBug = await bugModel.findByIdAndDelete(req.bug);
        res.json(deleteBug);
    } catch (error) {
        res 
        .status(500)
        .json({ error:err.message})
    }
})



























module.exports = router;
