var express = require('express');
const MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var session = require('express-session');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();
app.use(express.static(__dirname+'/public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/',(req, res)=>{
	res.redirect('/index.html');
})

///////////////login
app.post('/login', (req, res) => {
  var todo = {
    email: req.body.username,
    password: req.body.password,
  };

     console.log(req);
  console.log('res:'+res);

  ///validation
  MongoClient.connect('mongodb://localhost:27017/Expense', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server...');

    db.collection("signUp").findOne({'email': todo.email},function(err,result){
      if(err) 
        console.log(err);
      if(result!=undefined)
      {
            console.log(result.password);   
            if(result.password==todo.password)
              res.send(true);
            else
            {
              res.send(false);
            }
      }
      else
      {
        res.send(false);
      }
        
    })
    

    db.close();
  });
});

////////////////////////register
  app.post('/signUp', (req, res) => {
  var todo = {
    First_name: req.body.first_name,
    mobile_no: req.body.last_name,
    email: req.body.email,
    password: req.body.password
  };

console.log(req);
  console.log('res:'+res);
MongoClient.connect('mongodb://localhost:27017/Expense', (err, db) => {
	  if (err) {
	    return console.log('Unable to connect to MongoDB server');
	  }
	  console.log('Connected to MongoDB server...');
      
      db.collection("signUp").insertOne(todo,(err, result)=>{
      if (err) {
        res.status(400).send(err);
      }else{
        console.log(result.ops);
        res.send(result.ops);
      }

    })

	  db.close();
	})
});

/////////////////****ADDING   ITEMS*****/////////////////////////

/***********groceries********/

app.post('/groc', (req, res) => {
  var frnd = {
    date1: req.body.date1,
    amount: req.body.amount,
    item: req.body.uniq_val,
    user: req.body.login_usr
  };    
  MongoClient.connect('mongodb://localhost:27017/Expense', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server...');

    db.collection("groc").insertOne(frnd,(err, result)=>{
      if (err) {
        res.status(400).send(err);
      }else{
        console.log(result.ops);
        console.log('entry donedanaaa');
        res.json(req.body);
      }

    })
                     
        db.close();
  })
});

/***********entertainment********/

app.post('/ent', (req, res) => {
  var frnd = {
    date1: req.body.date1,
    amount: req.body.amount,
    item: req.body.uniq_val,
    user: req.body.login_usr
  };    
  MongoClient.connect('mongodb://localhost:27017/Expense', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server...');

    db.collection("ent").insertOne(frnd,(err, result)=>{
      if (err) {
        res.status(400).send(err);
      }else{
        console.log(result.ops);
        console.log('entry donedanaaa');
        res.json(req.body);
      }

    })
                     
        db.close();
  })
});

/***********vehicle********/

app.post('/veh', (req, res) => {
  var frnd = {
    date1: req.body.date1,
    amount: req.body.amount,
    item: req.body.uniq_val,
    user: req.body.login_usr
  };    
  
  MongoClient.connect('mongodb://localhost:27017/Expense', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server...');

    db.collection("veh").insertOne(frnd,(err, result)=>{
      if (err) {
        res.status(400).send(err);
      }else{
        console.log(result.ops);
        console.log('entry donedanaaa');
        res.json(req.body);
      }

    })
                     
        db.close();
  })
});

/***********food********/

app.post('/food', (req, res) => {
  var frnd = {
    date1: req.body.date1,
    amount: req.body.amount,
    item: req.body.uniq_val,
    user: req.body.login_usr
  };    
  
  MongoClient.connect('mongodb://localhost:27017/Expense', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server...');

    db.collection("food").insertOne(frnd,(err, result)=>{
      if (err) {
        res.status(400).send(err);
      }else{
        console.log(result.ops);
        console.log('entry donedanaaa');
        res.json(req.body);
      }

    })
                     
        db.close();
  })
});

/***********misceleneous**********************/

app.post('/misc', (req, res) => {
  var frnd = {
    date1: req.body.date1,
    amount: req.body.amount,
    item: req.body.uniq_val,
    user: req.body.login_usr
  };    
  
  MongoClient.connect('mongodb://localhost:27017/Expense', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server...');

    db.collection("misc").insertOne(frnd,(err, result)=>{
      if (err) {
        res.status(400).send(err);
      }else{
        console.log(result.ops);
        console.log('entry donedanaaa');
        res.json(req.body);
      }

    })
                     
        db.close();
  })
});

/*******************total data*****************/

app.post('/total', (req, res) => {
  var frnd = {
    date1: req.body.date1,
    amount: req.body.amount,
    item: req.body.uniq_val,
    user: req.body.login_usr
  };    
  
  MongoClient.connect('mongodb://localhost:27017/Expense', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server...');

    db.collection("total").insertOne(frnd,(err, result)=>{
      if (err) {
        res.status(400).send(err);
      }else{
        console.log(result.ops);
        console.log('entry donedanaaa');
        res.json(req.body);
      }

    })
                     
        db.close();
  })
});

////////////////////piechartttt/////////////////////////////

//////////////piegroc

app.post('/piegroc', (req, res) => {
  var bill = {
    us: req.body.pie
  };
MongoClient.connect('mongodb://localhost:27017/Expense', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server...');
      
      db.collection("groc").find({'user': bill.us}, {'_id':false, 'amount': true}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
        res.send(result);
    });
    db.close();
  })
});

//////////////pieent

app.post('/pieent', (req, res) => {
  var bill = {
    us: req.body.pie
  };
console.log(req);
console.log('res:'+res);
console.log("chart:"+bill.us);
MongoClient.connect('mongodb://localhost:27017/Expense', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server...');
      
      db.collection("ent").find({'user': bill.us}, {'_id':false, 'amount': true}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
        res.send(result);
    });
    db.close();
  })
});

//////////////pieveh

app.post('/pieveh', (req, res) => {
  var bill = {
    us: req.body.pie
  };
console.log(req);
console.log('res:'+res);
console.log("chart:"+bill.us);
MongoClient.connect('mongodb://localhost:27017/Expense', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server...');
      
      db.collection("veh").find({'user': bill.us}, {'_id':false, 'amount': true}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
        res.send(result);
    });
    db.close();
  })
});

//////////////piefood

app.post('/piefood', (req, res) => {
  var bill = {
    us: req.body.pie
  };
console.log(req);
console.log('res:'+res);
console.log("chart:"+bill.us);
MongoClient.connect('mongodb://localhost:27017/Expense', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server...');
      
      db.collection("food").find({'user': bill.us}, {'_id':false, 'amount': true}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
        res.send(result);
    });
    db.close();
  })
});

//////////////piemisc

app.post('/piemisc', (req, res) => {
  var bill = {
    us: req.body.pie
  };
console.log(req);
console.log('res:'+res);
console.log("chart:"+bill.us);
MongoClient.connect('mongodb://localhost:27017/Expense', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server...');
      
      db.collection("misc").find({'user': bill.us}, {'_id':false, 'amount': true}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
        res.send(result);
    });
    db.close();
  })
});


///**************************tablee********************/


app.post('/tables', (req, res) => {
  var bill = {
    us: req.body.pie
  };
console.log(req);
console.log('res:'+res);
console.log("tables:"+bill.us);
MongoClient.connect('mongodb://localhost:27017/Expense', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server...');
      
      db.collection("total").find({'user': bill.us}, 
      {'_id':false, 'date1':true, 'amount':true,'item':true}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
        res.send(result);
    });
    db.close();
  })
});


/////////////////
app.listen(3000, () => {
  console.log('Started on port 3000');
});