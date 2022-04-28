import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Data Entry',
    url: '/dashboard',
    iconComponent: { name: 'cil-spreadsheet' },
    children: [
      {
        name: 'Receivables',
        url: '/'
      },
      {
        name: 'Assets',
        url: '/'
      },
      {
        name: 'Projects',
        url: '/'
      },
      {
        name: 'Purchasing',
        url: '/'
      },
      {
        name: 'Reconciliation',
        url: '/'
      }
    ]
  },
  {
    name: 'Review Process',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' },
    children: [
      {
        name: 'General Ledger',
        url: '/base/accordion'
      },
      {
        name: 'Payables',
        url: '/base/breadcrumbs'
      },
      {
        name: 'Receivables',
        url: '/base/cards'
      },
      {
        name: 'Assets',
        url: '/base/carousel'
      },
      {
        name: 'Projects',
        url: '/base/collapse'
      },
      {
        name: 'Purchasing',
        url: '/base/list-group'
      },
      {
        name: 'Common',
        url: '/base/navs'
      },
      {
        name: 'Reconcilations',
        url: '/base/pagination'
      },
    ]
  },
  {
    name: 'Reports',
    url: '/base',
    iconComponent: { name: 'cil-calendar' },
    children: [
      {
        name: 'General Ledger',
        url: '/base/accordion',
        children: [
          {
            name: 'Test',
            url: '/'
          }
        ]
      },
      {
        name: 'Payables',
        url: '/base/breadcrumbs'
      },
      {
        name: 'Receivables',
        url: '/base/cards'
      },
      {
        name: 'Assets',
        url: '/base/carousel'
      },
      {
        name: 'Projects',
        url: '/base/collapse'
      },
      {
        name: 'Purchasing',
        url: '/base/list-group'
      },
      {
        name: 'Reconciliations',
        url: '/base/navs'
      },
      {
        name: 'Control',
        url: '/base/pagination'
      }
    ]
  },
  {
    name: 'Inquiries',
    url: '/buttons',
    iconComponent: { name: 'cil-list' },
    children: [
      {
        name: 'General Ledger',
        url: '/buttons/buttons'
      },
      {
        name: 'Payables',
        url: '/buttons/button-groups'
      },
      {
        name: 'Receivables',
        url: '/buttons/dropdowns'
      },
      {
        name: 'Assets',
        url: '/buttons/dropdowns'
      },
      {
        name: 'Projects',
        url: '/buttons/dropdowns'
      },
      {
        name: 'Purchasing',
        url: '/buttons/dropdowns'
      },
      {
        name: 'Common',
        url: '/buttons/dropdowns'
      },
      {
        name: 'Reconciliations',
        url: '/buttons/dropdowns'
      },
      {
        name: 'Control',
        url: '/buttons/dropdowns'
      },
    ]
  },
  {
    name: 'Configuration Rules',
    url: '/forms',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'General Ledger',
        url: '/forms/form-control'
      },
      {
        name: 'Payables',
        url: '/forms/select'
      },
      {
        name: 'Receivables',
        url: '/forms/checks-radios'
      },
      {
        name: 'Assets',
        url: '/forms/range'
      },
      {
        name: 'Projects',
        url: '/forms/input-group'
      },
      {
        name: 'Purchasing',
        url: '/forms/floating-labels'
      },
      {
        name: 'Common',
        url: '/forms/layout'
      },
      {
        name: 'Reconciliations',
        url: '/forms/validation'
      },
      {
        name: 'Control',
        url: '/forms/validation'
      }
    ]
  },
  {
    name: 'Utilities',
    url: '/charts',
    iconComponent: { name: 'cil-settings' },
    children: [
      {
        name: 'General Ledger',
        url: '/forms/form-control'
      },
      {
        name: 'Payables',
        url: '/forms/select'
      },
      {
        name: 'Receivables',
        url: '/forms/checks-radios'
      },
      {
        name: 'Assets',
        url: '/forms/range'
      },
      {
        name: 'Purchasing',
        url: '/forms/floating-labels'
      },
      {
        name: 'Common',
        url: '/forms/layout'
      },
      {
        name: 'Control',
        url: '/forms/validation'
      }
    ]
  },
];
