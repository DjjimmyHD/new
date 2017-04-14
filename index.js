const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const linkQuery = require('./db/query-links')

app.set('view engine', 'hbs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extedned:false}))

app.use(bodyParser.json())

app.get('/', (req, res) => {
  linkQuery.getAll()
  .then(data => {
      res.render('index', {data})
})

// getAll()
  // const data = [{
  //   id:0,
  //   votes:35,
  //   url: 'https://www.urmom.com',
  //   title: 'yoooooo'
  // },{
  //   id:1,
  //   votes:26,
  //   url: 'https://www.urmom.com',
  //   title: 'meow'
  // }]


 // res.render('index', {data})
})

app.post('/add-link',(req,res) =>{
  linkQuery.add(req.body)
  .then(() => {
      res.redirect('/')
    })

})
app.post('/upvote-link',(req,res) =>{
  linkQuery.add(req.body)
  .then(() => {
      res.redirect('/')
    })

})

app.listen(port, ()=>{
  console.log("we are listening");
})
