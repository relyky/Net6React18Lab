import { FetchData } from "./views/FetchData"
import { Home } from "./views/Home"
import HelloPage from './views/HelloPage/AppForm'
import { Counter } from './views/ReduxCounter/Counter'

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/hello',
    element: <HelloPage />
  }
];

export default AppRoutes;
