<template>
    <div class="admin-edit-container">
        <h1>Edit</h1>
        <p>This is Admin/Edit/{{$route.params.id}}</p>
    </div>
</template>

<script>
export default {
  name: "Edit",
  data() {
    return {
      //
    }
  },
}
</script>

<style scoped>
.admin-edit-container {
    margin-left: 2rem;
    margin-top: 2rem;
}

</style>