import ReactDOM from 'react-dom/client'
import { createRouter, RouterProvider } from '@tanstack/react-router';

import './styles/index.scss';
import '@egjs/react-flicking/dist/flicking.css';
import '@egjs/react-flicking/dist/flicking-inline.css';
import { routeTree } from '@src/routeTree.gen';

// Import the generated route tree

// Create a new router instance
const router = createRouter({
  routeTree,
  scrollRestoration: true,
})

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<RouterProvider router={router} />)
}

