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
            {
                name: "SpongeBob SquarePants",
                img: "https://upload.wikimedia.org/wikipedia/en/3/3b/SpongeBob_SquarePants_character.svg",
                email: "spongeBob@spongeBob.com",
                fone: "1234566789",
                rating: " ",
                reviews: "I love spongebob and your work is great",
                hireMe: `I'm willing to apply my acquired experience in your home, office or any other space that needs to be cleaned. I'm proactive, punctual and very friendly person! Minimin of 2 hours please!
                `,

            },
            {
                name: "Patrick Star",
                img: "https://upload.wikimedia.org/wikipedia/en/3/33/Patrick_Star.svg",
                email: "spongeBob@spongeBob.com",
                fone: "1234566789",
                rating: " ",
                reviews: "I love spongebob and your work is great",
                hireMe: `I'm willing to apply my acquired experience in your home, office or any other space that needs to be cleaned. I'm proactive, punctual and very friendly person! Minimin of 2 hours please!
                `,
            },
            {
                name: "Mr. Krabs",
                img: "https://upload.wikimedia.org/wikipedia/en/f/f8/Mr._Krabs.svg",
                email: "spongeBob@spongeBob.com",
                fone: "1234566789",
                rating: " ",
                reviews: "I love spongebob and your work is great",
                hireMe: `I'm willing to apply my acquired experience in your home, office or any other space that needs to be cleaned. I'm proactive, punctual and very friendly person! Minimin of 2 hours please!
            `,
            },
            {
                name: "Plankton",
                img: "https://upload.wikimedia.org/wikipedia/en/4/49/Plankton_and_Karen.svg",
                email: "spongeBob@spongeBob.com",
                fone: "1234566789",
                rating: " ",
                reviews: "I love spongebob and your work is great",
                hireMe: `I'm willing to apply my acquired experience in your home, office or any other space that needs to be cleaned. I'm proactive, punctual and very friendly person! Minimin of 2 hours please!
            `,
            },
            {
                name: "PSandy",
                img: "https://upload.wikimedia.org/wikipedia/en/a/a0/Sandy_Cheeks.svg",
                email: "spongeBob@spongeBob.com",
                fone: "1234566789",
                rating: " ",
                reviews: "I love spongebob and your work is great",
                hireMe: `I'm willing to apply my acquired experience in your home, office or any other space that needs to be cleaned. I'm proactive, punctual and very friendly person! Minimin of 2 hours please!
        `,
            },
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
