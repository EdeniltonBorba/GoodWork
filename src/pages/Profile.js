import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Container, Row, Col } from "../components/Grid/index.js";
import CardProfile from "../components/CardProfile/CardProfile.js";
import CardRegister from "../components/ButtonRegister/CardRegister.js"


function Profile() {
    const [profile, setProfile] = useState("Users")

    let user = []

    if (profile === "Users") {
        user = [
            {
                name: "Edenilton",
                img: "https://i.cbc.ca/1.4058552.1491497095!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/519407452-man-happy-to-be-vacuuming.jpg",
                email: "spongeBob@spongeBob.com",
                fone: "1234566789",
                price: 15.25,
                rating: " ",
                reviews: "I love spongebob and your work is great",
                hireMe: `I'm willing to apply my acquired experience in your home, office or any other space that needs to be cleaned. I'm proactive, punctual and very friendly person! Minimin of 2 hours please!
                `,

            },
            {
                name: "Patrick Star",
                img: "https://i2.wp.com/www.mamanmaid.com/wp-content/uploads/2018/04/maid-service-in-Dubai.jpeg?w=576&ssl=1 576w, https://i2.wp.com/www.mamanmaid.com/wp-content/uploads/2018/04/maid-service-in-Dubai.jpeg?resize=300%2C200&ssl=1 300w, https://i2.wp.com/www.mamanmaid.com/wp-content/uploads/2018/04/maid-service-in-Dubai.jpeg?resize=219%2C146&ssl=1 219w, https://i2.wp.com/www.mamanmaid.com/wp-content/uploads/2018/04/maid-service-in-Dubai.jpeg?resize=50%2C33&ssl=1 50w, https://i2.wp.com/www.mamanmaid.com/wp-content/uploads/2018/04/maid-service-in-Dubai.jpeg?resize=113%2C75&ssl=1 113w",
                email: "spongeBob@spongeBob.com",
                fone: "1234566789",
                price: 17.45,
                rating: " ",
                reviews: "I love spongebob and your work is great",
                hireMe: `I'm willing to apply my acquired experience in your home, office or any other space that needs to be cleaned. I'm proactive, punctual and very friendly person! Minimin of 2 hours please!
                `,
            },
            {
                name: "Mr. Krabs",
                img: "https://apollo-singapore.akamaized.net:443/v1/files/havqywaxrla42-ID/image;s=850x0",
                email: "spongeBob@spongeBob.com",
                fone: "1234566789",
                price: 15.75,
                rating: " ",
                reviews: "I love spongebob and your work is great",
                hireMe: `I'm willing to apply my acquired experience in your home, office or any other space that needs to be cleaned. I'm proactive, punctual and very friendly person! Minimin of 2 hours please!
            `,
            },
            {
                name: "Plankton",
                img: "https://i2.wp.com/www.whystle.co/wp-content/uploads/2019/11/cleaning-lady.jpg?w=509&ssl=1 509w, https://i2.wp.com/www.whystle.co/wp-content/uploads/2019/11/cleaning-lady.jpg?resize=300%2C226&ssl=1 300w",
                email: "spongeBob@spongeBob.com",
                fone: "1234566789",
                price: 16.25,
                rating: " ",
                reviews: "I love spongebob and your work is great",
                hireMe: `I'm willing to apply my acquired experience in your home, office or any other space that needs to be cleaned. I'm proactive, punctual and very friendly person! Minimin of 2 hours please!
            `,
            },
            {
                name: "PSandy",
                img: "https://startupjungle.com/wp-content/uploads/2019/05/Maid-Service-1-ss.jpg",
                email: "spongeBob@spongeBob.com",
                fone: "1234566789",
                price: 14.55,
                rating: " ",
                reviews: "I love spongebob and your work is great",
                hireMe: `I'm willing to apply my acquired experience in your home, office or any other space that needs to be cleaned. I'm proactive, punctual and very friendly person! Minimin of 2 hours please!
        `,
            },
        ]




    }




    return (

        <div>
            <Navbar />
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <CardProfile />

                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <CardRegister />
                    </Col>
                </Row>
            </Container>


        </div>





    )
}

export default Profile;