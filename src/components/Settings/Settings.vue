<template>
  <div>
    <div class="row">
      <div class="submenu col-sm-2">
        <input class="form-control" placeholder="Search..">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">Coins
            <span class="badge badge-primary">{{ getLength("coins") }}</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">Wallets
            <span class="badge badge-primary">{{ getLength("wallets") }}</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">Wallet groups
            <span class="badge badge-primary">{{ getLength("wallGroups") }}</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">Rigs
            <span class="badge badge-primary">{{ getLength("rigs") }}</span>
          </a>
        </div>
      </div>
      <div class="col-sm-10">
        <form class="form-inline submenu">
          <div class="form-group mx-sm-3 mb-2">
            <select class="custom-select">
              <option selected>Wallet</option>
              <option value="1">Coin</option>
              <option value="2">Rig</option>
            </select>
          </div>
          <button type="button" class="btn btn-primary mb-2" @click="modalShow">Add new</button>
        </form>
        <app-wallet v-for="wallet in wallets" :key="wallet.id" :wallet="wallet"></app-wallet>
      </div>
    </div>
    <wallet-modal />
  </div>
</template>

<script>
  import Wallet from './Wallet.vue'
  import WalletModal from './WalletModal.vue'
  export default {
    data() {
      return {
        coins: [],
        wallGroups: [],
        rigs: [],
        wallet: []
      }
    },
    components: {
      appWallet: Wallet,
      walletModal: WalletModal
    },
    computed: {
      wallets() {
        return this.$store.state.wallets
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
