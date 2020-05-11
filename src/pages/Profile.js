import React from 'react';
import AppBar from "../components/AppBar/AppBar.js";
import { Container, Row, Col } from "../components/Grid/index.js";
import CardProfile from "../components/CardProfile/CardProfile.js";
import CardRegister from "../components/ButtonRegister/CardRegister.js"


function Profile() {


    return (

        <div>
            <AppBar />
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <CardProfile />

                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <CardRegister />
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Profile;