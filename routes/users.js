const express = require('express');
const router = express.Router()

module.exports = router;
const port = process.env.Port || 4041;
const users = [{name: 'Anar', email:'anarkazimov98@hotmail.com'}]

router.get('/', (_, res) => {
  res.send('Your server is on port ' + port);
});

router.get('/users',(_, res)=>{
  res.json({ok: true, users});
});

router.post('/adduser', (req, res) => {
  const{name, email} = req.body;
  if(name && email){
    users.push({name, email});
    res.json({ok: true, users});
  }
});

router.get('/user/:name', (req, rest) => {
  const{name} = req.params;
  const user = users.filter((user) => user.name === name)[0];
  res.json({ok:true, user});
});