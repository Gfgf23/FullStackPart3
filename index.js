require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./modules/person')

const app = express()

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
morgan.token('data', (request, response) => { return JSON.stringify(request.body) })
app.use(morgan('tiny'))
app.use(morgan(':data'))
const persons = "hello"
Person.find({}).then(result =>{
	//persons = result.toJSON()
	const persons = result
	console.log(persons)
})
console.log(persons)


const generateId = () => {
		return Math.floor(Math.random() * 300)
	}
	
const isNameExits = (name) => {
	const check = persons.map(person => person.name).includes(name)
	return check 
	
}
	
app.get('/info', (request, response) => {
  response.send(`Phonebook has info for ${persons.length} people \n
	  ${new Date()}
  `)
})

app.get('/api/persons', (request, response) => {
	Person.find({}).then(persons =>{
		response.json(persons)
	})
})

app.get('/api/persons/:id',(request,response) => {
	const id = Number(request.params.id)
	const person = persons.find(p => p.id === id)
	if(person)
	response.json(person)
	else 
	response.status(404).end()
	
})

app.delete('/api/persons/:id', (request,response) => {
	const id =Number(request.params.id)
	persons = persons.filter(person => person.id !== id)
	response.status(204).end()
	
})

app.post('/api/persons', (request,response) =>{
	
	const body = request.body 

	if(!body.name || !body.number || isNameExits(body.name)){

		return response.status(400).json({error: 'name must be unique'})
	}
	const person = new Person({
		name: body.name,
		number: body.number,
		id: generateId(),
	})
	person.save().then(result =>{
		response.json(person)
		mongoose.connection.close()
	})
	
	
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})