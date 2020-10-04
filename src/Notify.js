import React, {useState} from 'react'
import {Header, Container, Grid, Form, Button, List} from 'semantic-ui-react'

let Notify = () => {
    let [name, setName] = useState('')
    let [number, setNumber] = useState(800888888)
    let [listOfNumbers, setListOfNumbers] = useState([])

    let addContact = (e) => {
        console.log('added')
        e.preventDefault()
        setListOfNumbers([...listOfNumbers, {name: name, number: number}])
        setNumber('')
        setName('')
    }

    let removeContact = (e) => {
        let updatedList = listOfNumbers.filter(contact => {
            return contact.name !== e.target.id
        })
        setListOfNumbers(updatedList)
    }

    let returnListItems = () => {
        let contactsList = []
        listOfNumbers.forEach(contact => {
            contactsList.push(<List.Item key={contact.name}>
                <List.Content floated='right'>
                    <Button id={contact.name} >Remove</Button>
                </List.Content>
            <List.Content>{contact.name} - {contact.number}</List.Content>
            </List.Item>)
        
        })
        return contactsList
    }
    console.log(listOfNumbers)

    return (
        <Container>
            <Header as='h1'>Notify</Header>
            <Grid.Row>
            <Form onSubmit={e=>addContact(e)}>
                <Form.Group>
                    <Form.Input
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={e=> setName(e.target.value)}
                    />
                    <Form.Input
                    placeholder='8882223333'
                    name='number'
                    value={number}
                    onChange={e=> setNumber(e.target.value)}
                    />
                    <Form.Button content='Add Contact' />
            </Form.Group>
            </Form>
            </Grid.Row>
            <Grid.Row>
            <Header as='h1'>Your List</Header>

            </Grid.Row>
            <Grid.Row>
            <List divided verticalAlign='middle'>
               {returnListItems()}
                
            </List>
    </Grid.Row>
    <Grid.Row>
        <Button basic fluid color='black'size='massive' content='Send Notifications'/>
    </Grid.Row>




                
        </Container>
    )
}

export default Notify