import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

//import {Login} from "./Components/001_Login/Login.jsx"
//import {DataBinding} from "./Components/002_DataBindingSmallExample/databindingSmallEx.jsx"
import {DataBinding} from "./Components/003_TwoWayDataBindingSmallEx/DataBinding.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <DataBinding/>

  </StrictMode>
)
