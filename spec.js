const os = require("os");
//1GB--->1024 mb
console.log("Free memory",os.freemem()/1024/1024/1024);
console.log("Total memory",os.totalmem()/1024/1024/1024);
console.log("version",os.version());
console.log("CPU",os.cpus());