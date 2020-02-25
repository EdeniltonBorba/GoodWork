import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Container, Row, Col } from "../components/Grid/index.js";
import CardProfile from "../components/CardProfile/CardProfile.js";


function Profile() {
    return (

        <div>
            <Navbar />
            <Container fluid>
                <Row>
                    <Col size="md-6 sm-12">
                        <CardProfile />

                    </Col>
                </Row>
            </Container>

        </div>





    )
}

export default Profile;