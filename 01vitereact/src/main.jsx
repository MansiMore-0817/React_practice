import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



// in basic react, the js file is not rendered in the html file
// we need to use a library called vite to render the js file in the html file
// vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.
// it consists of two major parts:
// a development server that provides rich feature enhancements over native es modules, for example fast hot module replacement (HMR)
// a build command that bundles your code with esbuild, pre-configured to output optimized static assets for production.