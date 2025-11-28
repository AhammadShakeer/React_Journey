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
// import {FlipkartCard} from './Components/006_cardExample/flipkart.jsx'
// import {CardAxios} from './Components/007_cardByAxios/card.jsx'
// import { ImageSelection } from './Components/008_EventHAndler/ImageSelection.jsx';
//import { PasswordStrength } from './Components/009_keyboardEvents/PasswordStrnegth.jsx';
// import { FocusDemo } from './Components/010_ElementStateEvents/focus_demo.jsx';
// import { CarouselDemo } from './Components/011_CarouselDemo/CarouselDemo.jsx';
import { FormDemo } from './Components/012_formikExample/formikdemo.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <FormDemo/>

  </StrictMode>
)
