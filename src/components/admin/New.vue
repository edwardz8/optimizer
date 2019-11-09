<template>
  <div class="admin-new-product-container">
    <h1>New Product with Form</h1>

    <product-form @save-product="addProduct" :model="model" :manufacturers="manufacturers"></product-form>
  </div>
</template>

<script>
import ProductForm from "./ProductForm.vue";

export default {
  name: "New",
  data() {
    return {
      model: {},
      manufacturers: [
        {
          _id: "sam",
          name: "Samsung"
        },
        {
          _id: "apple",
          name: "Apple"
        }
      ]
    };
  },
  methods: {
    addProduct(model) {
      console.log("model", model);
    }
  },
  components: {
    "product-form": ProductForm
  }
};
</script>

<style scoped>
.admin-new-product-container {
  margin-left: 2rem;
  margin-top: 2rem;
}
</style>