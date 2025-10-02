const fs = require('fs');

try {
    fs.readdir("logs", (err, files) => {
        if (files) {
            files.forEach(f => {
                console.log(f);
                fs.unlinkSync("logs/" + f);
            })
        }

        try {
            fs.rmdirSync("logs");
        } catch (e) {
            console.log(e);
        }
    });
} catch (e) {
    console.log(e);
}