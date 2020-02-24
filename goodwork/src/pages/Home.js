import React from "react";
import Navbar from "../components/Navbar/Navbar.js";
import CardImage from "../components/CardImage/CardImage.js";
import CardCategory from "../components/CardCategory/CardCategory.js";
import { Container, Row, Col } from "../../components/Grid/index.js";




function Home() {
    return (
        <div>
            <Navbar />
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <CardCategory />

                    </Col>
                    <Col size="xs-8 sm-9">


                    </Col>
                </Row>
            </Container>



        </div>
    )
}

export default Home;

