<template>
  <div class="row mt-3">
  <div  class="col-md-6 offset-md-3">
      <div class="card">
          <div class="card-header bg-dark text-white text-center">
              Student Detail
          </div>
          <div class="card-body">
            <div class="d-grid col-6 mx-auto mb-3">
              <router-link :to="{path:'/'}" class="btn btn-info">
                <i class="fa-solid fa-arrow-left"></i> Go back to the list
              </router-link>
            </div>
                <div class="d-grid col-6 mx-auto mb-3">
                  <img v-if="this.foto" height="100" :src="this.foto" id="fotoimg" class="img-thumbnail" alt="">
                  <img v-else height="100" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" class="img-thumbnail" id="fotoimg" alt="">
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                  <label v-text="nombre" class="form-control"></label>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                  <label v-text="apellido" class="form-control"></label>
                </div>
              
              
          </div>
      </div>
  </div>
</div>
</template>

<script>
import { useRoute } from 'vue-router';
import axios from 'axios';

export default{
  data(){
    return{
      id:0,
      nombre:'',
      apellido:'',
      foto:'',
      url:'http://miniappgestion.test/api/v1/estudiantes',
      cargando:false
    }
  },
  mounted(){
    const route = useRoute();
    this.id = route.params.id;
    this.url += '/'+this.id;
    this.getStudent();
  },
  methods:{
    getStudent(){
      axios.get(this.url).then(
        res=>{
          this.nombre = res.data.data.nombre;
          this.apellido = res.data.data.apellido;
          this.foto = res.data.data.foto;
        }
      );
    },
  }
}
</script>