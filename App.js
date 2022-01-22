import * as React from 'react';
import './App.css';

import HorizontalList from './HorizontalList';
import axios from 'axios';

  

  export default class App extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount(){
        axios.get('https://assessment-edvora.herokuapp.com/')
        .then(response=>{
            this.setState({posts:response.data});
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        })
    }

  render(){

  return (
    <div className="App">
      <div className='filters'>
       
       <h4>Filters</h4>
     
      <form action ="#">
          <select name='product_name' className='product_name'>
              <option value="Products">Products</option>
              {
                this.state.posts.map((item)=>{
                  return(
                  <option value={item.product_name}>{item.product_name}</option>
                  )
                })
              }
       
          </select>
          <select name='state' className='state'>
              <option value="state">State</option>
              {
                this.state.posts.map((item)=>{
                  return(
                  <option value={item.address.state}>{item.address.state}</option>
                  )
                })
              }
         
          </select>
          <select name='city' className='city'>
              <option value="city">City</option>
              {
                this.state.posts.map((item)=>{
                  return(
                  <option value={item.address.city}>{item.address.city}</option>
                  )
                })
              }
          
          </select>
      </form>
      </div>
      <div className='main'>
        <h1>Edvora</h1>
        <h2>Products</h2>
        <div className='product-lists'>
        <h3>Product Name</h3>
        
        <HorizontalList posts={this.state.posts}/>
        </div>
        
      </div>
    </div>
  );
}
 }

