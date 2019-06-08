const process = require('process');

//ARQUITECTURA
console.log(process.arch)
console.log("---------------------")
//MEMORIA
console.log(process.memoryUsage());
console.log("---------------------")
//ENTORNO DE EJECUCION

console.log(process.execPath)
console.log("---------------------")
//CPU USAGE
const startUsage = process.cpuUsage()
console.log(startUsage+ "")
//console.log(process.cpuUsage(usage))
console.log("---------------------")
//ENVIRONMENTAL VARIABLES
console.log(process.env)