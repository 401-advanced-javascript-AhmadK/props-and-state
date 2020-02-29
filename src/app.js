/* eslint-disable no-unused-vars */
import React from 'react';
import './app.scss';
import Header from './components/Header/header.js';
import Form from './components/Form/form.js';
import Results from './components/Results/results.js';
import Footer from './components/Footer/footer.js';

class App extends React.Component{
  constructor (props){
    super(props);
    this.state = {};
  }
  updateState = data =>{
    let Headers = {'Content-Type': 'application/json'};
    this.setState({Headers, Response:{data}});
  }
  render(){
    return(
      <React.Fragment>
        <Header />
        <Form update={this.updateState}/>
        <Results  response={this.state}/>
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;