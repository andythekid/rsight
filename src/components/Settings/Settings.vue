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
        <app-wallet v-for="wallet in wallets" :key="wallet.address" :wallet="wallet"></app-wallet>
      </div>
    </div>
    <wallet-modal/>
  </div>
</template>

<script>
  import Wallet from './Wallet.vue'
  import WalletModal from './WalletModal.vue'
  export default {
    data() {
      return {
        coins: [],
        wallets: [
          { coin: 'Bitcoin', alias: 'Ламба', address: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX', ballance: 1.02,  walletType: 'Address', group: 'Another', groupName: '123', isActive: true},
          { coin: 'Bitcoin', alias: 'Шлюхи', address: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xwX', ballance: 0.37, walletType: 'Ballance', group: 'Same', groupName: '', isActive: false },
          { coin: 'Ethereum', alias: 'Инвестиции', address: '0x32Be343B94f860124dC4fEe278FDCBD38C102D88', ballance: 56.37, walletType: 'Address', group: 'None', groupName: '', isActive: true },
        ],
        wallGroups: [],
        rigs: []
      }
    },
    components: {
      appWallet: Wallet,
      walletModal: WalletModal
    },
    methods: {
      modalShow () {
        this.$modal.show('wallet-modal');
      },
      getLength (obj) {

        return this[obj].length;
      }
    }
  }

</script>

<style>
  .submenu {
    padding: 10px;
  }

</style>
