// let fs = require('fs');
// let arg = process.argv[2];
// let arg2 = '.'+process.argv[3];
// fs.readdir(arg,function readov(err,list){
//     if(err){console.log('error');}
//     for(let i=0;i<list.length;i++){
//     if(list[i].toString().includes(arg2))
//     console.log(list[i]);
//     }
// })
let fs = require('fs');
let path = require('path');
let dir = process.argv[2];
let ext = '.'+process.argv[3];
fs.readdir(dir,function(err,files){
    if(err){console.log('error');}
    files.forEach(function(file){
        if(path.extname(file)==ext){
            console.log(file);
        }
    });
});
