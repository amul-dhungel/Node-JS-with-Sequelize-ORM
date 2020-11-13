const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Gig = require('../models/Gig')

router.get('/', (req, res) =>
    Gig.findAll()
        .then(gigs => {
            console.log(gigs);
            res.sendStatus(200)
        })
        .catch(err => console.log(err))

)

router.get('/add', (req, res) => {
    const data = {
        title: "Looking for a React developer",
        technologies: "react, javascript, html, css",
        budget: '$3000',
        description: 'DKFJDFAKFJASDKFDJFLSDKFJASDFKDFJSKDFJ',
        contact_email: 'user@gmail.com'
    }

    let { title, technologies, budget, description, contact_email } = data

    // Insert into database table

    Gig.create({
        title,
        technologies,
        budget,
        description,
        contact_email
    })
        .then(gig => res.redirect('/gigs'))
        .catch(err => console.log(err))
})

module.exports = router