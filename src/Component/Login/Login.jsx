import React from 'react';
import img from '../../img/app-feautures.png';
import logo from '../../img/instagram-logo.png';
import fb from '../../img/facebook-logo.png';
import play0 from '../../img/playstore.png';
import play1 from '../../img/appstore.png';
import { Container, Row, Col, Card } from 'react-bootstrap';

import { useNavigate } from "react-router-dom"


//--Styleee//CSS//--//
import "./Login.css";


function Login() {

  const navigate = useNavigate();

  return (
    <div>
      <Container>
        <Row>
          <Col sm={6} >
            <img src={img} className="Side_img" alt="Img" height={"90%"} />
          </Col>
          <Col sm={6}>
            <Card className='card'>
              <img src={logo} alt="Logo" className='logo' height={'55px'} width={"200px"} />
              <form lass="form">
                <div class="mb-3">
                  <input type="email" class="form-control input_1" id="exampleInputEmail1" placeholder='Phone number, username, or email' aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control input_2" placeholder='Password' id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary Button">Log in</button>

                <div class="or">
                  <span>OR</span>
                </div>

                <a className='fb'><img src={fb} alt="Fb" height={'16px'} />Log in with Facebook</a>
                <p className='forget'><a >Forget Password?</a></p>
              </form>
            </Card>


            <Card className='card_1' onClick={() => navigate("/registration")}>
              <p>Don't have an account?<span>Sign up</span> </p>
            </Card>

            <div className="Links">
              <p>Get the app.</p>
              <div>
                <a className='link_img' href='https://play.google.com/store/search?q=instagram&c=apps' ><img src={play0} alt="" width={"150px"} /></a>
                <a className='link_img' href='https://play.google.com/store/search?q=instagram&c=apps' ><img src={play1} alt="" width={"150px"} /></a>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login