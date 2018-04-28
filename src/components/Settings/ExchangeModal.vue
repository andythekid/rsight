<template>
  <modal name="exchange-modal"
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
                v-model="exchange.name">
              <input 
                type="text" 
                class="form-control form-control-sm col-md-3" 
                id="coin-alias" 
                placeholder="Token"
                v-model="exchange.coin">
            </div>
            <div class="row">
              <input 
                type="text" 
                class="form-control form-control-sm col-md-10" 
                id="coin-api" 
                placeholder="Url to blockchain api"
                v-model="exchange.api">
              <input 
                type="text" 
                class="form-control form-control-sm col-md-2" 
                id="coin-uptime" 
                placeholder="Update time"
                v-model="exchange.upTime">
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
      exchange: '',
    }
  },
  methods: {
    beforeOpen (event) {
      if (event.params.exchange === 'New') {
        this.exchange = {
          id: '',
          coin: '',
          name: '',
          api: '',
          upTime: ''
        }
      } else {
        this.exchange = Object.assign({}, event.params.exchange)
      }
    },
    save () {
      this.$store.commit('setExchange', this.exchange)
      this.$modal.hide('exchange-modal')
    },
    cancel () {
      this.$modal.hide('exchange-modal')
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



