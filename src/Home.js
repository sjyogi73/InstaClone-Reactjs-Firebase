import React from 'react';
import { Typography, Container } from "@mui/material"
import { Row, Col } from 'react-bootstrap';
import "./Assert/css/Home.css"
import { useNavigate } from "react-router-dom"


function Home() {
    const navigate = useNavigate();

    return (
        <Container onClick={() => navigate("/login")}>

            <Row style={{ display: "flex" }} >
                <Col xs lg={6} md="auto" sm={12} >
                    <img src="https://www.latestworldevents.com/wp-content/uploads/2021/03/How-to-Use-Instagram-1.jpg" alt="Click-to-Go-Login" height={500} style={{ margin: "5.5em  1em" }} id="image" />
                </Col>
                <Col xs lg={6} md="auto" sm={12}>
                    <Typography id="home__Content" sx={({
                        fontFamily: "cursive",
                        margin: "5em 10em",
                        fontSize: "2em"
                    })}>
                        Click to Go

                    </Typography>
                </Col>
            </Row>
        </Container>
    )
}

export default Home