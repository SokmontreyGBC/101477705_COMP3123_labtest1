function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        const result = arr
            .filter(ele => typeof ele === "string")
            .map(ele => ele.toLowerCase());
        if (result.length === 0) {
            reject("No string values found in the array");
        } else {
            resolve(result);
        }
    });
}

lowerCaseWords(["PIZZA", 10, true, 25, false, 'Wings'])
    .then(result => console.log(result))
    .catch(error => console.log(error));

lowerCaseWords([true, false, 123])
    .then(result => console.log(result))
    .catch(error => console.log(error));