---
layout: tutoriel
title: "HTML"
---

Et là, on ne rigole plus... on rentre dans le vif du sujet...

HTML est le langage "de base" que tous les développeurs apprennent au début.

Par quoi commencer... la base d'HTML : ***les balises***


## Les Balises donc... :

Les balises servent à dire à l'éditeur de texte, ce qu'on veut faire de chaque contenu.

Par exemple : un paragraphe, un titre, un lien, écrire en gras, en italique, sauter une ligne...

Il existe 2 sortes de balises : Doubles et Uniques


## Les Balises uniques :

Comme leur nom l'indique, ce sont des balises qui sont "uniques"

Par exemple :
 - `<br/>` sert à sauter une ligne
 - `<img>` insérer une image


## Les Balises doubles :

Ce sont des balises qui, encore comme son nom l'indique, vont par paire : la première se met au début du contenu que l'on veut mettre dedans et la deuxième se met à la fin.

Par exemple :
- `<p>` et `</p>` pour faire des paragraphes
- `<strong>` et `<strong>` pour mettre en gras une partie ou un texte
- `<body>` et `</body>` pour définir le corps du texte


Maintenant que nous avons appris les balises, attardons nous sur plusieurs spécificités.

Pour cela, je vous propose un petit exercice pour apprendre quelques bases pour faire une simple page.


## EXERICE FRIENDS

Pour cet exercice, je vous propose de reproduire l'arrière d'un livre que j'affectionne : le livre de cuisine "FRIENDS"

<img class=resumebook src="/assets/images/resumefriendsbook.jpg" width="200px">

Oui oui vous l'avez deviné, je suis une grande fan de Friends... Si bien que mon mari m'a offert le bouquin de cuisine spécial Friends.

Commençons par ouvrir notre éditeur de texte (VS Code pour ma part).

Créez un fichier _"friends.html"_ et commençons !

***Info importante*** : lorsque vous voudrez voir le résultat sur le navigateur, voici la manipulation :

Maintenant, pour voir le résultat :
- Ouvrez votre navigateur web (chrome, safari, mozilla,...) 
- Cliquez sur fichier - ouvrir un fichier
- Choissez le fichier : _friends.html_

S'affichera donc votre texte, peut-être avec le "ç" mal interprêté mais sûrement avec le saut de ligne qui ne se fait pas.

Pour mettre en forme votre contenu, je vous conseille de tout reprendre du début et de prendre le code suivant :

```
<html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="friends.css">
        <title>FRIENDS</title>
    </head>
```
Et là vous allez dire comme moi... _"Ok mais WTF !!"_

Décortiquons tout ça :

| ***Balise HTML*** | ***Utilité*** |
|-------------------|---------------|
| `<html>` | Comme son nom l'indique, signifie que nous allons faire du html |
| `<head></head>` | Sépare l'en-tête du corps de la page |    
| `<meta/>` | Permet de pouvoir de mettre des caractères spéciaux sans que le navigateur mette des bizarreries. |
| | Pour cela, "charset="utf-8" est celui qui intègre le plus de caractères spéciaux. |
| `<link>` | Relie notre page html à notre page CSS) |
| `<title></title>` | Sera le titre de notre page : il s'affiche sur l'onglet du navigateur |

Votre en-tête est fait, maintenant nous allons pouvoir nous pencher sur le contenu de la page, c'est à dire le "body"

Pour ce faire, commencez par mettre la balise `<body></body>` qui va définir le corps de la page.

Décortiquons la page que nous voulons faire : nous voyons que tout en haut, se trouvent des images.

Pour ma part, je me suis amusée à aller chercher des images de Friends sur le net.

Pour les insérer à notre code, voici comment faire :

```html
<div class="images">
    <img id="chezmonica" src="/Users/anne/Desktop/site formation/exercice/friends.png" width=300px height="200px">
    <img id="atable" src="/Users/anne/Desktop/site formation/exercice/friendsatable.jpeg" width="300px" heigh="200px">
    <img id="centralperk" src="/Users/anne/Desktop/site formation/exercice/centralperk.jpeg" width="300px" heigh="150px">
</div>
```
Tout d'abord, nous commençons par la balise `<div></div>` qui détermine un "block"
J'ai donné une `class` à la balise pour faciliter la mise en page après mais nous y reviendrons plus tard...

Maintenant, nous allons mettre nos images dans ce block `div` :
Les balises `<img>` sont des balises qui n'ont pas besoin de balise fermante.
Le terme `id=` permet comme `class` de donner un nom pour la mise en page future.
Le terme `src=` permet de faire le lien entre notre code et là où est enregistrée notre image.

Pour aller chercher les images:
Je vous conseille de cliquer droit sur l'image
Aller dans les paramètres
Copier/coller le lien (vérifiez bien que le lien soit complet)

***Attention : tous vos fichiers et images doivent être dans un même dossier côte à côte, sinon le lien ne se fera pas bien.***

Et enfin, j'ai paramétré les tailles de chaque image en intégrant `width="..px"` et `height="..px"`
Là, pour être honnête, je vous laisse tester les tailles ... je tâtonne donc c'est en essayant que je vois le rendu...

Voici donc le rendu que vous devez avoir :

 <img id="friends" src="/assets/images/friends.png" width="300px" height="200px">
<img id="atable" src="/assets/images/friendsatable.jpeg" width="300px" height="200px">
<img id="centralperk" src="/assets/images/centralperk.jpeg" width="300px"
            height="200px">

Nous allons ensuite intégrer notre deuxième "block" qui sera le texte en-dessous.

Tout comme les images, nous allons créer un `<div></div>`.
Nous allons egalement lui insérer une `class` pour la mise en page future :
`<div class="resume">`

Nous en venons au titre : il y a des balises pour cela :
- `<h1>` Pour le titre principal
- `<h2>` Pour le sous titre
- `<h3>` Pour un titre moins important
- `<h4>` Pour un titre encore moins important

... etc.. etc...

Notre : "F.R.I.E.N.D.S" va donc être, vous l'aurez compris, ... TADATADATADATADAAAAAAAA : `<h1></h1>` (*quoi? il est pas beau mon roulement de tambours ?*)

Notre : _"LE LIVRE DE CUISINE OFFICIEL"_ : `<h2></h2>`

Ensuite, pour nos différents paragraphes, nous utiliserons la balise `<p></p>`.

Vous remarquerez que dans le texte, il y a certains mots ou phrases en gras ou en italique. Voici les balises à utiliser :
- `<strong></strong>` pour mettre en gras
- `<em></em>`pour mettre en italique

Voici ce que ça donne : 

```html
<div class="resume">
    <h1>F.R.I.E.N.D.S</h1>
    <h2>LE LIVRE DE CUISINE OFFICIEL</h2>
        <p><strong>RASSEMBLEZ VOS AMIS</strong> et préparez-vous à chanter "I'll be there for you derrière les fourneaux grâce à <em>Friends : Le livre de cuisine officiel</em> !</p>

        <p>Que vous soyez une chef chevronnée comme Monica Gueller,une adepte du régime végétarien comme Phoebe Buffay, ou un amateur de cuisine simple et réconfortante comme Joey Tribbiani, cet ouvrage pour permettra de revivre les différentes saisons à travers plus de cent recettes inspirées de la célèbre sitcom.</p>

        <p>Des amuses-gueules aux desserts, en passant par les boissons et le petit-déjeuner, chaque chapitre contient des plats iconiques pour cuisiniers de tous les niveaux, tels que le diplomate à la viande de Rachel, les trucs grillés au fromage de Joey, les cookies de la grand-mère de Phoebe, ou encore le café glacé du Central Perk.</p>

        <p>Sublimé par de nombreuses photographies en couleur, <em>Friends : Le livre de cuisine officiel</em> est à la fois un recueil de créations gourmandes et un hommage savoureux à l'unde des séries télévisées les plus emblématiques de tous les temps.</p>
</div>
```

Voilà pour la partie HTML.
RDV sur la page <a href="/Users/anne/Desktop/site-formation/css.html">CSS</a> pour les bases CSS et la mise en forme de notre page FRIENDS.

Voici l'aperçu :

![apercufriends](/assets/images/apercufriends.jpeg)


## Autres bases HTML :

**Faire un tableau** :

Pour faire un tableau, nous allons avoir besoin de plusieurs balises : 

`<table></table>` balise de base pour notre tableau
`<thead></thead>` pour notre première ligne avec les titres
`<th><th>` pour la ligne de titre
`<tbody></tbody>` comme pour le reste de notre site, pour le "corps du tableau", c'est à dire les autres lignes de notre tableau
`<tr><tr>` pour chaque ligne
`<td></td>` pour chaque colonne
`<th><th>` pour la ligne de titre

Voici ce que ça donne pour le tableau suivant : (allé soyons fou, restons dans du Friends)

<table>
    <thead>
        <tr>
        <td>NOM</td>
        <td>PRENOM</td>
        </tr>
    </thead>    
    <tbody>
        <tr>
            <td>GHELLER</td>
            <td>Monica</td>
        </tr>
        <tr>
            <td>GHELLER</td> 
            <td>Ross</td>
        </tr>
        <tr>
            <td>GREEN</td>
            <td>Rachel</td>
        </tr>
        <tr>
            <td>BING</td>
            <td>Chandler</td>
        </tr>
        <tr>
            <td>BUFFEY</td>
            <td>Phoebe</td>
        </tr>
        <tr>
            <td>TRIBBIANI</td>
            <td>Joey</td>
        </tr>
    </tbody>
</table>

Maintenant, je vous montre le code que j'ai fait pour obtenir ce résultat (je vous montrerai la partie mise en forme dans CSS):

```
<table>
    <thead>
        <tr>
        <td>NOM</td>
        <td>PRENOM</td>
        </tr>
    </thead>    
    <tbody>
        <tr>
            <td>GHELLER</td>
            <td>Monica</td>
        </tr>
        <tr>
            <td>GHELLER</td> 
            <td>Ross</td>
        </tr>
        <tr>
            <td>GREEN</td>
            <td>Rachel</td>
        </tr>
        <tr>
            <td>BING</td>
            <td>Chandler</td>
        </tr>
        <tr>
            <td>BUFFEY</td>
            <td>Phoebe</td>
        </tr>
            <td>TRIBBIANI</td>
            <td>Joey</td>
        </tr>
    </tbody>
</table>
```

[Testez-vous avec le Quizz HTML](/quizz/002.html)
