import React from "react";
import Navbar from "../components/Navbar/Navbar.js";
import { Container, Row, Col } from "../components/Grid/index.js";
import CardImage from "../components/CardImage/CardImage.js";
import CardCategory from "../components/CardCategory/CardCategory.js";




function Home() {
    return (
        <div>
            <Navbar />
            <Container fluid>
                <Row>
                    <Col size="md-3">
                        <CardCategory />

                    </Col>
                    <Col size="md-6 sm-12">
                        <CardImage />
                    </Col>
                </Row>
            </Container>



        </div>
    )
}

export default Home;
