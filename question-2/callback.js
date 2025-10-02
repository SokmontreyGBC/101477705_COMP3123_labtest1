function resolvedPromise() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let success = { message: "delayed success!" };
            res(success);
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            try {
                throw new Error("delayed exception!");
            } catch (e) {
                rej({ message: e.message });
            }
        }, 500);
    });
}

resolvedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

rejectedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.log(error));