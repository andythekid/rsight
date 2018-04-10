<template>
  <div class="col-md-12">
    <form class="form-horizontal" action="">
      <div class="row">
        <div class="col-md-10">
          <div class="form-group">
            <div class="row">
              <label>{{ coin.coin }} ({{ coin.token }})</label>
            </div>
            <div class="row">
              <label>Api url: {{ coin.api }}</label>
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
