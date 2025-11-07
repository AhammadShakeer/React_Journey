import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

//import {Login} from "./Components/001_Login/Login.jsx"
//import {DataBinding} from "./Components/002_DataBindingSmallExample/databindingSmallEx.jsx"
//import {DataBinding} from "./Components/003_TwoWayDataBindingSmallEx/DataBinding.jsx"
//import { DataBinding } from './Components/004_ArraysDataBinding/arayDb';
//import { DataBinding } from './Components/005_ObjectBinding/objectBinding.jsx';
import {FlipkartCard} from './Components/006_cardExample/flipkart.jsx'
import {CardAxios} from './Components/007_cardByAxios/card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <CardAxios/>

  </StrictMode>
)
