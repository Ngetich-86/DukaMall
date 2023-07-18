import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Context } from './Context/Context.jsx'
import { ContextProvider } from './Context/useContent/Context.jsx'
import { UIContextProvider } from './Context/applyContext/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UIContextProvider>
    <ContextProvider>
    <Context>
    <App />
    </Context> 
    </ContextProvider>
    </UIContextProvider>
  </React.StrictMode>,
)
