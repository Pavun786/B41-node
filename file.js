const fs = require("fs");

//create + write fil methoed:-------------
// const quote = "Truth is always won"

// fs.writeFile("./awesome.html",quote,(err)=>{
//     console.log("completed writting...!")
// })

// const quote2="Live more,worry less"
// for(let i=1;i<=10;i++){
// fs.writeFile(`./backup.js/text-${i}.html`,quote2,(err)=>{
//     console.log("Completed..!");
// });
// }

// const quote2="Live more,worry less"
// const[,,num]=process.argv
// for(let i=1;i<=num;i++){
// fs.writeFile(`./backup.js/text-${i}.html`,quote2,(err)=>{
//     console.log("Completed..!");
// });
// }

//Read file methoed:-------

//  fs.readFile("./cool1.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
//  })

//append or add in existing file:------
// const quote3="Dream big,achieve big"

// fs.appendFile("./cool.txt","\n" + quote3,(err)=>{
//     console.log("completed appending")
// })

fs.unlink("./delete.txt",(err)=>{
    console.log("Deleted successfully")
})