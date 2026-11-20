const express = require('express')
const Adventure = require('./Adventure')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

adventure = new Adventure()

app.get('/command', (req, res) => {
    const text = adventure.tell(req.query.command)

    res.json({
        text: text,
        heading: adventure.getCurrentRoom().getHeading(),
    })
})

app.get('/', (req, res) => {
    res.send(
        '<html lang="en"><head>' +
            '<script src="https://code.jquery.com/jquery-3.6.0.min.js"   integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>' +
            '<script src="/game.js"></script>' +
            '<link rel="preconnect" href="https://fonts.googleapis.com"> \n' +
            '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> \n' +
            '<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=VT323&display=swap" rel="stylesheet">' +
            '<link rel="stylesheet" type="text/css" href="/game.css" />' +
            '<title>An Adventure</title></head><body><div class="container"><h1 id="roomHeading">You are in the loo</h1><div id="gameInfo"><p>Welcome to our new Adventure!<br>' +
            adventure.start() +
            '</p></div><form id="commandForm" ><input id="command" type="text" placeholder=" " autofocus/></form>' +
            '</div></body></html>'
    )
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port ${port}`)
})