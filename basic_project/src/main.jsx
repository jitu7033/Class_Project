import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './Compontents/Header.jsx'
import './index.css'



const reactProjectRoot = createRoot(document.getElementById('root'));
reactProjectRoot.render(<div>
  <App/>
</div>
)



