import React from "react";
import Navbar from "../components/Navbar/Navbar.js";
import { Container } from "../components/Grid/index.js";

import CardThanks from "../components/CardThanks"



function Thanks() {


    return (
        <>
            <Navbar />
            <Container fluid>
                <CardThanks />
            </Container>
        </>
    )
}

export default Thanks;
