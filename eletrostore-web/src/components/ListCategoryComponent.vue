<template>
  <div class="container">
    <h3>Cadastro de Categories</h3>
    <div v-if="message" class="alert alert-success">
      {{message}}
    </div>
    <div class="row">
        <button class="btn btn-success" v-on:click="newCategoryByClick()">Novo</button>
    </div>
    <div class="container">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Código</th>
            <th scope="col">Descrição</th>
            <th scope="col">Data alteração</th>
            <th scope="col">Atualizar</th>
            <th scope="col">Remover</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" v-bind:key="category.id">
            <td>{{category.id}}</td>
            <td>{{category.name}}</td>
            <td>{{category.lastUpdate | formatDate}}</td>
            <td><button class="btn btn-success" v-on:click="saveCategoryByClick(category.id)">Atualizar</button></td>
            <td><button class="btn btn-warning" v-on:click="deleteCategoryByClick(category.id)">Remover</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import CategoryService from '../services/CategoryService';
export default {
  name: "CategoryList",
  data() {
    return {
      categories: [],
      message: null
    };
  },
  methods: {
    refreshCategories() {
      CategoryService.retrieveAll()
        .then(response => {
          this.categories = response.data;
        });
    },
    newCategoryByClick() {
      this.$router.push(`/categories/0`);
    },
    saveCategoryByClick(id) {
      this.$router.push(`/categories/${id}`);
    },
    deleteCategoryByClick(id) {
      CategoryService.deleteById(id)
        .then(() => { 
          this.message = `Categoria numero ${id} apagada com sucesso!`;
          this.refreshCategories();
      });
    }
  },
  created() {
    this.refreshCategories();
  }
};
</script>

<style></style>