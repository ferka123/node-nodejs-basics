const parseArgs = () => {
    let res = '';
    process.argv.slice(2).forEach(element => {
        if (element.startsWith('--')) res += element.slice(2) + ' is '
        else res += element + ', '
    });
    console.log(res.slice(0, -2))
};

parseArgs();