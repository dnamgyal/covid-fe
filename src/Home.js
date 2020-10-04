import React, {Fragment, useState} from 'react'
import {Header, Container, Button} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

let Home = () => {

    let [positive, setPositive] = useState()

    return (
        <Fragment>

        <Header as='h1' textAlign='center'>Covid Notifier</Header>
        <Container>
            <Header as='h2' textAlign='center'>
                Have you recently tested positive for Covid-19?
            </Header>
            <NavLink to={`/notify`}>            
                <Button basic fluid color='orange'size='massive' content='Yes' onClick={() => setPositive(true)}/>
            </NavLink>
            <NavLink to={`/educate`}>            
                <Button basic fluid color='orange'size='massive' content='No' onClick={() => setPositive(true)}/>
            </NavLink>
        </Container>


        </Fragment>


    )
}

export default Home