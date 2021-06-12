
const os = require('os')

// User Info
const user = os.userInfo()
console.log(user);

// System uptime
const uptime = os.uptime()
console.log(`System is running since ${uptime} seconds`);

// OS information
const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOS);