var x = require("child_process")
let result = x.exec("ls", function (err, out, err) {
    console.log(out);
    process.exit(0);
})
