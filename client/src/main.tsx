import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './layout.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home.pages.tsx'
import "./index.css"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
        </Routes>
      </BrowserRouter>
    </Layout>
  </React.StrictMode>,
)
