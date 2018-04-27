<template>
  <div class="col-md-12 list-element">
    <form class="form-horizontal" action="">
      <div class="row">
        <div class="col-md-10">
          <div class="form-group fg-margin">
            <div class="row rw-marfin">
              <label>{{ rig.alias }} -> {{ rig.wallet }} </label>
            </div>
            <div class="row rw-marfin">
              <label>Pool url: {{ rig.pool }}</label>
            </div>
            <div class="row rw-marfin">
              <label>Update time (seconds): {{ rig.upTime }}</label>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <button type="button" class="btn btn-warning btn-block btn-sm" @click="loadEditForm">Edit</button>
          <button type="button" class="btn btn-danger btn-block btn-sm" @click="deleteRig">Delete</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    props: ['rig'],
    methods: {
      loadEditForm () {
        this.$modal.show('rig-modal', { rig: this.rig })
      },
      deleteRig () {
        let result = confirm('Want to delete?')
        if (result) {
          this.$store.commit('deleteRig', this.rig)
        }
      }
    }
  }

</script>

<style>
  .list-element {
    border: 1px solid #343a40;
    border-radius: 5px;
    padding: 10px 20px 10px 20px;
    margin: 5px 0 5px 0;
  }
  .fg-margin {
    margin-bottom: 0;
  }
  .rw-marfin {
    margin-right: 0;
    margin-left: 0; 
  }
</style>