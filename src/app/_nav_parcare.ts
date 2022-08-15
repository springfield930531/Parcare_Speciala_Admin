import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/parcare-dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'Parcare'
    }
  },
  {
    title: true,
    name: 'Redactare Entitati'
  },
  
  {
    name: 'Tipuri de Transport',
    url: '/tip-transport',
    icon: 'icon-pencil'
  },
  {
    name: 'Locații',
    url: '/loc',
    icon: 'icon-pencil'
  },
  {
    name: 'Prețuri de îmbarcare, transportare și debarcare',
    url: '/preturi',
    icon: 'icon-pencil'
  },
  {
    name: 'Prețuri de depozitare',
    url: '/preturi-depozitare',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Utilizatori'
  },
  {
    name: 'Redactare Utilizatori',
    url: '/utilizatori',
    icon: 'icon-pencil'
  }
];
