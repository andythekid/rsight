<template>
  <modal name="rig-modal"
    @before-open="beforeOpen"
    :adaptive="true">
    <form class="form-horizontal" action="">
      <div class="row">
        <div class="col-md-10">
          <div class="form-group">
            <div class="row">
              <input 
                type="text" 
                class="form-control form-control-sm col-md-4" 
                id="rig-alias" 
                placeholder="Rig alias"
                v-model="rig.alias">
              <input 
                type="text" 
                class="form-control form-control-sm col-md-8" 
                id="rig-wallet" 
                placeholder="Wallet"
                v-model="rig.wallet">
            </div>
            <div class="row">
              <input 
                type="text" 
                class="form-control form-control-sm col-md-10" 
                id="rig-pool" 
                placeholder="Url to pool api"
                v-model="rig.pool">
              <input 
                type="text" 
                class="form-control form-control-sm col-md-2" 
                id="rig-uptime" 
                placeholder="Update time"
                v-model="rig.upTime">
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
      rig: '',
    }
  },
  methods: {
    beforeOpen (event) {
      if (event.params.rig === 'New') {
        this.rig = {
          id: '',
          pool: '',
          alias: '',
          wallet: '',
          upTime: ''
        }
      } else {
        this.rig = Object.assign({}, event.params.rig)
      }
    },
    save () {
      this.$store.commit('setRig', this.rig)
      this.$modal.hide('rig-modal')
    },
    cancel () {
      this.$modal.hide('rig-modal')
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



