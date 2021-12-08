'use strict';

const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();

const AUTH_KEY=""

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
     const authParam = req.query.authParam;

	 let result = [];
	 
	 let db = new sqlite3.Database('app.sqlite', sqlite3.OPEN_READONLY, (err) => {
          if (err) {
               console.error(err.message);
          }
		  
	      const SQL="SELECT title,url from items where title != 'app.dashboard' ORDER BY title;";
	 
     	  db.all(SQL, [], (err, rows) => {
               if (err) {
                    throw err;
               }

	           rows.forEach((row) => {
	                //console.log(`Adding ${row.title} and ${row.url}`);
	                result.push([row.title,row.url]);			  
               });
	       
               if (AUTH_KEY != "" && req.query.authParam == AUTH_KEY)
     	            res.send(JSON.stringify(result));
               else
                    res.send('AUTH_KEY not set or valid');
          });
     });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
