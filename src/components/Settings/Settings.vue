<template>
  <div>
    <vue-tabs active-tab-color="#e74c3c" 
       active-text-color="white"
       type="pills"
       :start-index="1"
       direction="vertical"
    >
      <v-tab title="Wallets">
        <input class="form-control" placeholder="Search..">
        <button type="button" class="btn btn-primary mb-2" @click="modalShow">Add new</button>
        <app-wallet v-for="wallet in wallets" :key="wallet.id" :wallet="wallet"></app-wallet>
        <wallet-modal />
      </v-tab>
      <v-tab title="Coins">
        Coins
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
  import WalletModal from './WalletModal.vue'
  import {VueTabs, VTab} from 'vue-nav-tabs'
  import 'vue-nav-tabs/themes/paper.css'
  export default {
    data() {
      return {
      }
    },
    components: {
      appWallet: Wallet,
      walletModal: WalletModal,
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
      modalShow () {
        this.$modal.show('wallet-modal', { wallet: 'New' })
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
