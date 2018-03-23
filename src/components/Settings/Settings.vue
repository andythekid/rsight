<template>
  <div>
    <div class="row">
      <div class="submenu col-sm-2">
        <input class="form-control" placeholder="Search..">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">Coins
            <span class="badge badge-primary">2</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">Wallets
            <span class="badge badge-primary">4</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">Rigs
            <span class="badge badge-primary">3</span>
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
          <button type="button" class="btn btn-primary mb-2">Add new</button>
        </form>
        <app-wallet></app-wallet>
      </div>
    </div>
  </div>
</template>

<script>
  import Wallet from './Wallet.vue'
  export default {
    components: {
      appWallet: Wallet
    }
  }

</script>

<style>
  .submenu {
    padding: 10px;
  }

</style>
