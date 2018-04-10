<template>
  <div class="col-md-12">
    <form class="form-horizontal" action="">
      <div class="row">
        <div class="col-md-10">
          <div class="form-group">
            <div class="row">
              <label>{{ wallet.coin }} :: {{ wallet.alias }}</label>
            </div>
            <div class="row">
              <label v-if="wallet.walletType === 'Address'">Address: {{ wallet.address }}</label>
              <label v-else>Ballance: {{ wallet.ballance }}</label>
            </div>
            <div class="row">
              <label v-if="wallet.group === 'None'">Grouping: none</label>
              <label v-else-if="wallet.group === 'Same'">Grouping: same coins</label>
              <label v-else>Group name: {{ wallet.groupName }}</label>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-check">
            <label class="form-check-label col-form-label-sm">
              <input 
                class="form-check-input form-control-sm" 
                type="checkbox" 
                name="power" 
                onclick="return false;"
                v-model="wallet.isActive"> 
                Active
            </label>
          </div>
          <button type="button" class="btn btn-warning btn-block btn-sm" @click="loadEditForm">Edit</button>
          <button type="button" class="btn btn-danger btn-block btn-sm" @click="deleteWallet">Delete</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    props: ['wallet'],
    methods: {
      loadEditForm () {
        this.$modal.show('wallet-modal', { wallet: this.wallet })
      },
      deleteWallet () {
        let result = confirm("Want to delete?");
        if (result) {
          this.$store.commit('deleteWallet', this.wallet)
        }
      }
    }
  }

</script>
