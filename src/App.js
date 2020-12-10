import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
import axios from 'axios';
import './app.css';

class App extends Component{
  state = {
     response:[],
     loader : false
  }
  selectLang=(name)=>{
    this.setState({loader:true})
   axios.get(`https://hello-nodejs-deploy.herokuapp.com/hello?language=${name.target.value}`)
    .then((response)=>{
      console.log('data',response.data);
      this.setState({response:response.data,loader:false})
    })
  }

  render(){
    if(this.state.loader){
      return(
       <div className="loader">..Loading</div>
      )
    }
    const {response} = this.state;
    return(
      <div className="Hello">
        <Card className="parent" style={{ width: '18rem'}}>
        <Card.Body>
          <Card.Title>Ignite Solutions Test-2 </Card.Title>
              <Card.Text>
                Hello APIs Integration
              </Card.Text>
              <select value={this.state.value} onChange={this.selectLang}>
                <option>Please Select Language</option>
                <option name="english" value="English">English</option>
                <option name="hindi" value="Hindi">Hindi</option>
                <option name="french" value="French">French</option>
              </select>
              <br/>
        </Card.Body>
        </Card>
        {response.message ? <div>
                <Card className="child" style={{ width: '18rem'}}>
                  <Card.Body>
                    <Card.Title>{response.message}</Card.Title>
                    <Card.Text>{response.id}</Card.Text>
                  </Card.Body>
                </Card>
              </div>:null}
      </div>
    )
  }
}

export default App;
