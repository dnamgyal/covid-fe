import React, {Fragment, useState} from 'react'
import {Header, Container, Button} from 'semantic-ui-react'
import {NavLink, Link} from 'react-router-dom'

let Home = () => {

    let [positive, setPositive] = useState()

    return (
        <Fragment>

        <Header as='h1' textAlign='center'>Covid Notifier</Header>
        <Container>

            <NavLink to={`/notify`}>            
                <Button basic fluid color='black'size='massive' content='Notify People' onClick={() => setPositive(true)}/>
            </NavLink>
            <NavLink to={`/educate`}>            
                <Button basic fluid color='black'size='massive' content='Educate Yourself' onClick={() => setPositive(true)}/>
            </NavLink>
            <NavLink to={{ pathname: "https://secure.feedingamerica.org/site/Donation2?28371.donation=form1&df_id=28371&mfc_pref=T&s_onsite_promo=covid_lp&s_src=W20AORGSC&s_referrer=google&s_channel=google&s_subsrc=https%3A%2F%2Fwww.feedingamerica.org%2Ftake-action%2Fcoronavirus&_ga=2.48072487.1044744418.1601819404-1923276689.1601819404" }} target="_blank">            
                <Button basic fluid color='black'size='massive' content='Help End Hunger' onClick={() => setPositive(true)}/>
            </NavLink>
            {/* <Link to={{ pathname: "https://secure.feedingamerica.org/site/Donation2?28371.donation=form1&df_id=28371&mfc_pref=T&s_onsite_promo=covid_lp&s_src=W20AORGSC&s_referrer=google&s_channel=google&s_subsrc=https%3A%2F%2Fwww.feedingamerica.org%2Ftake-action%2Fcoronavirus&_ga=2.48072487.1044744418.1601819404-1923276689.1601819404" }} target="_blank">Donate </Link> */}


        </Container>


        </Fragment>


    )
}

export default Home