# Setup

npm init -y

npm i express

npm i mongodb cors dotenv uuid multer

---

# Mongo Shell Einführung

**Zeige mir alle Datenbanken an**
show dbs
**Zeige mir alle Collections der ausgewählten Datenbank an**
show collections
**Wähle eine Datenbank aus**
use <datenbankname>

Wir können jeden Datenbanknamen eingeben, auch wenn es diese noch gar nicht gibt.
Die Datenbank wird beim erzeugen eines Dokumentes automatisch erstellt

**Einfügen eine einzelnen Dokuments**
` db.<collectioname>.insertOne({name:'christian,....})``
**Einfügen n Dokumente**
 `db.<collectioname>.insertMany([{name:'christian,....},{name:'andre'}])``

**Abrufen der Dokumente aus einer Collection**
`db.<collectionname>.find()`

**Abrufen des ersten Dokumentes aus einer Collection**
`db.<collectionname>.findOne()`

**Updaten eines Dokumetes aus eine Collection**
`db.<collectionname>.updateOne{{name:'christian'},{$set:{name:'Thomas}}}`
**Updaten n Dokumete aus eine Collection**
`db.<collectionname>.updateMany{{name:'christian'},{$set:{name:'Thomas}}}`

**Löschen des ersten Dokumentes aus einer Collection**
`db.<colelctionname>.deleteOne({name:'Thomas})`
**Löschen n Dokumente aus einer Collection**
`db.<colelctionname>.deleteMany({name:'Thomas})`

## Das Projectionobject

`db.<collectionname>.find({queryobject},{projectionobject})`
`db.<collectionname>.find({queryobject},{})`

## Query, das mächtige Mongo Tool

Die basic operatoren
**Wie verwendet man einen Query operator**
`{field;{$operator:<vaulue>}}`

**Beispiel greaterthen**
`db.<collectionname>.find({feldname:{$gt:<value>}})`

[Schaut euch diese Operatoren an](https://www.mongodb.com/docs/manual/reference/operator/query/#query-selectors)
