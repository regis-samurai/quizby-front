import React, { Component } from 'react';
import {Row, Col, Input} from 'react-materialize';

class Login extends Component {
  constructor(props){
    super(props);
    console.log(props)
    this.state={
      email:'',
      password:''
    }
  }
  render() {
    return (
      <div className="login-container">
        <Row>
          <Col s={12}>
            <div className="login full-width">
              <Row>
                <form>
                  <Input s={12} label="Email" />
                  <Input s={12} type="password" label="Password" />
                  <Input s={6} type='checkbox' label='Lembrar-me' className='filled-in' defaultChecked='checked' />
                  <Input s={12} type="submit" className="btn btn-primary btn-full-width full-width" value="Log in" />
                </form>
              </Row>
            </div>
          </Col>
          <center><a href="#" style={{color: '#fff'}}>Esqueceu sua senha?</a></center>
        </Row>
      </div>
    );
  }
}
export default Login;