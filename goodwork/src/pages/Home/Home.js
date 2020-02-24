import React from "react";
import Navbar from "../../components/Navbar/index.js";
import CardImage from "../../components/CardImage/index.js";
import CardContainer from "../../components/CardContainer/index.js";
import CardCategory from "../../components/CardCategory/index.js";

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

