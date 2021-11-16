<template>
  <h1>Componente HelloWorld</h1>
  <p class="title-counter">{{ count }}</p>
  <div>
    <button @click="incrementAsync">Async +</button>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="decrementAsync">Async -</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { IStore } from "@/store/index";

// Sirve para manejar mas de un atributo del estado global
const computed = {
  ...mapState<IStore>({
    // Sirve para manejar mas de un atributo del estado global
    count: (state: IStore) => state.count,
  }),
  ...mapGetters(["getCount"]),
};

const methods = {
  ...mapMutations(["increment", "decrement"]),
  ...mapActions(["incrementAsync", "decrementAsync"]),
};

@Options({
  props: {},
  computed,
  /*   computed: { // Manejo de estados sencillo (Fuerza a volverse un singleton el componente)
    count() {
      return store.state.count;
    },
  },
  /*   computed: { // Forma cuando se inyecta desde un componente padre
    count() {
      return this.$store.state.count;
    },
  }, */
  methods,
})
export default class HelloWorld extends Vue {}
</script>

<style scoped lang="scss">
.title-counter {
  font-size: 24px;
}

button {
  min-width: 40px;
  height: 40px;
  margin: 0px 5px;
  font-size: 30px;
  font-weight: bold;
}
</style>
