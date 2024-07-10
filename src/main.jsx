import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'
import "./App.css";
import Container from "react-bootstrap/Container";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import Items from "./components/Items";
import {items} from "./data";
import { useState } from "react";
import Footer from "./components/Footer";
 
const [itemsData , setItemsData] =useState(items);

const allCategory = ["الكل" , ...new Set(items.map((i)=>i.category))];

const  filterByCategory = (cat)=>{
  if(cat === "الكل"){
    setItemsData(items)
  }else{
  const   newArr = items.filter((item => item.category === cat))
  setItemsData(newArr)
  }
} 

const  filterBySearch = (word)=>{
  if(word != ""){
  const newArr = items.filter((item => item.title === word))
  setItemsData(newArr)
  }
} 

 
ReactDOM.createRoot(document.getElementById('root')).render(
 
  <div className="">
  <NavBar filterBySearch={filterBySearch} />
  <Container>
    <Header />
    <Category filterByCategory={filterByCategory} allCategory={allCategory}/>
    <Items itemsData={itemsData} />
   

  </Container>
  <Footer/>
</div>
 
)





