// Makes sure the dependencies of the game and of the cypress tests are installed.
// Runs `npm install` only if a direct dependency is missing in node_modules or
// package.json / package-lock.json changed since the last install (e.g. after git pull).
const fs = require('fs')
const path = require('path')
const os = require('os')
const crypto = require('crypto')
const { spawnSync } = require('child_process')

const ROOT = path.join(__dirname, '..')
const CYPRESS = path.join(ROOT, 'test', 'cypress')
const PROJECTS = [ROOT, CYPRESS]
const STAMP = '.deps-installed'

function dependencyHash(dir) {
    const pkg = JSON.parse(
        fs.readFileSync(path.join(dir, 'package.json'), 'utf8')
    )
    const lockFile = path.join(dir, 'package-lock.json')
    const lock = fs.existsSync(lockFile)
        ? fs.readFileSync(lockFile, 'utf8')
        : ''
    return crypto
        .createHash('sha256')
        .update(JSON.stringify([pkg.dependencies, pkg.devDependencies, lock]))
        .digest('hex')
}

function missingDependencies(dir) {
    const pkg = JSON.parse(
        fs.readFileSync(path.join(dir, 'package.json'), 'utf8')
    )
    const names = Object.keys({ ...pkg.dependencies, ...pkg.devDependencies })
    return names.filter(
        (name) =>
            !fs.existsSync(path.join(dir, 'node_modules', name, 'package.json'))
    )
}

function isUpToDate(dir) {
    const stamp = path.join(dir, 'node_modules', STAMP)
    return (
        missingDependencies(dir).length === 0 &&
        fs.existsSync(stamp) &&
        fs.readFileSync(stamp, 'utf8') === dependencyHash(dir)
    )
}

const outdated = PROJECTS.filter((dir) => !isUpToDate(dir))
// npm install in the root also installs the cypress project via postinstall
const toInstall = outdated.includes(ROOT) ? [ROOT] : outdated

for (const dir of toInstall) {
    console.log(
        `Installing dependencies in ${path.relative(ROOT, dir) || '.'} ...`
    )
    const result = spawnSync('npm install', {
        cwd: dir,
        stdio: 'inherit',
        shell: true,
    })
    if (result.status !== 0) {
        process.exit(result.status ?? 1)
    }
}
for (const dir of outdated) {
    fs.writeFileSync(path.join(dir, 'node_modules', STAMP), dependencyHash(dir))
}

// The cypress binary lives outside node_modules in a global cache and can be
// missing even if the npm packages are installed (e.g. after clearing the cache).
function cypressCacheFolder() {
    if (process.env.CYPRESS_CACHE_FOLDER) {
        return process.env.CYPRESS_CACHE_FOLDER
    }
    switch (process.platform) {
        case 'darwin':
            return path.join(os.homedir(), 'Library', 'Caches', 'Cypress')
        case 'win32':
            return path.join(process.env.LOCALAPPDATA, 'Cypress', 'Cache')
        default:
            return path.join(os.homedir(), '.cache', 'Cypress')
    }
}

function isCypressBinaryInstalled() {
    const { version } = JSON.parse(
        fs.readFileSync(
            path.join(CYPRESS, 'node_modules', 'cypress', 'package.json'),
            'utf8'
        )
    )
    const executable = {
        darwin: ['Cypress.app', 'Contents', 'MacOS', 'Cypress'],
        win32: ['Cypress', 'Cypress.exe'],
    }[process.platform] || ['Cypress', 'Cypress']
    return fs.existsSync(
        path.join(cypressCacheFolder(), version, ...executable)
    )
}

if (process.env.CYPRESS_INSTALL_BINARY !== '0' && !isCypressBinaryInstalled()) {
    console.log('Installing cypress binary ...')
    const result = spawnSync('npx cypress install', {
        cwd: CYPRESS,
        stdio: 'inherit',
        shell: true,
    })
    if (result.status !== 0) {
        process.exit(result.status ?? 1)
    }
}
