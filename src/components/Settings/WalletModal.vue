<template>
  <modal name="wallet-modal"
    @before-open="beforeOpen"
    :adaptive="true">
    <form class="form-horizontal" action="">
      <div class="row">
        <div class="col-md-10">
          <div class="form-group">
            <div class="row">
              <select class="form-control form-control-sm custom-select col-md-5" v-model="wallet.coin">
                <option value="Bitcoin">Bitcoin</option>
                <option value="Ethereum">Ethereum</option>
                <option value="EOS">EOS</option>
              </select>
              <input 
                type="text" 
                class="form-control form-control-sm col-md-6 offset-md-1" 
                id="coin-alias" 
                placeholder="Alias"
                v-model="wallet.alias">
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="form-check col-md-6">
                <label class="form-check-label">
                  <input 
                    class="form-check-input" 
                    type="radio" 
                    id="address" 
                    value="Address" 
                    v-model="wallet.walletType"
                    checked>
                  Blockchain address
                </label>
              </div>
              <div class="form-check col-md-6">
                <label class="form-check-label">
                  <input 
                    class="form-check-input" 
                    type="radio" 
                    id="ballance" 
                    value="Ballance"
                    v-model="wallet.walletType">
                  Local wallet
                </label>
              </div>
            </div>
          </div>
          <div 
            class="form-group"
            v-show="wallet.walletType === 'Address'">
            <div class="row">
              <input 
                type="text" 
                class="form-control form-control-sm col-md-12" 
                id="coin-address"
                v-model="wallet.address" 
                placeholder="Address">
            </div>
          </div>
          <div 
            class="form-group"
            v-show="wallet.walletType === 'Ballance'">
            <div class="row">
                <input 
                  type="number" 
                  class="form-control form-control-sm col-md-12" 
                  id="coin-balance" 
                  v-model="wallet.ballance"
                  placeholder="Ballance">
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="form-check col">
                <label class="form-check-label col-form-label-sm">
                  <input 
                    class="form-check-input form-control-sm" 
                    type="radio" 
                    value="None"
                    v-model="wallet.group"> 
                    No group
                </label>
              </div>
              <div class="form-check col">
                <label class="form-check-label col-form-label-sm">
                  <input 
                    class="form-check-input form-control-sm" 
                    type="radio" 
                    value="Same"
                    v-model="wallet.group"> 
                    Group with same coin
                </label>
              </div>
            </div>
            <div class="row">
              <div class="form-check col-5">
                <label class="form-check-label col-form-label-sm">
                  <input 
                    class="form-check-input form-control-sm" 
                    type="radio" 
                    value="Another"
                    v-model="wallet.group"> 
                    Add to another group
                </label>
              </div>
              <div class="col-7 right-zero">
                <input 
                  class="form-control form-control-sm" 
                  type="text" 
                  name="group-name"
                  v-model="wallet.groupName">
              </div>
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
                v-model="wallet.isActive"> 
                Active
            </label>
          </div>
          <button 
            type="button"
            class="btn btn-warning btn-block btn-sm" 
            @click="save"
            >Save</button>
          <button 
            type="button"
            class="btn btn-warning btn-block btn-sm" 
            @click="cancel"
            >Canсel</button>
        </div>
      </div>
    </form>
  </modal>
</template>

<script>
export default {
  data () {
    return {
      wallet: '',
      ss: ''
    }
  },
  methods: {
    beforeOpen (event) {
      if (event.params.wallet === 'New') {
        this.wallet = {
          coin: '',
          alias: '',
          walletType: 'Address',
          address: '',
          ballance: '',
          group: 'Same',
          groupName: '',
          isActive: true,
        }
      } else {
        this.wallet = Object.assign({}, event.params.wallet)
      }
      this.ss = event.params.wallet
    },
    save () {
      if (this.ss !== 'New') {
        for (var i in this.wallet) this.ss[i] = this.wallet[i]
      }
      this.$modal.hide('wallet-modal')
    },
    cancel () {
      this.$modal.hide('wallet-modal')
    }
  }
}
</script>

<style scoped>
.form-horizontal {
  margin: 30px;
}

.right-zero {
  padding-right: 0;
}
</style>



