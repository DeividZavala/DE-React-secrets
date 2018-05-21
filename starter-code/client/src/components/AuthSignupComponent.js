import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {signup} from '../session-service'
import {MyPrivatePageComponent} from '../components/MyPrivatePageComponent'

export class AuthSignupComponent extends Component{

  state = {
      newUser:{}
  }

  // componentWillMount(){
  //     if(localStorage.getItem('user')){
  //         // const user = JSON.parse(localStorage.getItem('user'));
  //         // if(user.role !== "ADMIN")
  //             this.props.history.push('/');
  //     }
  // }

  onChange = (e) =>{
      const field = e.target.name;
      const value = e.target.value;
      const {newUser} = this.state;
      newUser[field] = value;
      console.log(newUser)
      this.setState({newUser});
  }

  sendUser = () => {
      signup(this.state.newUser)
      .then(user=>{
          this.props.history.push('/private',user)
          //console.log(user)
      })
      .catch(e=>console.log(e))
  }

  // loginUser = () => {
  //     login(this.state.newUser)
  //     .then(user=>{
  //         this.props.history.push('/');
  //     })
  //     .catch(e=>console.log(e));
  // };



  render(){
      return(
          <div>
            <h3>Sign Up</h3>
              <input onChange={this.onChange} name="username" placeholder="Username" type="text"/>
              <input onChange={this.onChange} name="secret" placeholder="Your Secret" type="password"/>
              <input onChange={this.onChange} name="password" placeholder="Password" type="password"/>
              <input onChange={this.onChange} name="email" placeholder="Email" type="text"/>
              <button onClick={this.sendUser} >Send</button>
        <br/>
        <br/>

        <Link to="/">
          
          <button>Back Home</button>
          
        </Link>
        <br/>
        <br/><br/>
          </div>
      );
  }
}
