<template>
  <div>
    <vue-tabs active-tab-color="#212529" 
       active-text-color="white"
       type="pills"
       :start-index="1"
       direction="vertical"
    >
      <v-tab title="General">

      </v-tab>
      <v-tab title="Wallets">
        <div class="container bottom-search">
          <div class="row">
            <input class="form-control col-md-4 form-control-sm" placeholder="Search.." v-model="searchQuery" autofocus>
            <button 
            type="button" 
            class="btn btn-primary btn-sm mb-2 col-md-2 offset-md-6" 
            @click="modalWalletShow"
            >Add new</button>
          </div>
        </div>
        <app-wallet v-for="wallet in filteredWallets" :key="wallet.id" :wallet="wallet"></app-wallet>
        <wallet-modal />
      </v-tab>
      <v-tab title="Wallet groups">
        <div class="container bottom-search">
          <div class="row">
            <input class="form-control col-md-4 form-control-sm" placeholder="Search.." v-model="searchQuery" autofocus>
            <button 
            type="button" 
            class="btn btn-primary btn-sm mb-2 col-md-2 offset-md-6" 
            @click="modalWallGroupShow"
            >Add new</button>
          </div>
        </div>
        <app-wall-group v-for="wallGroup in filteredWallGroups" :key="wallGroup.id" :wallGroup="wallGroup"></app-wall-group>
        <wall-group-modal />
      </v-tab>
      <v-tab title="Coins">
        <div class="container bottom-search">
          <div class="row">
            <input class="form-control col-md-4 form-control-sm" placeholder="Search.." v-model="searchQuery" autofocus>
            <button 
            type="button" 
            class="btn btn-primary btn-sm mb-2 col-md-2 offset-md-6" 
            @click="modalCoinShow"
            >Add new</button>
          </div>
        </div>
        <app-coin v-for="coin in filteredCoins" :key="coin.id" :coin="coin"></app-coin>
        <coin-modal />
      </v-tab>
      <v-tab title="Exchanges">
        <div class="container bottom-search">
          <div class="row">
            <input class="form-control col-md-4 form-control-sm" placeholder="Search.." v-model="searchQuery" autofocus>
            <button 
            type="button" 
            class="btn btn-primary btn-sm mb-2 col-md-2 offset-md-6" 
            @click="modalExchangeShow"
            >Add new</button>
          </div>
        </div>
        <app-exchange v-for="exchange in filteredExchanges" :key="exchange.id" :exchange="exchange"></app-exchange>
        <exchange-modal />
      </v-tab>
      <v-tab title="Rigs">
        <div class="container bottom-search">
          <div class="row">
            <input class="form-control col-md-4 form-control-sm" placeholder="Search.." v-model="searchQuery" autofocus>
            <button 
            type="button" 
            class="btn btn-primary btn-sm mb-2 col-md-2 offset-md-6" 
            @click="modalRigShow"
            >Add new</button>
          </div>
        </div>
        <app-rig v-for="rig in filteredRigs" :key="rig.id" :rig="rig"></app-rig>
        <rig-modal />
      </v-tab>
    </vue-tabs>
  </div>
</template>

<script>
  import Wallet from './Wallet.vue'
  import WallGroup from './WallGroup.vue'
  import Coin from './Coin.vue'
  import Rig from './Rig.vue'
  import Exchange from './Exchange.vue'
  import WalletModal from './WalletModal.vue'
  import WallGroupModal from './WallGroupModal.vue'
  import CoinModal from './CoinModal.vue'
  import RigModal from './RigModal.vue'
  import ExchangeModal from './ExchangeModal.vue'
  import { VueTabs, VTab } from 'vue-nav-tabs'
  import 'vue-nav-tabs/themes/paper.css'
  export default {
    data() {
      return {
        searchQuery: '',
      }
    },
    components: {
      appWallet: Wallet,
      appWallGroup: WallGroup,
      appCoin: Coin,
      appRig: Rig,
      appExchange: Exchange,
      walletModal: WalletModal,
      wallGroupModal: WallGroupModal,
      coinModal: CoinModal,
      rigModal: RigModal,
      exchangeModal: ExchangeModal,
      VueTabs,
      VTab
    },
    computed: {
      wallets() {
        return this.$store.state.wallets
      },
      coins() {
        return this.$store.state.coins
      },
      wallGroups() {
        return this.$store.state.wallGroups
      },
      rigs() {
        return this.$store.state.rigs
      },
      exchanges() {
        return this.$store.state.exchanges
      },
      filteredWallets: function () {
          let self = this
          let searchRegex = new RegExp(self.searchQuery, 'i')
          return self.wallets.filter(function (wallet) {
            return searchRegex.test(wallet.alias) ||
                   searchRegex.test(wallet.coin) ||
                   searchRegex.test(wallet.address)
        })
      },
      filteredCoins: function () {
          let self = this
          let searchRegex = new RegExp(self.searchQuery, 'i')
          return self.coins.filter(function (coin) {
            return searchRegex.test(coin.token) ||
                   searchRegex.test(coin.coin) ||
                   searchRegex.test(coin.api)
        })
      },
      filteredWallGroups: function () {
          let self = this
          let searchRegex = new RegExp(self.searchQuery, 'i')
          return self.wallGroups.filter(function (wallGroup) {
            return searchRegex.test(wallGroup.name)
        })
      },
      filteredRigs: function () {
          let self = this
          let searchRegex = new RegExp(self.searchQuery, 'i')
          return self.rigs.filter(function (rig) {
            return searchRegex.test(rig.alias) ||
                   searchRegex.test(rig.pool) ||
                   searchRegex.test(rig.wallet)
        })
      },
      filteredExchanges: function () {
          let self = this
          let searchRegex = new RegExp(self.searchQuery, 'i')
          return self.exchanges.filter(function (exchange) {
            return searchRegex.test(exchange.name) ||
                   searchRegex.test(exchange.coin) ||
                   searchRegex.test(exchange.api)
        })
      }
    },
    methods: {
      modalWalletShow () {
        this.$modal.show('wallet-modal', { wallet: 'New' })
      },
      modalCoinShow () {
        this.$modal.show('coin-modal', { coin: 'New' })
      },
      modalRigShow () {
        this.$modal.show('rig-modal', { rig: 'New' })
      },
      modalWallGroupShow () {
        this.$modal.show('wall-group-modal', { wallGroup: 'New' })
      },
      modalExchangeShow () {
        this.$modal.show('exchange-modal', { exchange: 'New' })
      },
      getLength (obj) {
        return this[obj].length
      }
    }
  }

</script>

<style>
  .submenu {
    padding: 10px;
  }
  .bottom-search {
    margin: 0;
  }
</style>
