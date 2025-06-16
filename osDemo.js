import os from 'os';

// gives you information about your operating system


// userInfo()
console.log(os.userInfo());

// totalmem() - total memory in bytes
console.log(os.totalmem());

// freemem() - free memory in bytes
console.log(os.freemem());

// cpus() - array of CPU info, object for every core on ur system
console.log(os.cpus());