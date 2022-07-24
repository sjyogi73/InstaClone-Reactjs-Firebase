import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Container, Paper, Typography } from "@mui/material";
//Style

function Reg() {
    return (
        <div >
            <Container >
                <Typography variant="h3" sx={({
                    margin: "0.2em 9.5em",
                    fontFamily: "cursive",
                })}>
                    Registration
                </Typography>
                <Paper  sx={({
                    width: "30em",
                    margin: "1.2em 22em",
                    padding: "2em",
                    boxShadow: 3,
                })}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ margin: "1em 2em" }}>Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ margin: "1em 2em" }}>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ margin: "1em 2em" }}>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ margin: "1em 2em" }}>Retype-password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{ margin: "1em 9em",width:"8em"}}>
                            Submit
                        </Button>
                    </Form>
                </Paper>
            </Container>
        </div>
    )
}

export default Reg



