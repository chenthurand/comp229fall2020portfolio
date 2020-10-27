let express = require('express');
let router = express.Router();

let mongoose = require("mongoose");
let Contact = require('../models/contact');

/* GET contact-list page. */
router.get('/', function(req, res, next) {

    Contact.Model.find((err,data)=>{
      if(err)
      {
        console.log(err);
        res.end();
      }
    
      res.render('index', { title: 'Contact List', contactList: data});
      });
    
    });

 /* GET add page */
 router.get('/add',(req,res,next) =>{
    res.render('index', { title: 'Add Contact'});

 }); 
 
 /* Post process the add page. Create */
 router.post('/add',(req,res,next) =>{
    

}); 
/* Get edit page. Update*/
router.get('/edit/:id',(req,res,next) =>{


}); 
/* POST process the edit page. UPDATE*/
router.post('/edit/:id',(req,res,next) =>{


}); 
/* GET process the delte page. DELETE */
router.get('/delete/:id',(req,res,next) =>{


}); 

module.exports = router;