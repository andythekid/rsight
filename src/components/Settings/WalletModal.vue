<template>
  <modal name="wallet-modal"
    :adaptive="true">
    <form class="form-horizontal" action="">
      <div class="row">
        <div class="col-md-10">
          <div class="form-group">
            <div class="row">
              <label class="col-md-3 control-label col-form-label-sm" for="coin-name">
                <b>
                  1
                </b>
              </label>
              <label class="col-md-2 offset-md-2 control-label col-form-label-sm" for="coin-alias">Alias</label>
              <div class="col-md-5">
                <input type="text" class="form-control form-control-sm" id="coin-alias" placeholder="Alias" disabled>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <label class="col-md-2 control-label col-form-label-sm" for="coin-address">Address</label>
              <div class="col-md-10">
                <input type="text" class="form-control form-control-sm" id="coin-address" placeholder="Address"
                  disabled>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="form-check col-md-4">
                <label class="form-check-label col-form-label-sm">
                  <input class="form-check-input form-control-sm" type="checkbox" name="localWallet"> Local wallet
                </label>
              </div>
              <label class="col-md-2 offset-md-1 control-label col-form-label-sm" for="coin-balance">Balance</label>
              <div class="col-md-5">
                <input type="number" class="form-control form-control-sm" id="coin-balance" placeholder="Ballance"
                  disabled>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="form-check col-md-7">
                <label class="form-check-label col-form-label-sm">
                  <input class="form-check-input form-control-sm" type="radio" name="group" value="nope" checked> No group
                </label>
                <label class="form-check-label col-form-label-sm">
                  <input class="form-check-input form-control-sm" type="radio" name="group" value="same"> Group with same coin
                </label>
                <label class="form-check-label col-form-label-sm">
                  <input class="form-check-input form-control-sm" type="radio" name="group" value="another"> Add to another group
                </label>
              </div>
              <div class="col-md-5">
                <input class="form-control form-control-sm" type="text" name="group-name" disabled>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-check">
            <label class="form-check-label col-form-label-sm">
              <input class="form-check-input form-control-sm" type="checkbox" name="power" checked> Active
            </label>
          </div>
          <button class="btn btn-warning btn-block btn-sm">Edit</button>
          <button class="btn btn-danger btn-block btn-sm">Delete</button>
        </div>
      </div>
    </form>
  </modal>
</template>

<script>
export default {
  methods: {
  }
}
</script>

<style scoped>
.form-horizontal {
  margin: 30px;
}
</style>



