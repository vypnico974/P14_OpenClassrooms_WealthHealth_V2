# P14 OpenClassrooms Wealth Health - solution nr 2

![Author](<https://img.shields.io/badge/Author-Nicolas%20Vyplasil-green>)   


[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://dev.to/envoy_/150-badges-for-github-pnk)
[![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://dev.to/envoy_/150-badges-for-github-pnk)


## La mission

Vous travaillez pour le département technologique d'une grande société financière, WealthHealth. 
Cette société utilise une application web interne, appelée HRnet, qui gère les dossiers des employés. L'application est ancienne et utilise jQuery côté front end, ce qui entraîne des bugs considérables et une augmentation des plaintes en interne. Votre équipe de développement s'efforce depuis un certain temps déjà de mettre à niveau l'application.


## Besoins

- Convertir l'ensemble du projet HRNet en React. 
- Convertir l'un des quatre plugins jQuery actuels en React. Remplacer les 3 plugins jQuery restants par des composants React que tu coderas toi-même, ou que tu peux - - importer depuis des libraires existantes si tu manques de temps. 
- Effectuer des tests de performance Lighthouse en comparant l'ancienne et la nouvelle application.

Voici le [repo HRnet actuel](https://github.com/OpenClassrooms-Student-Center/P12_Front-end).
N'oublie pas que toute l'application HRNet doit être convertie en React : 
- Tu devras faire une nouvelle version des pages "Create Employee" et "Employee List" avec React.
- Tu devras ajouter un système de gestion d'état (la version actuelle utilise un stockage local).
- Tu dois aussi t'assurer que tout est cohérent au niveau du style. Pour cela, tu n'es pas obligé de refaire le design de l'application, mais si tu veux changer le  style pour quelque chose de plus moderne, tu es le bienvenu.  
- Si tu as le temps, tu peux tester le code React avec une suite de tests unitaires. Sinon, seuls des tests manuels sont nécessaires. 


## Tests de performance

Nous voulons également mesurer des données quantifiables (ex. : temps de chargement des pages, appels réseau) pour nous assurer que la conversion de l'application à React améliore effectivement les performances. Pour cela, fais bien des audits de performance Lighthouse. Pour comparer, tu devras en faire un pour l'application jQuery HRnet actuelle, puis un autre une fois que l'application et le plugin jQuery choisi seront convertis en React.

Penses bien à faire un build de l'application avant de faire ton audit. Ça impactera grandement les performances de ton application.

## Solution nr 2

Pour la solution nr 2, j'ai limité l'utilisation de librairie par rapport
à la [solution nr 1](https://github.com/vypnico974/P14_OpenClassrooms_WealthHealth).
Utilisation de composants personnalisés au lieu des librairies suivantes : 
- react-table
- react-select
- react-datapicker

Lien vers le site : [solution nr2](https://vypnico974.github.io/P14_OpenClassrooms_WealthHealth_V2/)


## Prérequis

- [NodeJS (version16.13.2)](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/getting-started/install)

## Dépendances

- A text editor (example : [Visual Studio Code](https://code.visualstudio.com/))
- [react](https://reactjs.org/)
- [redux](https://redux.js.org/introduction/installation)
- [react-redux](https://redux.js.org/introduction/installation)
- [@reduxjs/toolkit](https://redux.js.org/introduction/installation)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [react-modal-by-vyplasiln](https://www.npmjs.com/package/react-modal-by-vyplasiln?activeTab=readme)


# Installation 

- Cloner ce répertoire :
    git clone https://github.com/vypnico974/P14_OpenClassrooms_WealthHealth_V2.git
- Après clonage, installatons des dépendances par npm ou yarn :
    - avec npm : npm i (ou npm install)
    - avec yarn :yarn (ou yarn install)
- Excécuter l'application :  
    - avec npm :npm start
    - avec yarn : yarn start
- Pour créer une version de production : 
  - avec npm : npm run build 
  - avec yarn : yarn run build
- Excécuter une version de production :
  - avec npm :
    - npm install -g serve
    - serve -s build
  - avec yarn : 
    - yarn install -g serve
    - serve -s build


# Installation  (English version)

- Clone this repository :
    git clone https://github.com/vypnico974/P14_OpenClassrooms_WealthHealth_V2.git
- Package installations after cloning, npm or yarn :
    - with npm : npm i (or npm install)
    - with yarn : yarn (or yarn install)
- Run the FrontEnd :  
    - with npm : npm start
    - with yarn : yarn start
- To create and run a production build : 
   - with npm : 
      - npm run build
      - npm install -g serve
      - serve -s build
    - with yarn : 
      - yarn run build
      - yarn install -g serve
      - serve -s build




![logo](https://raw.githubusercontent.com/vypnico974/7697016-Front-End/master/images/create_employee_v2.png)

![logo](https://raw.githubusercontent.com/vypnico974/7697016-Front-End/master/images/list_employee_v2.png)