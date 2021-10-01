const http=require('http')
const url = require( 'url' );
const fs=require('fs')
const path=require('path')

// const filepath1=path.join(__dirname,'index.html')

// const rs1=fs.createReadStream(filepath1)
const server=http.createServer()

// console.log(__dirname)
// console.log(__filename)
// console.log(path.join(__dirname,'contact.html'))// too join the file with dietory


server.on('request',function(req,res)
{

   // console.log( req.url );
    const parts = url.parse( req.url, true );
   // console.log("---------------------", parts );
    if(parts.pathname=="/")
    {
        const filepathcontact=path.join(__dirname,'index.html')
        const rs1=fs.createReadStream(filepathcontact)
        rs1.pipe(res)
        console.log("working ....")
        //res.end("working the slash file....")
    }
    if(parts.pathname=="/contact")
    {
        
        const filepath=path.join(__dirname,'contact.html')
        const rs=fs.createReadStream(filepath)
        rs.pipe(res)
        console.log("working ....")
       // res.end("ended")
    
    }
    if(parts.pathname=="/message")
{
    console.log("********************",parts.query.password)
    const objects={
        'fullname':parts.query.fullname,
        'password':parts.query.password,
        'message':parts.query.message,
        'city':parts.query.city,
        'email':parts.query.email
    }

     const filepathwrite=path.join(__dirname,'message.json')
    const ws=fs.createWriteStream((filepathwrite),{flags:"a"})
    console.log("kkkkkkkkkkk",JSON.stringify(objects))

    
    ws.write(JSON.stringify(objects,null,' '))
  // ws.write(JSON.parse(parts))
    
    ws.end()
    
    


//     const data = JSON.stringify(objects,null, 2);

// // write JSON string to a file
// fs.writeFile('message.json', data, (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("JSON data is saved.");
// });
    const filepath=path.join(__dirname,'register.html')
        const rs=fs.createReadStream(filepath)
        rs.pipe(res)
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.")
   // res.end("completed")
}
  

})
server.listen(3000,function()
{
    console.log("listing")
})