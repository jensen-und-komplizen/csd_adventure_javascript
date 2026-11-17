# csd-javascript Project

## Vorbereitungen

Um bestens auf den bevorstehenden Kurs vorbereitet zu sein, kannst du folgendes tun:
1. Klone dieses Projekt und prüfe, ob du das Projekt bauen und ausführen kannst (s. [run dev server with hot reload for development](#run-dev-server-with-hot-reload-for-development))
2. Gib uns Bescheid, damit wir dich zum GitHub-Projekt hinzufügen können (kontaktiere uns dafür über E-Mail z.B. [Björn](mailto:bjoern@jensen.coach))

## On your machine
### prerequisites
Du brauchst [Node.js](https://nodejs.org/) in Version 22 oder neuer (inkl. `npm`), empfohlen ist die aktuelle LTS-Version 24. Prüfe deine Version mit:
```shell script
node -v
```

### clone
```shell script
git clone https://github.com/jensen-und-komplizen/csd_adventure_javascript.git
cd csd_adventure_javascript
```

### install dependencies
```shell script
npm install
```

### run tests
Alle Tests (Unit-Tests und Feature-Tests):
```shell script
npm test
```

Nur die Unit-Tests ([Jest](https://jestjs.io/), unter `test/unittests`):
```shell script
npm run unit-tests
```

Nur die Feature-Tests ([Cucumber](https://cucumber.io/), unter `test/features`):
```shell script
npm run feature-tests
```

Die Testergebnisse werden zusätzlich als JUnit-XML nach `test-results/` geschrieben.

### run UI tests
Die Oberflächentests ([Cypress](https://www.cypress.io/), unter `test/cypress`) sind ein eigenes npm-Projekt und laufen im Browser gegen das gestartete Spiel. Starte dazu zuerst den Server (s. [run dev server with hot reload for development](#run-dev-server-with-hot-reload-for-development)) und dann in einem zweiten Terminal:
```shell script
cd test/cypress
npm install
npm test
```

Mit `npm run open` öffnet sich stattdessen die Cypress-Oberfläche, in der du die Tests interaktiv ausführen kannst.

### run dev server with hot reload for development
```shell script
npm run dev
```

Das Spiel läuft dann unter http://localhost:3000. Bei Änderungen in `src/` startet [nodemon](https://nodemon.io/) den Server automatisch neu.

### format code
Der Code wird mit [Prettier](https://prettier.io/) formatiert (Regeln in `.prettierrc`). Alle Dateien unter `src/` formatierst du mit:
```shell script
npm run format
```

Am einfachsten ist es, wenn deine IDE beim Speichern automatisch formatiert:
- **VS Code:** Installiere die Erweiterung [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). Wähle dann unter *Settings* bei „Default Formatter“ Prettier aus und aktiviere „Format On Save“.
- **WebStorm / IntelliJ:** Unter *Settings → Languages & Frameworks → JavaScript → Prettier* „Automatic Prettier configuration“ wählen und „Run on save“ aktivieren.

### run the application
```shell script
node src/app.js
```

## Project structure

```
src/
  app.js          Express-Server (Port 3000), liefert die Spielseite und den Endpoint /command
  Adventure.js    Spiellogik: verarbeitet die eingegebenen Befehle
  TimeService.js  Holt die aktuelle Zeit vom zentralen CSD-Time-Service
  Characters/     Spielfiguren (z.B. Player)
  Rooms/          Räume (z.B. Loo, WashRoom)
  public/         Frontend (game.js, game.css, Help.js)
test/
  unittests/      Jest-Unit-Tests
  features/       Cucumber-Features und Step-Definitionen (support/)
  cypress/        Cypress-Oberflächentests (eigenes npm-Projekt)
```

## Continuous Integration

Bei jedem Push baut [CircleCI](https://circleci.com/) das Projekt mit Node.js 24, installiert die Abhängigkeiten mit `npm ci` und führt `npm test` aus (s. `.circleci/config.yml`). Die Cypress-Oberflächentests laufen nicht in der CI.
