<template>
  <div id="app">
     <md-toolbar class="md-primary" md-elevation="1">
      <div class="md-title" style="flex: 1"><router-link to="/">RotoRink Optimizer</router-link></div>
      <router-link to="/list" class="link">
      <md-button>DND List</md-button>
      </router-link>
      <router-link to="/chart" class="link">
      <md-button>Charts</md-button>
      </router-link>
      <router-link to="/admin" class="link">
      <md-button>Admin</md-button>
      </router-link>
      <router-link to="/cart" class="link">
      <md-button>Cart</md-button>
      </router-link>
    </md-toolbar>
    
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

.md-theme-default a:not(.md-button) {
  color: white;
}

.link {
  text-decoration: none;
  color: white;
}
</style>
