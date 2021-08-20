function delayedResultPromise(n1, n2, delayTime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(`${n1+n2}`)}, delayTime);
    });
};

async function main() {
        const data = await delayedResultPromise(4, 5, 3000);
        console.log(data);
}

main();