<template>
  <div class="container">
    <h1>Novo Usuário</h1>
    <form @submit.prevent="enviarFormulario">
      <div class="form-group">
        <label for="nome"> Nome </label>
        <input type="text" v-model="usuario.nome" class="form-control" />
      </div>
      <div class="form-group">
        <label for="emnail"> Email </label>
        <input type="email" v-model="usuario.email" class="form-control" />
      </div>
      <div class="form-group">
        <label for="senha"> Senha </label>
        <input type="password" v-model="usuario.senha" class="form-control" />
      </div>
      <button class="btn btn-primary" type="submit">Salvar</button>
    </form>
  </div>
</template>

<script>

export default {
  data: () => {
    return {
      usuario: {
        nome: "",
        email: "",
        senha: "",
      },
    };
  },
  methods: {
    enviarFormulario() {
      this.$http
        .post("/auth/register", this.usuario)
        .then((response) => {
          let auth = response;
          console.log(response, auth);
          this.$router.push({ name: "login" });
        })
        .catch( error => {
          console.error("aqui houve um error", error);
        });
    },
  },
};
</script>

<style lang="css" scoped></style>
