const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require('../middleware/auth');
const User = require("../models/userModel");

//Register User Route
router.post("/register", async (req, res) => {
  try {
    let { email, password, passwordCheck, displayName } = req.body;
    // validate
    if (!email || !password || !passwordCheck)
      return res.status(400).json({ msg: "Not all fields have been entered." });
    // Checking that password is at least 8 char long, and checking that password matches passwordCheck
    if (password.length < 8)
      return res
        .status(400)
        .json({ msg: "The password needs to be at least 8 characters long." });
    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification." });
    // check if user already exist in DB, if they do display message
    const existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "An account with this email already exists." });
    // if no display name display email
    if (!displayName) displayName = email;
    // create validation to check if displayName already exist 

    // Salting
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: passwordHash,
      displayName,
    });

    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//User Login route.
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });
// check if user is already registered 
    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with this email has been registered." });
//compare passwords with bcrypt
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched)
      return res.status(400).json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        displayName: user.displayName,
      },
    });
  } catch (err) {
    res
    .status(500)
    .json({ error: err.message });
  }
});


// delete user account only if logged in. 

router.delete("/delete", auth, async (req, res) => {
try{
  const deletedUser = await User.findByIdAndDelete(req.user);
  res.json(deletedUser);

}catch(err){
  res
  .status(500)
  .json({msg: error.message})
}
});

router.post("/tokenIsValid", async (req, res  )=>{
  try{
    const token = req.header("x-auth-token");
    if(!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if(!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if(!user) return res.json(false);

    return res.json(true)
  } catch (err){
    res
  .status(500)
  .json({msg: error.message})

  }
})

router.get("/",auth, async (req,res)=>{
  const user =  await User.findById(req.user);
  res.json({
    displayName:user.displayName,
    id: user._id,
  });
})

module.exports = router;
