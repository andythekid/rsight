<template>
  <div class="col-md-10">
    <form class="form-horizontal" action="">
      <div class="row">
        <div class="col-md-10">
          <div class="form-group">
            <div class="row">
              <label class="col-md-3 control-label col-form-label-sm" for="coin-name">
                <b>
                  Test
                </b>
              </label>
              <label class="col-md-2 offset-md-2 control-label col-form-label-sm" for="coin-alias">Alias</label>
              <div class="col-md-5">
                <input type="text" class="form-control form-control-sm" id="coin-alias" placeholder="Alias" value="Sluts" disabled>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <label class="col-md-2 control-label col-form-label-sm" for="coin-address">Address</label>
              <div class="col-md-10">
                <input type="text" class="form-control form-control-sm" id="coin-address" placeholder="Address" value="123"
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
                <input type="number" class="form-control form-control-sm" id="coin-balance" placeholder="Ballance" value="<%= wallet.ballance / wallet.divider %>"
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
  </div>
</template>

<script>
  export default {

  }

</script>
