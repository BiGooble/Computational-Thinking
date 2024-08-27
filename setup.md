# Setupinstructies (eenmalig uit te voeren)

- Installeer [Git](https://git-scm.com/)
- Installeer [NodeJS](https://nodejs.org/)
- Open een Git Bash console in de folder waar je de vakgerelateerde bestanden in wil plaatsen
  - Onder Windows
    - Open Windows Explorer (Win+E)
    - Ga naar de folder
    - Rechtsklik op de folder
    - Selecteer "Git Bash Here"
- Voer in: `git config --global user.email EMAIL` waarbij je EMAIL vervangt door je e-mailadres (het adres dat je gebruikte bij de GitHub registratie). Voorbeeld: `git config --global user.email jan.janssens@student.ucll.be`.
- Voer in: `git config --global user.name "VOORNAAM FAMILIENAAM"`. Voorbeeld: `git config --global user.name "Jan Janssens"`.
- Voer in:
  - Windows: `npm install -g UCLeuvenLimburg/algoritmisch-denken-cli`
  - Mac: `sudo npm install -g UCLeuvenLimburg/algoritmisch-denken-cli`
- In een browser: ga naar [GitHub Classroom](https://classroom.github.com/a/CkWbidEY).
- Selecteer je studentennummer uit de lijst. Indien je je studentennummer niet kan vinden, zie hieronder.
- Aanvaard de assignment.
- Wacht enkele seconden tot GitHub klaar is met je repository te initialiseren.
- Noteer de getoonde URL. Deze is van de vorm `https://github.com/ucll-algoritmisch-denken-1819/ad1819-LOGIN` waarbij LOGIN je GitHub-login is.
- Ga terug naar de console. Voer in: `algo initialize URL` waarbij URL het adres is dat je in de vorige stap verkreeg. Dit zou in principe slechts enkele seconden moeten duren. Indien dit langer duurt, laat iets weten aan de lector.

Je kan nu oefeningen maken zoals [hier](usage.md) beschreven.

## Indien je studentennummer niet in de lijst stond

Stuur een mail naar frederic.vogels@ucll.be om toegang te vragen tot de algo-repository. Vergeet
je studentennummer niet te vermelden.

Ondertussen kan je voort als volgt:

- In de Git Bash console: `algo initialize --no-fork`.

Dit maakt een directory `algoritmisch-denken` aan waarin de opgaves staan.
Je kan echter je vooruitgang niet uploaden.

Wanneer we je hebben toegevoegd op GitHub Classroom voer je we dezelfde stappen uit _behalve de laatste_.

- Open de Git Bash console in de `algoritmisch-denken` directory.
- Voer uit: `algo fork URL` waarbij URL het adres is dat je krijgt van GitHub Classroom.

Hierna kan je je vooruitgang beginnen uploaden zoals [hier](usage.md) beschreven.

## Voor Mac-gebruikers die de tijdelijke oplossing gebruikten

1. Installeer het algo-script: `sudo npm install -g UCLeuvenLimburg/algoritmisch-denken-cli`
2. In een browser: ga naar [GitHub Classroom](https://classroom.github.com/a/CkWbidEY).
3. Twee mogelijkheden:
   - Je krijgt een "You are ready to go" scherm te zien omdat je deze stap al eerder uitvoerde. Ga naar de volgende stap.
   - Je krijgt een lijst studentennummers te zien. Selecteer je studentennummer uit deze lijst. Indien je nummer niet voorkomt, zie hierboven.
4. Noteer de getoonde URL. Deze is van de vorm `https://github.com/ucll-algoritmisch-denken-1819/ad1819-LOGIN` waarbij LOGIN je GitHub-login is.
5. Ga terug naar de console.
6. Twee mogelijkheden:
   - Je hebt reeds een algoritmisch-denken directory waar je totnogtoe je oefeningen in maakte. Ga hiernaartoe met de console. Voer in: `algo fork URL` waarbij URL het adres is dat je verkreeg in stap 4.
   - Je hebt nog geen oefeningen gedownload. Ga in de console naar een directory waar je je oefeningen in wil bewaren. Voer in: `algo initialize URL` waarbij URL het adres is dat je verkreeg in stap 4.
