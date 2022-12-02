import { fork } from 'child_process';

const spawnChildProcess = async (...args) => {
    fork('./src/cp/files/script.js', args)
};

spawnChildProcess(34);