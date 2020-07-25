const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    console.log("Routes Working Successfully...")
})
router.get('/check-backend',(req,res)=>{
    res.send("Successfully Connected to Backend...")
})

module.exports = router