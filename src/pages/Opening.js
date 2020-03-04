import React from "react";
import NavOpening from "../components/Navbar/NavOpening.js";
import { Container, Row, Col } from "../components/Grid/index.js";
import CardOpening from "../components/CardOpening"


function Opening() {





    return (
        <div>
            <NavOpening />
            <Container fluid>
                <CardOpening />
            </Container>



        </div>
    )
}

export default Opening;
