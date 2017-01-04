# tinytask-frontend-ionic

Nach dem Klonen des Repos,
folgendes ausführen,
damit es läuft:

- `npm install` ausführen (installiert alle Abhängigkeiten aus `package.json`).
- In der Datei
`TinyTask/node\_modules/@ionic/app-scripts/dist/webpack/ionic-environment-plugin.js`
    in Zeile 2 ist ein Rechtschreibfehler,
    denn `Logger` muss richtig `logger` (klein geschrieben) sein.

    Die komplette Zeile sieht (richtig) so aus:

    ```js
    var Logger\_1 = require('../util/logger');
    ```
- `ionic` mit entsprechenden Befehlen aufrufen,
    um die Anwendung zu starten.

