<template>
  <div>
        <md-toolbar>
      <div class="md-title" style="flex: 1"><router-link to="/">Admin Navigation</router-link></div>
      <router-link to="/admin" class="link">
      <md-button>View Products</md-button>
      </router-link>
      <router-link to="/admin/new" class="link">
      <md-button>New Product</md-button>
      </router-link>
    </md-toolbar>

    <div class="admin-container">
        <!-- Outlet for children routes -->
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      players: []
    }
  },
}
</script>

<style scoped>
.admin-container {
    margin-left: 2rem;
    margin-top: 2rem;
}

</style>