// const fs = require("fs");
// let text= fs.readFileSync("d.txt","utf-8");
// text=text.replace("he","rohan");
// console.log(text);

// fs.writeFileSync("rohan .txt", text);

// const http=require("http");
// const hostname = "127.0.0.1";
// const port =80;
// const server=http.createServer((req,res)=>{res.statusCode=200;
// res.setHeader("content-type","text/html");
// res.end( <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
//     </head>
//     <body>
//         <p>how r u</p>
        
//     </body>
//     </html> )
// });
// server.listen(port,hostname,()=> {
//     console.log(`server running at https://${hostname}:${port}/`);
// });

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader(`'Content-Type'`, 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <p>how r u</p>
      
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});