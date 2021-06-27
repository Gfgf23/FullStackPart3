const mongoose = require('mongoose')
if(process.argv.length < 3){
	console.log('You should enter at least three arguments')
	process.exit(1)
}
const password = process.argv[2]

const url =`mongodb+srv://fullstack:${password}@cluster0.xntns.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const phoneSchema = new mongoose.Schema({
	name: String,
	number: String
})

const Person = new mongoose.model('Person',phoneSchema)

if(process.argv.length === 3){
	Person.find({}).then(result => {
		result.forEach(person => {
			console.log(person)
		})
		mongoose.connection.close()
	})
	
}
else {
const name = process.argv[3]
const number = process.argv[4]

const person = new Person({
	name:name,
	number:number
})

person.save().then(result =>{
	console.log(`${name} has been added to the system`)
	mongoose.connection.close()
})
}