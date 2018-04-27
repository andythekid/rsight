<template>
  <modal name="wall-group-modal"
    @before-open="beforeOpen"
    :adaptive="true">
    <form class="form-horizontal" action="">
      <div class="row">
        <div class="col-md-10">
          <div class="form-group">
            <div class="row">
              <input 
                type="text" 
                class="form-control form-control-sm col-md-12" 
                id="wall-group-name" 
                placeholder="Group name"
                v-model="wallGroup.name">
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
      wallGroup: '',
    }
  },
  methods: {
    beforeOpen (event) {
      if (event.params.wallGroup === 'New') {
        this.wallGroup = {
          id: '',
          name: ''
        }
      } else {
        this.wallGroup = Object.assign({}, event.params.wallGroup)
      }
    },
    save () {
      this.$store.commit('setWallGroup', this.wallGroup)
      this.$modal.hide('wall-group-modal')
    },
    cancel () {
      this.$modal.hide('wall-group-modal')
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



