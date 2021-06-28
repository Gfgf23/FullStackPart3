require('dotenv').config()
const mongoose = require('mongoose')
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
	
const errorHandler = (error, request, response, next) => {
    console.error(error.message)
   
  if (error.name === 'CastError') {
	  console.log('CastError')
    return response.status(400).send({ error: 'malformatted id' })
  } else if(error.name ==='ValidationError'){
	  console.log('ValidationError')
	  return response.status(400).json({ error: error.message })
  }

  next(error)
}


Person.find({}).then(result =>{
	//persons = result.toJSON()
	const persons = result
	console.log(persons)
})



const generateId = () => {
		return Math.floor(Math.random() * 300)
	}
	
const isNameExits = (name,persons) => {
	return persons.map(person => person.name).includes(name)
	
	
	
}
	

app.get('/info', (request, response) => {
    Person.find({}).then(persons => {
		response.send(`Phonebook has info for ${persons.length} people \n
	  ${new Date()}`)
	})
})

app.get('/api/persons', (request, response) => {
	Person.find({}).then(persons =>{
		response.json(persons)
	})
})

app.get('/api/persons/:id',(request,response) => {
	const id = request.params.id
	Person.findById(id).then(person =>{
		if(person)
			response.json(person)
		else
			response.status(404).end()
	})
	
	
})

app.delete('/api/persons/:id', (request,response,next) => {
	const id =request.params.id
	Person.findByIdAndRemove(id).then(result =>{
		console.log("Entered delete")
		response.status(204).end()
		
		
	})
	.catch(error => next(error))
	
	
})

app.post('/api/persons', (request,response,next) =>{
	
	const body = request.body 
	
	const person = new Person({
		name: body.name,
		number: body.number,
		id: generateId(),
	})
	person.save().then(result =>{
		console.log("Entered post")
		response.json(person)
		//mongoose.connection.close()
	})
	.catch(error => {
	
		next(error)
		
		})
	
	
	
})

app.put('/api/persons/:id', (request,response,next) => {
	const id =request.params.id
	
	const body = request.body 
	
	const person = {
		name:body.name,
		number:body.number
	}
	Person.findByIdAndUpdate(id,person,{new:true}).then(result =>{
		response.json(result)
	
		
	})
	.catch(error =>{
		next(error)
	})
	
	
})

app.use(errorHandler)	
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})