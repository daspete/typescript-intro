# typescript into

Jahrelang wurde JavaScript als einfache Scriptsprache verwendet, die einfach im Browser bestimmte Interaktionen ermöglichen sollte. Das hat auch lange Zeit gut funktioniert, da die Menge an Code relativ überschaubar war. Mit der Zeit hat man in der Webentwicklung jedoch gemerkt, dass man viel mehr mit JavaScript machen kann, als einfache Events auszulösen. Man hat entdeckt, dass man JavaScript auch auf dem Server laufen lassen kann, und dass das ganz gut funktioniert. Deswegen wurde Node.js kreiert. Nun kann man sich jedoch vorstellen, dass die Menge an Code im Backend sehr schnell anwachsen kann. Und je mehr Menschen an einem Projekt arbeiten, umso mehr Abstimmungsarbeit muss man machen, damit auch jedem klar ist, was welcher Bereich des Projektes macht, oder mit welchen Variablentypen man arbeiten muss, damit ein Endpunkt funktioniert. Damit das dann nicht ausartet in einer Stunde coden und 5 Stunden Recherche, welche Datentypen man nun mitschicken muss, ist man auf die Idee gekommen, JavaScript um Types zu erweitern. 

So wurde also TypeScript ins Leben gerufen. Wenn nun die Developer eine IDE haben, die TypeScript lesen kann, hat jeder einzelne sofort im Blickfeld, welche Types in einer Funktion (oder Klasse) gebraucht werden, man kann nicht mehr aus einem vordefinierten Schema ausbrechen und man erleichtert somit das Leben des ganzen Developer Teams, da viel weniger Abstimmung passieren muss, und man auch nicht auf die Suche gehen muss nach den richtigen Variablenwerten.

Wir werden heute nur die Grundlagen kurz überfliegen, ein paar Beispiele ansehen und auch selbst erstellen. 

## Installation

Um typescript auf dem Rechner zu haben, benötigt man zuallererst das npm package "typescript". Das kann man global installieren mit:

``` npm install -g typescript ```

Wenn man das gemacht hat, kann man ein neues Projekt anlegen, indem man einen neuen Folder erstellt, z.B. mit dem Namen "typescript-intro" und danach ein neues Projekt starten mit ``` yarn init ```

Um in Typescript alle node.js spezifischen Typdefinitionen zu haben, muss man noch die node types installieren, und um eine einfache Development Umgebung (mit hot reload, etc.) zu haben, kann man sich auch "nodemon" installieren:

``` yarn add typescript nodemon @types/node ```

Hat man das gemacht, kann man in diesem Folder dann eine neue Typescript Konfigurationsdatei erstellen lassen, mit dem Befehl

``` tsc --init ```

Danach kann man auch gleich das dev Script in der Package.json anlegen, das einfach nodemon startet. Das heißt, die package.json sollte danach so aussehen

```json
{
  "name": "typescript-intro",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "nodemon"
  },
  "devDependencies": {
    "@types/node": "^18.0.0",
    "nodemon": "^2.0.16",
    "typescript": "^4.7.3"
  }
}
```

## Erstes Typescript File

Nun können wir unser erstes Typescript File schreiben, also erstellen wir eine "index.ts" Datei in unserem Projektfolder.

in dieses File schreiben wir einfach nur mal 

```js
console.log('hello typescript')
```

Nun können wir das Script einfach starten, indem wir eingeben

``` yarn dev index.ts ```

## Typescript Types

Wie funktionieren nun diese Types?

Wenn man in JavaScript ein Objekt definiert, macht man das in der Regel so:

```js
const person = {
    name: 'Bob',
    age: 25
}
```

Dieses Objekt könnte z.B. als Response einer API zurückkommen. Nun weiß ein Developer halt nicht, dass dieses Objekt das Feld "name" oder "age" hat, und er weiß auch nicht, dass "name" vom Typ String sein soll, oder "age" vom Typ Number.

Das heißt, es könnten Verständnisfehler passieren, indem ein Developer dann z.B. sowas macht:

```js
person.age = "25"
```

oder er könnte ganz andere Felder einschleußen in das Objekt:

```js
person.email = "bob@email.com"
```

Um diesen Problemen vorzubeugen, kann man einen Typ definieren, der ganz genau beschreibt, was nun in so einem "person" Objekt sein kann.

```ts
type Person {
    name: String
    age: Number
    email?: String
}
```

Somit ist ganz klar definiert, dass eine Person einen Namen als String haben muss, ein Age als Number, und dass eine Person eine E-Mail Adresse haben kann, aber nicht muss.

will man nun eine neue Person erstellen, kann man das ganz einfach machen, indem man dem Objekt sagt, welcher Typ es nun ist:

```ts
const person: Person = {
    name: 'Bob',
    age: 30
}

const otherperson: Person = {
    name: 'Bob',
    age: 30,
    email: 'bob@email.com'
}
```

Nun ist es nicht mehr möglich, das "age" Feld mit einem String zu belegen. Wenn man das versucht, schreit sofort der Interpreter von Typescript.

### Aufgabe

Erstellt einen Typ mit dem Namen "DatabaseConfig". In diesem Typ soll definiert sein:

- host
- port
- dbName
- auth (kann optional sein)
  - username
  - password

Erstellt danach ein neues "databaseConfig" Objekt von diesem Typ.

Das ist auch schon die ganze "Magic" der simplen Types.


## Mehrdeutige Types

Manchmal kann es vorkommen, dass es bei einem Objekt nicht ganz klar ist, welchen Typ es nun hat. Zum Beispiel, wenn man einen Typ hat mit dem Namen "Post" und einen Typ hat mit dem Namen "Article" und das mit einer Funktion abhandeln will.

So kann man einem Objekt auch mehrere Typen zuweisen.

```ts

type Post = {
    postName: string
    title: string
    content: string
}

type Article = {
    articleName: string
    title: string
    content: string
    tag: string[]
}

const currentContent: Post|Article = {
    articleName: 'test',
    title: 'test',
    content: 'test',
    tag: ['test']
}

const anotherContent: Post|Article = {
    postName: 'test',
    title: 'test',
    content: 'test'
}

const collections: (Post|Article)[] = [
    {
        postName: 'post1',
        title: 'post1',
        content: 'post1'
    },
    {
        articleName: 'article1',
        title: 'article1',
        content: 'article1',
        tag: ['tag1', 'tag2']
    },
    currentContent,
    anotherContent
]

const getCollectionContents = (_collections: (Post|Article)[]) => {
    const contents: string[] = []

    _collections.forEach(collection => {
        contents.push(collection.content)
    })

    return contents
}

console.log(getCollectionContents(collections))
```

### Aufgabe

Erstellt zwei Types mit dem Namen "PostType" und "Pagecomponent". Diese Zwei Types haben folgende Felder:

PostType

- id
- title
- createdBy
  - id
  - name
- pagecomponents[]


Pagecomponent

- id
- createdBy
  - id
  - name

Erstellt nun ein Array aus mehreren PostTypes und Pagecomponents

Und dann erstellt eine Funktion, die aus allen Items des Arrays den "createdBy" User extrahiert und zurückgibt.

## Generische Klassen
