<template>
<div id="app">
<Cabecera></Cabecera>
<Footer></Footer>

</div>
<router-view />
</template>
<script>
import Cabecera from '@/components/Cabecera.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'app',
  components:{
    Cabecera,
    Footer,   
  }

}
</script>

