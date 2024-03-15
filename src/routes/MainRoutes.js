import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - introduce
const Mission = Loadable(lazy(() => import('pages/mission')));
const Work = Loadable(lazy(() => import('pages/work')));
const Art = Loadable(lazy(() => import('pages/art')));
const Sport = Loadable(lazy(() => import('pages/sport')));
const Interest = Loadable(lazy(() => import('pages/interest')));
const Replenish = Loadable(lazy(() => import('pages/replenish')));

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: '/mission',
      element: <Mission />
    },
    {
      path: '/work',
      element: <Work />
    },
    {
      path: '/art',
      element: <Art />
    },
    {
      path: '/sport',
      element: <Sport />
    },
    {
      path: '/interest',
      element: <Interest />
    },
    {
      path: '/replenish',
      element: <Replenish />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    }
  ]
};

export default MainRoutes;
