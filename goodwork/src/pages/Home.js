import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar.js";
import { Container, Row, Col } from "../components/Grid/index.js";
import CardImage from "../components/CardImage/CardImage.js";
import CardCategory from "../components/CardCategory/CardCategory.js";




function Home() {
    const [category, setCategory] = useState("cleaning")

    let profis = []

    if (category === "Cleaning") {
        profis = [
            { name: "Manolo" },
            { name: "Juan" }
        ]
    }
    if (category === "Handyman") {
        profis = [
            { name: "Marina" },
            { name: "Silard" },
            { name: "Marina" },
            { name: "Silard" },
            { name: "Marina" },
            { name: "Silard" }
        ]
    }



    return (
        <div>
            <Navbar />
            <Container fluid>
                <Row >
                    <Col size="md-3">
                        <CardCategory setCategory={setCategory} category={category} />

                    </Col>
                    <Col size="md-6 sm-12">
                        <CardImage profis={profis} />
                    </Col>
                </Row>
            </Container>



        </div>
    )
}

export default Home;
