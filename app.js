const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const db = require('./config/database')

// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
//   });
// Setting up router


// Test the connection of DB
db.authenticate()
    .then(() => console.log("Database connected..."))
    .catch(err => {
        console.log(err)
    })

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => res.send('How are you'))
app.use('/gigs', require('./routes/gigs'))

app.listen(PORT, console.log(`Server is running in ${PORT}`))

