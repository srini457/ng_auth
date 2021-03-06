const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')
const db = "mongodb://user1:password1@ds163610.mlab.com:63610/eventsdb"

mongoose.connect(db, err=>{
    if(err){
        console.error('Error!'+ err)
    }else{
        console.log("connected mongodb")
    }
})

function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token = rreq.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretkey')
    if(!payload) {
        return res.status(401).send('Unauthorized request') 
    }
    req.userId = payload.subject
    next()
}
router.get('/', (req, res)=>{
    res.send("form api route")
})

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if(error){
            console.log(error)
        }else{
            let payload = { subject: registeredUser._id }
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).send({token})
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body
    
    User.findOne({email: userData.email}, (error, user)=>{
        if(error){
            console.log(error)
        }else{
            if(!user){
                res.status(401).send('Invalid email')
            }else 
                if(user.password !==userData.password){
                    res.status(401).send('Invalid password')
                } else{
                    let payload ={subject: user._id }
                    let token = jwt.sign(payload, 'secretkey')
                    res.status(200).send({token})
                }
            
        }
    })
})

router.get('/events', (req, res)=>{
    let events = [
        {
        "_id":"1",
        "name":"Auto Expo",
        "description":"loreum ipsum",
        "date":"2012-02-22"
    },
    {
        "_id":"1",
        "name":"Auto Expo",
        "description":"loreum ipsum",
        "date":"2012-02-22"
    },
    {
        "_id":"1",
        "name":"Auto Expo",
        "description":"loreum ipsum",
        "date":"2012-02-22"
    },
    {
        "_id":"1",
        "name":"Auto Expo",
        "description":"loreum ipsum",
        "date":"2012-02-22"
    },
    {
        "_id":"1",
        "name":"Auto Expo",
        "description":"loreum ipsum",
        "date":"2012-02-22"
    },
    {
        "_id":"1",
        "name":"Auto Expo",
        "description":"loreum ipsum",
        "date":"2012-02-22"
    },
    {
        "_id":"1",
        "name":"Auto Expo",
        "description":"loreum ipsum",
        "date":"2012-02-22"
    },
    {
        "_id":"1",
        "name":"Auto Expo",
        "description":"loreum ipsum",
        "date":"2012-02-22"
    },
    {
        "_id":"1",
        "name":"Auto Expo",
        "description":"loreum ipsum",
        "date":"2012-02-22"
    }

    ]
        res.json(events)
})
router.get('/special', verifyToken, (req, res)=>{
    let events = [
        {
        "_id":"1",
        "name":"Auto Expo",
        "description":"loreum ipsum",
        "date":"2012-02-22"
    },
    {
        "_id":"1",
        "name":"Auto Expo",
        "description":"loreum ipsum",
        "date":"2012-02-22"
    },
    {
        "_id":"1",
        "name":"Auto Expo",
        "description":"loreum ipsum",
        "date":"2012-02-22"
    },
    {
        "_id":"1",
        "name":"Auto Expo",
        "description":"loreum ipsum",
        "date":"2012-02-22"
    },
    {
        "_id":"1",
        "name":"Auto Expo",
        "description":"loreum ipsum",
        "date":"2012-02-22"
    },
    {
        "_id":"1",
        "name":"Auto Expo",
        "description":"loreum ipsum",
        "date":"2012-02-22"
    },
    {
        "_id":"1",
        "name":"Auto Expo",
        "description":"loreum ipsum",
        "date":"2012-02-22"
    },
    {
        "_id":"1",
        "name":"Auto Expo",
        "description":"loreum ipsum",
        "date":"2012-02-22"
    }

    ]
        res.json(events)
})


module.exports = router

