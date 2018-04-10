<template>
  <div>
    <vue-tabs active-tab-color="#212529" 
       active-text-color="white"
       type="pills"
       :start-index="1"
       direction="vertical"
    >
      <v-tab title="Wallets">
        <div class="container">
          <div class="row">
            <input class="form-control col-md-4" placeholder="Search..">
            <button 
            type="button" 
            class="btn btn-primary btn-sm mb-2 col-md-2 offset-md-6" 
            @click="modalWalletShow"
            >Add new</button>
          </div>
        </div>
        <app-wallet v-for="wallet in wallets" :key="wallet.id" :wallet="wallet"></app-wallet>
        <wallet-modal />
      </v-tab>
      <v-tab title="Coins">
        <div class="container">
          <div class="row">
            <input class="form-control col-md-4" placeholder="Search..">
            <button 
            type="button" 
            class="btn btn-primary btn-sm mb-2 col-md-2 offset-md-6" 
            @click="modalCoinShow"
            >Add new</button>
          </div>
        </div>
        <app-coin v-for="coin in coins" :key="coin.id" :coin="coin"></app-coin>
        <coin-modal />
      </v-tab>
  
      <v-tab title="Exchanges">
        Exchanges
      </v-tab>
      <v-tab title="Wallet groups">
        Wallet groups
      </v-tab>
      <v-tab title="Rigs">
        Rigs
      </v-tab>
    </vue-tabs>
  </div>
</template>

<script>
  import Wallet from './Wallet.vue'
  import Coin from './Coin.vue'
  import WalletModal from './WalletModal.vue'
  import CoinModal from './CoinModal.vue'
  import { VueTabs, VTab } from 'vue-nav-tabs'
  import 'vue-nav-tabs/themes/paper.css'
  export default {
    data() {
      return {
      }
    },
    components: {
      appWallet: Wallet,
      appCoin: Coin,
      walletModal: WalletModal,
      coinModal: CoinModal,
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
      }
    },
    methods: {
      modalWalletShow () {
        this.$modal.show('wallet-modal', { wallet: 'New' })
      },
      modalCoinShow () {
        this.$modal.show('coin-modal', { coin: 'New' })
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

</style>
