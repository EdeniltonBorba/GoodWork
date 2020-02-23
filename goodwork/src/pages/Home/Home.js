import React from "react";
import Navbar from "../../components/Navbar/index.js";
import CardImage from "../../components/CardImage/index.js";
import CardContainer from "../../components/CardContainer/index.js";
import CardCategory from "../../components/CardCategory/index.js";
import Row from "../../components/Row/index.js";




function Home() {
    return (
        <div>
            <Navbar />

            <CardContainer>
                <Row>
                    <CardCategory />
                </Row>
                <Row>
                    <CardImage />
                </Row>
            </CardContainer>

        </div>
    )
}

export default Home;

