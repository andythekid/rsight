<template>
  <modal name="wallet-modal"
    :adaptive="true">
    <form class="form-horizontal" action="">
      <div class="row">
        <div class="col-md-10">
          <div class="form-group">
            <div class="row">
              <select class="form-control form-control-sm custom-select col-md-5" v-model="coin">
                <option value="Bitcoin">Bitcoin</option>
                <option value="Ethereum">Ethereum</option>
                <option value="EOS">EOS</option>
              </select>
              <input 
                type="text" 
                class="form-control form-control-sm col-md-6 offset-md-1" 
                id="coin-alias" 
                placeholder="Alias"
                v-model="alias">
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
                    v-model="walletType"
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
                    v-model="walletType">
                  Local wallet
                </label>
              </div>
            </div>
          </div>
          <div 
            class="form-group"
            v-show="walletType === 'Address'">
            <div class="row">
              <input 
                type="text" 
                class="form-control form-control-sm col-md-12" 
                id="coin-address"
                v-model="address" 
                placeholder="Address">
            </div>
          </div>
          <div 
            class="form-group"
            v-show="walletType === 'Ballance'">
            <div class="row">
                <input 
                  type="number" 
                  class="form-control form-control-sm col-md-12" 
                  id="coin-balance" 
                  v-model="ballance"
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
                    v-model="group"> 
                    No group
                </label>
              </div>
              <div class="form-check col">
                <label class="form-check-label col-form-label-sm">
                  <input 
                    class="form-check-input form-control-sm" 
                    type="radio" 
                    value="Same"
                    v-model="group"> 
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
                    v-model="group"> 
                    Add to another group
                </label>
              </div>
              <div class="col-7 right-zero">
                <input 
                  class="form-control form-control-sm" 
                  type="text" 
                  name="group-name"
                  v-model="groupName">
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
                v-model="isActive"> 
                Active
            </label>
          </div>
          <button class="btn btn-warning btn-block btn-sm">Save</button>
        </div>
      </div>
    </form>
  </modal>
</template>

<script>
export default {
  data () {
    return {
      coin: '',
      alias: '',
      walletType: 'Address',
      address: '',
      ballance: '',
      group: 'Same',
      groupName: '',
      isActive: true
    }
  },
  methods: {
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



