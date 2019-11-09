<template>
  <div class="admin-product-form-container">
    <form @submit.prevent="saveProduct" class="md-layout md-gutter md-alignment-center">
      <div class="form">
        <div class="column-one">
          <!-- Name Form Group -->
          <div class="form-group">
            <md-field>
              <label>Name</label>
              <!-- v-model="model.name" -->
              <md-input
                type="text"
                v-model="model.name"
                name="name"
                :class="{'form-control': true }"
              ></md-input>
            </md-field>
            <!--  <span class="small text-danger" v-show="errors.has('name')"></span> -->
          </div>
          <!-- Price Form Group -->
          <div class="form-group">
            <md-field>
              <label>Price</label>
              <!-- v-model="model.name" -->
              <md-input
                type="text"
                v-model="model.price"
                name="price"
                :class="{'form-control': true }"
              ></md-input>
            </md-field>
          </div>

          <!-- Price Form Group -->
          <div class="form-group">
            <md-field>
              <label>Manufacturer</label>
              <!-- v-model="model.name" -->
              <md-select
                type="text"
                name="manufacturer"
                v-model="model.manufacturer"
                :class="{'form-control': true }"
              >
                <md-option
                  v-for="manufacturer in manufacturers"
                  :key="manufacturer._id"
                  :value="manufacturer._id"
                >{{manufacturer.name}}</md-option>
              </md-select>
            </md-field>
          </div>
        </div>

        <div class="column-two">
          <!-- Image Form Group -->
          <div class="form-group">
            <md-field>
              <label>Image</label>
              <md-input type="text" v-model="model.image" name="image" />
            </md-field>
          </div>

          <div class="form-group">
            <md-field>
              <label>Description</label>
              <md-textarea
                type="text"
                v-model="model.description"
                md-counter="160"
                name="description"
              />
            </md-field>
          </div>
          <md-button class="md-raised md-primary">
            <!-- Conditional rendering for input text -->
            <span v-if="isEditing">Update Product</span>
            <span v-else>Add Product</span>
          </md-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ProductForm",
  props: ["model", "isEditing", "manufacturers"],
  methods: {
    saveProduct() {
      this.$emit("save-product", this.model);
    }
  }
};
</script>

<style scoped>
.admin-product-form-container {
  margin-left: 2rem;
  margin-top: 2rem;
}

.form {
  display: flex;
  flex-direction: row;
}

.column-one {
  margin-right: 3rem;
}

.column-two {
  margin-left: 3rem;
}

label {
  margin-left: 1rem;
}

/* .md-field .md-input,
.md-field .md-textarea {
  border: 1px solid white;
  border-radius: 3px;
  padding: 1rem;
  width: 50%;
} */

/* error styles */
.form-control.error {
  border-color: #ff3333;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(255, 71, 71, 0.6);
}
</style>