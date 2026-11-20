// Starts a dedicated game instance on a free port (3001 or the next free one),
// runs cypress against it and shuts the instance down afterwards.
const net = require('net')
const { spawn } = require('child_process')

const FIRST_PORT = 3001
const mode = process.argv[2] === 'open' ? 'open' : 'run'

function isFree(port) {
    return new Promise((resolve) => {
        const server = net.createServer()
        server.once('error', () => resolve(false))
        server.once('listening', () => server.close(() => resolve(true)))
        server.listen(port, '0.0.0.0')
    })
}

async function findFreePort(port) {
    while (!(await isFree(port))) {
        port++
    }
    return port
}

findFreePort(FIRST_PORT).then((port) => {
    const url = `http://localhost:${port}`
    console.log(`Starting game for cypress tests on ${url}`)
    const child = spawn(
        `start-server-and-test start-app ${url} cypress:${mode}`,
        {
            stdio: 'inherit',
            shell: true,
            env: { ...process.env, PORT: port, CYPRESS_baseUrl: url },
        }
    )
    child.on('exit', (code) => process.exit(code ?? 1))
})
