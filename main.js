import core from "@actions/core"

async function run() {
    try {
        const name = core.getInput('who-to-greet');
        const time = (new Date()).toTimeString();

        console.log(`Hello ${name}.`);
        core.setOutput('time', time);

        if (name === 'Hunter') {
            core.setFailed('Bad name');
        }

    } catch (error) {
        // Fail the workflow run if an error occurs
        core.setFailed(error.message)
    }
}

module.exports = {
    run
}
