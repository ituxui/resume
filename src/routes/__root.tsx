import { createRootRoute, Link, Outlet, } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { PageModal } from '@pages';
import Styles from '../app/ui/App.module.scss';


export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Link to="/">Start Over</Link>
      </div>
    )
  },
})

function RootComponent() {
  return (
    <>
      <div className={Styles.wrapper}>
        <Outlet />
        <PageModal.Portal />
      </div>
      <TanStackRouterDevtools />
    </>
  );
}
