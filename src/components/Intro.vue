<template>
  <div class="intro">
    <!--
    <h1>Intro component</h1>
    <p>{{ txt | reverse }}</p>
    <p @click="clickIntro(txt)">Pulsa Aqui !!</p>

    <!-- Se utiliza un if para evitar errores cuando carguemos infomacion desde un API
    <ul v-if="users.length">
      <li v-for="user in users">
       {{ user.id }} - {{ user.name }}
      </li>
    </ul>

    <div v-else>
      <p>No hay Usuarios</p>
    </div>

    <input v-model="userInput">
    <p>{{ userInput }}</p>
    <button @click="showUser">Mostrar Usuario</button>

    <br><br>

    <ul>
      <li v-for="component in components">
        <button @click="changeComponent(component)">Cambiar al componente {{ component }}</button>
      </li>
    </ul>
    <!-- con el componente transition podemos implementar un efecto de transicion css
    <transition name="fade">
      <component v-bind:is="currentView"></component>
    </transition>

    <Child1 v-on:customEvent="fireCustomEvent" v-bind:text="'Hola componente child1'" :text2="currentView"></Child1>
    -->
    <slots-component></slots-component>
  </div>

</template>

<script>
  // Iportamos los componentes que utilizaremos
  import Child1 from './Child1.vue'
  import Child2 from './Child2.vue'
  import SlotsComponent from './SlotsComponent.vue'

  /* Mixins permiten distribuir funcionalidades(data,methods,hooks,etc) reusables para los componentes */
  let myMixin = {
    data () {
      return {
        txt: 'Hola Mi mixin'
      }
    },
    methods: {
      fireCustomEvent (text2) {
        console.log('fireCustomEvent')
        console.log(text2)
      }
    }

  }
  /*
   * data() permite el envio de datos al <template>
   * txt variable retorna texto
   */
  export default {
    name: 'intro',
    mixins: [myMixin],
    components: {
      // Incluimos los componentes q importamos, al objeto, para poder utilizarlos
      Child1, Child2, SlotsComponent
    },
    /* Se recomienda usar mounted para las peticiones ajax por que en este hook es posible acceder/definir
     * datos de nuestro componente
     */
    mounted () {
      this.users.push({id: 1, name: 'Joss'}, {id: 2, name: 'Mafer'})
    },
    data () {
      return {
        // txt: 'Hola Mundo come to Intro.vue',
        users: [],
        userInput: '',
        components: ['Child1', 'Child2'],
        currentView: 'Child1'
      }
    },
    /* podemos pasar parametros en algun metodo si se requiere */
    methods: {
      clickIntro (txt) {
        console.log(txt)
      },
      showUser () {
        console.log(this.userInput)
      },
      changeComponent (cmp) {
        this.currentView = cmp
      }
    },
    /*
     * permiten alterar la forma en que se muestran los datos dentro de la app
     * practicamente son funciones que tratan la informacion y nos devuelven un resultado para mostar
     * se pueden definir a nivel componente(local) o a nivel global, dentro del archivo main.js
     */
    filters: {
      reverse (value) {
        return value.split('').reverse().join('')
      }
    }
  }
</script>

<style scoped>
  ul {

    padding: 0;
    display: inline-block;
    margin: 0 10px;
    width: 100%;
  }

  li {
    list-style-type: none;
    width: 100%;
  }

  a {
    color: #42b983;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }

</style>

