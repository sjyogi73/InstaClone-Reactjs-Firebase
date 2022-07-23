import React from 'react';
import { Typography, Container } from "@mui/material"
import { useNavigate } from "react-router-dom"


function Home() {
    const navigate = useNavigate();

    return (
        <Container onClick={() => navigate("/login")}>
            <div style={{ display: "flex" }} >
                <img src="https://www.latestworldevents.com/wp-content/uploads/2021/03/How-to-Use-Instagram-1.jpg" alt="Click-to-Go-Login" height={500} style={{ margin: "5.5em  1em" }} />
                <Typography sx={({
                    fontFamily: "cursive",
                    margin: "9em 0em",
                    fontSize: "2em"
                })}>
                    Click to Go ...

                </Typography>
            </div>
        </Container>
    )
}

export default Home