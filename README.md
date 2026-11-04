# HUB Safety – icône d'application (PWA)

Ce dépôt ne contient **aucune donnée** : juste une icône, un écran de démarrage vert et une redirection vers le HUB (Apps Script).
Les droits d'accès, les magasins et les données restent 100 % gérés par ton application Google.

## Mise en ligne (une seule fois, ~5 minutes)

1. Sur GitHub : **New repository** → nom `hub-safety` → **Public** (GitHub Pages gratuit) → *Create repository*.
2. **Add file → Upload files** → glisse TOUT le contenu de ce dossier (y compris le dossier `icons`) → *Commit changes*.
3. **Settings → Pages** → *Build and deployment* : Source = **Deploy from a branch**, Branch = **main**, dossier **/ (root)** → *Save*.
4. Attends 1 à 2 minutes : l'adresse apparaît en haut de la page (du type `https://TON-PSEUDO.github.io/hub-safety/`).

## Changer l'adresse du HUB
Ouvre `config.js` sur GitHub (icône crayon), remplace l'adresse `…/exec`, *Commit*. Rien d'autre à toucher.
Garde l'adresse **sans paramètre** : c'est l'application qui envoie chacun vers son magasin (ou vers la région).

## Installer l'icône sur un téléphone
- **Android (Chrome)** : ouvrir l'adresse GitHub Pages → menu ⋮ → **Installer l'application** (ou « Ajouter à l'écran d'accueil »).
- **iPhone (Safari)** : ouvrir l'adresse → bouton Partager → **Sur l'écran d'accueil**.
- **Ordinateur (Chrome/Edge)** : icône d'installation dans la barre d'adresse.

À partager aux équipes : le lien GitHub Pages + ces 2 lignes.

## Versions : HUB et HUB 2.0 côte à côte
Pour tes essais, crée un 2ᵉ dépôt `hub-safety-v2` identique, avec l'adresse de la V2 dans `config.js` et `window.HUB_NOM = "HUB Safety V2";`. Tu auras deux icônes distinctes.

## Limites à connaître
- Le HUB reste une page Google : la connexion au compte Leroy Merlin est demandée comme aujourd'hui.
- Sur Android, une fine barre d'adresse peut apparaître, car le HUB est sur un autre domaine que l'icône.
- Pas de mode hors ligne pour les données (l'écran de démarrage, lui, s'ouvre sans réseau).
- Dépôt public = le lien du HUB est lisible dans `config.js`. Il reste protégé par la connexion Google, mais préviens la DSI si besoin.
