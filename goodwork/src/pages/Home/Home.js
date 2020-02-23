import React from "react";
import Navbar from "../../components/Navbar/index.js";
import { Container } from "@material-ui/core";
import CardContainer from "../../components/CardContainer/index.js";
import CardImage from "../../components/CardImage/index.js";

function Home() {
    return (
        <div>
            <Navbar />
            <Container>
                <CardContainer />
                <CardImage />


            </Container>
        </div>
    )
}

export default Home;

