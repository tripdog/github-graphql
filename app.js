const express = require("express")
const fetch = require("node-fetch")
const app = express()

app.use(express.static("public"))

//create the index endpoint
app.get("/data", (req, res) => {
    const query = `{ viewer { login }}`
    const url = "https://api.github.com/graphql"

    const options = {
        method: "post",
        headers: {
            "content-type": "application/json",
            authorization: "bearer " + process.env.APIKEY,
        },
        body: JSON.stringify({ query: query }),
    }
    let response
    try {
        response = await fectch(url, options)
    } catch (error) {
        console.error(error)
    }
    const data = await response.json()
    console.log(data)
    res.json(data)
})

app.listen(3000, () => console.log("Server ready Captain!"));