
const routes = [
  {
    path: '/',
    component: () => import('layouts/CustomLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('pages/Home.vue') },
      {
        path: '/dashboard', meta: { requiresAuth: true },
        component: () => import('../pages/dashboard/Dashboard.vue'),
        name: 'Dashboard'
      },
      {
        path: '/wallet', meta: { requiresAuth: true },
        component: () => import('pages/wallet/Wallet.vue'),
        children: [
          { path: '', name: 'Wallet', component: () => import('../pages/wallet/components/CardMarketContainer.vue') },
          { path: '/wallet/ars/deposit', name: 'Deposit', component: () => import('../pages/wallet/components/Deposit.vue') },
          { path: '/wallet/ars/deposit/list', name: 'DepositsList', component: () => import('../pages/wallet/components/DepositsList.vue') },
          { path: '/wallet/:currencyCode', name: 'Wallets', component: () => import('../pages/wallet/children/WalletContainer.vue') },

        ]
      },

      {
        path: '/market', component: () => import('../pages/market/Market.vue'),
        children: [
          { path: '', name: 'Market', component: () => import('../pages/market/components/MarketsList.vue') },
          {
            path: '/market/trade', meta: { requiresAuth: true }, name: 'Trade', component: () => import('../pages/market/children/MarketContainer.vue'),
            children: [
              { path: '/market/trade/buy', name: 'TradeBuy', component: () => import('../pages/market/children/BuySellCardBuying.vue') },
              { path: '/market/trade/sell', name: 'TradeSell', component: () => import('../pages/market/children/BuySellCardSelling.vue') },

            ]
          },
        ]
      },

      {
        path: '/settings', meta: { requiresAuth: true },
        component: () => import('pages/settings/Settings.vue'),
        children: [
          { path: '', name: 'Settings', component: () => import('../pages/settings/BankAccounts.vue') }
        ]
      },
      {
        path: '/account', meta: { requiresAuth: true },
        component: () => import('pages/account/Account.vue'),
        children: [
          { path: '', name: 'Account', component: () => import('../pages/account/Profile.vue') },
        ]
      },
      {
        path: '/auth',
        component: () => import('../components/Auth/Login.vue'),
        name: 'Login'
      }
      ,
      {
        path: '/support',
        component: () => import('pages/Support.vue'),
        name: 'Support'
      }
      ,
      {
        path: '/cryptos',
        component: () => import('pages/Cryptos.vue'),
        name: 'Cryptos'
      },
    ]
  },







  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
