import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Layout from './routes/Layout';
import NotFound from './routes/NotFound';
import PostDetails from './components/PostDetails';
import PostChange from './components/PostChange';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index={true} element={<App />} />
            <Route index={false} path="/details/:id" element={<PostDetails />} />
            <Route index={false} path="/update/:id" element={<PostChange />} />
            <Route index={false} path="/update/" element={<PostChange />} />
            <Route path="*" element={ <NotFound /> }/>
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
