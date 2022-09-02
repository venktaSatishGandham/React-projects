import React from 'react';
import './App.css';
import axios from "axios";
import Header from "./components/Header";
import Search from './components/Search';
import ImageList from './components/ImageList';

class App extends React.Component{

  state={
    images:[]
  }

  onSearchSubmit=async (searchedText)=>{
    // console.log(searchedText.toUpperCase());
    const response=await axios.get("https://api.unsplash.com/search/photos",{
      params:{query:searchedText},
      headers:{
        Authorization:'Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296'
      }
    })
    this.setState({images:response.data.results})
    
  }
  
  render(){
    return(
      <div className="App ui container">
      <Header className="bg-primary" />
      <Search onSubmited={this.onSearchSubmit} />
      <ImageList images={this.state.images}/>
    </div>

    )
  }
}

export default App;
