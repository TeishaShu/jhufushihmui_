// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const introduce = {
  id: 'group-introduce',
  title: '',
  type: 'group',
  children: [
    {
      id: 'mission',
      title: '使命',
      type: 'item',
      url: '/mission',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'work',
      title: '工作',
      type: 'item',
      url: '/work',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'art',
      title: '藝術特質與使命',
      type: 'item',
      url: '/art',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'sport',
      title: '運動',
      type: 'item',
      url: '/sport',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'interest',
      title: '興趣',
      type: 'item',
      url: '/interest',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'replenish',
      title: '補充',
      type: 'item',
      url: '/replenish',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
  ]
};

export default introduce;
