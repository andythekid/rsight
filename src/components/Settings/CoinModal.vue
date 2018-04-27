<template>
  <modal name="coin-modal"
    @before-open="beforeOpen"
    :adaptive="true">
    <form class="form-horizontal" action="">
      <div class="row">
        <div class="col-md-10">
          <div class="form-group">
            <div class="row">
              <input 
                type="text" 
                class="form-control form-control-sm col-md-9" 
                id="coin-alias" 
                placeholder="Coin (token) name"
                v-model="coin.coin">
              <input 
                type="text" 
                class="form-control form-control-sm col-md-3" 
                id="coin-alias" 
                placeholder="Token"
                v-model="coin.token">
            </div>
            <div class="row">
              <input 
                type="text" 
                class="form-control form-control-sm col-md-10" 
                id="coin-api" 
                placeholder="Url to blockchain api"
                v-model="coin.api">
              <input 
                type="text" 
                class="form-control form-control-sm col-md-2" 
                id="coin-api" 
                placeholder="Update time"
                v-model="coin.upTime">
            </div>
          </div>
        </div>
        <div class="col-md-2">
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
      coin: '',
    }
  },
  methods: {
    beforeOpen (event) {
      if (event.params.coin === 'New') {
        this.coin = {
          id: '',
          coin: '',
          token: '',
          api: ''
        }
      } else {
        this.coin = Object.assign({}, event.params.coin)
      }
    },
    save () {
      this.$store.commit('setCoin', this.coin)
      this.$modal.hide('coin-modal')
    },
    cancel () {
      this.$modal.hide('coin-modal')
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



