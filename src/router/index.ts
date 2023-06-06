import * as React from 'react'
import type { RouteObject } from 'react-router'

const routes: RouteObject[] = [
  {
    path: '/login',
    handle: 'Matsers',
    Component: React.lazy(() => import('@/pages/login/index')),
    // handle: 'login',
  },
  {
    path: "/404",
    Component: React.lazy(() => import('@/pages/404/index')),
    // handle: '404',
    // hidden: true
  },
  {
    Component: React.lazy(() => import('@/layouts/index')),
    handle: {
      title: 'Home',
      href: '/'
    },
    children: [
      {
        path: '/',
        Component: React.lazy(() => import('@/pages/index/index')),
        // handle: 'index',
      },
      {
        path: '/orders/approval',
        Component: React.lazy(() => import('@/pages/orders/approval/index')),
        // handle: 'Orders',
      },
      {
        path: '/orders/history',
        Component: React.lazy(() => import('@/pages/orders/history/index')),
        // handle: 'OrdersDetail',
      },
      {
        path: '/masters',
        handle: {
          title: 'Masters'
        },
        children: [
          {
            path: 'master-list',
            handle: {
              title: 'Matser List',
            },
            children: [
              {
                path: 'products',
                handle: {
                  title: 'Products',
                },
                Component: React.lazy(() => import('@/pages/masters/master-list/products/index'))
              },
              {
                path: 'product-wise-toll-center',
                handle: {
                  title: 'Product Wise Toll Center',
                },
                Component: React.lazy(() => import('@/pages/masters/master-list/product-wise-toll-center/index'))
              },
              {
                path: 'nid',
                handle: {
                  title: 'NID',
                },
                Component: React.lazy(() => import('@/pages/masters/master-list/nid/index'))
              }

            ]
          },
        ],
      },
    ]
  },

  {
    path: "*",
    Component: React.lazy(() => import('@/pages/404/index')),
    // handle: '404',
    // hidden: true
  },
]

export {
  routes,
}