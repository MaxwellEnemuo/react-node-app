import React, { Component } from 'react';
import axios from 'axios';
import {Footer} from './components/footer';
import {Header} from './components/header';
import './App.css';

class App extends Component {

    constructor() {
          super();
          
          // this.state = {value: '', items: '', tags: []};
          this.state = {
                        tags: []
                      }

        //adding styles inline
        this.styles = {
            fontFamily: "consolas",
            color: "grey"
          };

  }

  componentDidMount(){
        axios.get('http://localhost:5000/api/users')

        .then(response => {
          console.log(response.data);
          this.setState({ tags: response.data });
        })

        .catch(function (error) {
          console.log(error);
        })
  }

  getInputName(e){
        const name = e.target.value;
        this.setName(name);
    }

  setName(name) {
        this.setState({name});
  }
  
  handleSubmit(e){
      alert(this.refs.name.value +' '+ this.refs.tag.value);
      e.preventDefault();
  }

  render() {

    let tagOptions = this.state.tags.map(tag => <option key={tag.name}> {tag.name} </option>);


    return (
      <div className="App"> 
        <Header setCountry={this.setName.bind(this)} country={this.state.country} />

        <p className="App-intro" style={this.styles}>
          Hello {this.state.name}, you really are from.. ehm.. that country?.
        </p>

        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <label className='m-2'>Name:</label>
              <input type="text" ref="name" required onKeyUp={this.getInputName.bind(this)} />         
            </div>

            <div>
              <label className='m-3'>Users:</label>
                <select ref="tag">
                    <option selected disabled>Select User</option>      
                    {tagOptions}
                </select>        
            </div>

            <input type="submit" className='btn btn-primary btn-md' /> 
        </form> 
 
        <Footer unit={88} />  

      </div>
    );
  }
}

export default App;