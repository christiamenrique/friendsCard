import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component{
  state = {
    friends: friends
  }

  removeFriend = (id) => {
    const newFriends = this.state.friends.filter(f => f.id !== id)
    this.setState({friends: newFriends})
  }


  render() {
    return (
    <Wrapper>
      <Title title= {'This is fun'}/>
      {this.state.friends.map((f, index)=> {
        return(
          <FriendCard 
          removeFriend = {this.removeFriend}
          key = {index}
          id = {f.id}
          name={f.name}
          image={f.image}
          occupation={f.occupation}
          location={f.location}/>
        )
        })}
    </Wrapper>
  );
}
}


export default App;