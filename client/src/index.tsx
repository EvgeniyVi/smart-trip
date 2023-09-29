import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import 'antd/dist/antd.min.css'
import reportWebVitals from './reportWebVitals'
import { store } from './redux/store'
import LanguageProvider from './providers/LanguageProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

// @ts-ignore
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
