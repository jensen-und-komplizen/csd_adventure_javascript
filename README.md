# csd-javascript Project

## Vorbereitungen

Um bestens auf den bevorstehenden Kurs vorbereitet zu sein, kannst du folgendes tun:
1. Klone dieses Projekt und prüfe, ob du das Projekt bauen und ausführen kannst (s. [run dev server with hot reload for development](#run-dev-server-with-hot-reload-for-development))
2. Gib uns Bescheid, damit wir dich zum GitHub-Projekt hinzufügen können (kontaktiere uns dafür über E-Mail z.B. [Björn](mailto:bjoern@jensen.coach))

## On your machine
### prerequisites
Du brauchst eine aktuelle LTS-Version von [Node.js](https://nodejs.org/) (inkl. `npm`). Prüfe deine Version mit:
```shell script
node -v
```

### clone
```shell script
git clone https://github.com/jensen-und-komplizen/csd-javascript.git
cd csd-javascript
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

### run dev server with hot reload for development
```shell script
npm run dev
```

Das Spiel läuft dann unter http://localhost:3000. Bei Änderungen in `src/` startet [nodemon](https://nodemon.io/) den Server automatisch neu.

### format code
```shell script
npm run format
```

### run the application
```shell script
node src/app.js
```

## Project structure

```
src/
  app.js          Express-Server (Port 3000), liefert die Spielseite und den Endpoint /command
  Adventure.js    Spiellogik: verarbeitet die eingegebenen Befehle
  Characters/     Spielfiguren (z.B. Player)
  Rooms/          Räume (z.B. Loo, WashRoom)
  public/         Frontend (game.js, game.css, Help.js)
test/
  unittests/      Jest-Unit-Tests
  features/       Cucumber-Features und Step-Definitionen (support/)
```

## Continuous Integration

Bei jedem Push baut [CircleCI](https://circleci.com/) das Projekt und führt `npm test` aus (s. `.circleci/config.yml`).
