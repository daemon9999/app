const path = require("path")
const express = require("express")

const app = express();


const root = path.join(__dirname, "..//dist")

app.use(express.static(root));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '..//dist', 'index.html'));
});


app.listen(3000, () => console.log("Server is running on 3000"))