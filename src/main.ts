import core from "@actions/core";

export default async function run() {
    try {
        const name = core.getInput('who-to-greet');
        const time = (new Date()).toTimeString();

        console.log(`Hello ${name}.`);
        core.setOutput('time', time);

        if (name === 'Hunter') {
            core.setFailed('Bad name');
        }

    } catch (error: any) {
        core.setFailed(error.message)
    }
}
