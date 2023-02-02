const http = require('http');
const cron = require('node-cron'); 



const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

  cron.schedule('1 * * * * *',()=>{
   
    console.log("9.00AM Writing Test Against Enterprises Rails ")
   



  cron.schedule('* 50 * * * *',()=>{
    console.log("10Am Overloading It in Python 45Min")
   
  })


  cron.schedule('* 45 * * * *',()=>{
   console.log("10.45AM Lua for the masses 30min")
   
  })

  cron.schedule('* 30 * * * *',()=>{ 
    console.log("11.15AM Ruby error from missmatched gem versions 45min ")
   })

   cron.schedule('* 45 * * * *',()=>{ 
    console.log("12PM Lunch")
   })


   cron.schedule('* * 1 * * *',()=>{ 
    console.log("1 PM Why we should move on 60min")
   })


   cron.schedule('* * 1 * * *',()=>{ 
    console.log("2 PM Common ruby error 45min")
   })


   cron.schedule('* 45 * * * *',()=>{ 
    console.log("2.45PM pair programming vs noise")
   })

   cron.schedule('* 45 * * * *',()=>{ 
    console.log("3.30 PM Programming in the Boondocks of Seattle")
   })
  
   cron.schedule('* 30 * * * *',()=>{ 
    console.log("4 PM Ruby vs closure for the backend development")
   })


   
   cron.schedule('* * 1 * * *',()=>{ 
    console.log("5 PM Ruby on the rails legacy App Maintance")
   })

   cron.schedule('* * 1 * * *',()=>{ 
    console.log("6 PM A world without hackernews")
   })

   cron.schedule('* 30 * * * *',()=>{ 
    console.log("User Interface CSS in Rails Apps")
   })



  })
  

    

});