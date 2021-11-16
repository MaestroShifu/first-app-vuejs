<template>
  <h1>Componente Page Home</h1>
  <hello-world />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue";

@Options({
  components: {
    "hello-world": HelloWorld,
  },
})
export default class Home extends Vue {

  

/*   computed: {
    count () {
	    return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
    	store.commit('decrement')
    }
  } */


}
</script>
