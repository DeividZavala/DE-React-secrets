import React, {Component} from 'react';
import {getUserById} from '../session-service';


export class MyPrivatePageComponent extends Component{

  state = {
      users: {}
  }

  componentWillMount(){
    getUserById(this.props.match.params._id)
      .then(users=>{
        this.setState({users})
        console.log(users)
      })
      .catch(e=>console.log(e))
    }
  // }

  // onChange = (e) =>{
  //     const field = e.target.name;
  //     const value = e.target.value;
  //     const {newUser} = this.state;
  //     newUser[field] = value;
  //     this.setState({newUser});
  // }

  // sendUser = () => {
  //     signup(this.state.newUser)
  //     .then(user=>{
  //         this.props.history.push('/')
  //     })
  //     .catch(e=>console.log(e))
  // }

  // loginUser = () => {
  //     login(this.state.newUser)
  //     .then(user=>{
  //         this.props.history.push('/');
  //     })
  //     .catch(e=>console.log(e));
  // };



  render(){
    const {username,secret} = this.state.users;

      return(
          <div>
            <h2>My Private Page</h2>
            <h4>Username: {username}</h4>
            <h3>My secret is: </h3>
            <p>Secret:{secret} </p>
          </div>
      );
  }
}

