import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'amfe-flexible/index.js'
import './assets/css/reset.css'
import './util/rem'
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
// console.log(window.performance.timing.domInteractive - window.performace.timing.navigationStart)
