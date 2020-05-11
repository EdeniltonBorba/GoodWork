import React from "react";
import AppBar from "../components/AppBar/AppBar.js";
import { Container } from "../components/Grid/index.js";

import CardThanks from "../components/CardThanks"



function Thanks() {


    return (
        <>
            <AppBar />
            <Container fluid>
                <CardThanks />
            </Container>
        </>
    )
}

export default Thanks;
