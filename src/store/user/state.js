export default function () {
  return {
    user: {
      id: null,
      profile: {
        name: null,
        email: null,
        username: null,
        picture: null
      },
      accounts: {
        ARS: {
          id: null,
          symbol: '$',

          currencyCode: 'ARS',
          currency: 'Pesos Argentinos',
          saldoActual: null,
        },
        BTC: {
          id: null,
          symbol: 'BTC',

          currencyCode: 'BTC',
          currency: 'Bitcoin',
          saldoActual: null,
        },
        ETH: {
          id: null,
          symbol: 'ETH',

          currencyCode: 'ETH',
          currency: 'Ethereum',
          saldoActual: null,
        }

      },

      bankAccounts: [
        {
          id: null, banco: null, CBU: null, titular: null, moneda: null
        }
      ],

      confirmedDeposits: [
        {
          id: null,
          tipo: "Transferencia",
          monto: 15452.0,
          fecha: "15/05/2020",
          cuenta: { banco: 'Santander', CBU: '655646587415646' }
        },
        {
          id: null,
          tipo: "Transferencia",
          monto: 15518.0,
          fecha: "15/05/2020",
          cuenta: { banco: 'Santander', CBU: '655646587415646' }
        }

      ],

      pendingDeposits: [

        {
          id: null,
          tipo: "Transferencia",
          monto: 15150.0,
          fecha: "15/05/2020",
          cuenta: { banco: 'Santander', CBU: '655646587415646' }
        },
        {
          id: null,
          tipo: "Transferencia",
          monto: 15237.2,
          fecha: "15/05/2020",
          cuenta: { banco: 'Santander', CBU: '655646587415646' }
        },
        {
          id: null,
          tipo: "Transferencia",
          monto: 15262.02,
          fecha: "15/05/2020",
          cuenta: { banco: 'Santander', CBU: '655646587415646' }
        },
        {
          id: null,
          tipo: "Transferencia",
          monto: 15305.0,
          fecha: "15/05/2020",
          cuenta: { banco: 'Santander', CBU: '655646587415646' }
        }

      ],




      orders: [
        {
          market: "BTC",
          trade: "BTC/ARS",
          type: "BUY",
          price: 1150252.24,
          quantity: 4.0,
          total: 87,
          date: "10/05/2020"
        },
        {
          market: "ETH",
          trade: "ETH/ARS",
          type: "SELL",
          price: 1150252.37,
          quantity: 4.3,
          total: 129,
          date: "10/05/2020"
        },
        {
          market: "BTC",
          trade: "BTC/ARS",
          type: "BUY",
          price: 1150252.23,
          quantity: 6.0,
          total: 337,
          date: "10/05/2020"
        },
        {
          market: "BTC",
          trade: "BTC/ARS",
          type: "BUY",
          price: 1150252.67,
          quantity: 4.3,
          total: 413,
          date: "10/05/2020"
        },
        {
          market: "ETH",
          trade: "ETH/ARS",
          type: "SELL",
          price: 1150252.49,
          quantity: 3.9,
          total: 327,
          date: "10/05/2020"
        },
        {
          market: "BTC",
          trade: "BTC/ARS",
          type: "BUY",
          price: 1150252.94,
          quantity: 0.0,
          total: 50,
          date: "12/05/2020"
        },
        {
          market: "ETH",
          trade: "ETH/ARS",
          type: "BUY",
          price: 1150252.98,
          quantity: 0,
          total: 38,
          date: "10/05/2020"
        },
        {
          market: "BTC",
          trade: "BTC/ARS",
          type: "SELL",
          price: 1150252.87,
          quantity: 6.5,
          total: 562,
          date: "10/05/2020"
        },
        {
          market: "BTC",
          trade: "BTC/ARS",
          type: "BUY",
          price: 1150252.51,
          quantity: 4.9,
          total: 326,
          date: "10/05/2020"
        },
        {
          market: "BTC",
          trade: "BTC/ARS",
          type: "BUY",
          price: 1150252.65,
          quantity: 7,
          total: 54,
          date: "15/05/2020"
        }
      ]
    }
  }
}
