const core = require("@actions/core")

const name = core.getInput('who-to-greet');
const time = (new Date()).toTimeString();

console.log(`Hello ${name}.`);
core.setOutput('time', time);
