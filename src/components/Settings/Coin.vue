<template>
  <div class="col-md-12 list-element">
    <form class="form-horizontal" action="">
      <div class="row">
        <div class="col-md-10">
          <div class="form-group fg-margin">
            <div class="row rw-marfin">
              <label>{{ coin.coin }} ({{ coin.token }})</label>
            </div>
            <div class="row rw-marfin">
              <label>Api url: {{ coin.api }}</label>
            </div>
            <div class="row rw-marfin">
              <label>Update time (seconds): {{ coin.upTime }}</label>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <button type="button" class="btn btn-warning btn-block btn-sm" @click="loadEditForm">Edit</button>
          <button type="button" class="btn btn-danger btn-block btn-sm" @click="deleteCoin">Delete</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    props: ['coin'],
    methods: {
      loadEditForm () {
        this.$modal.show('coin-modal', { coin: this.coin })
      },
      deleteCoin () {
        let result = confirm('Want to delete?')
        if (result) {
          this.$store.commit('deleteCoin', this.coin)
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