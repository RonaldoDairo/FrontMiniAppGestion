<template>
  <div class="row">
      <div class="col-lg-8 offset-lg-2">
        <div class="table-responsive">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>Photo</th>
                <th>Name</th>
                <th>LastName</th>
                <th>Register Date</th>
              </tr>
            </thead>
            <tbody class="table-group-divider" id="content">
                <tr v-if="this.loading">
                    <td colspan="6"><h3>Waiting...</h3></td>
                </tr>
                <tr v-else v-for="est, i in this.students" :key="est.id">
                    <td v-text="(i+1)"></td>
                    <td v-text="est.id"></td>
                    <td>
                      <img v-if="est.foto" style="width: 150px !important;" :src="est.foto" class="img-thumbnail" alt="">
                      <img v-else style="width: 150px !important;" src="https://cdn1.iconfinder.com/data/icons/users-100/32/ic-users-add-128.png" class="img-thumbnail" alt="">
                    </td>
                    <td v-text="est.nombre"></td>
                    <td v-text="est.apellido"></td>
                    <td v-text="new Date(est.created_at).toLocaleDateString('en-US')"></td>
                    <td>
                        <router-link :to="{path:`view/${est.id}`}" class="btn btn-info">
                          <i class="fa-solid fa-eye"></i>
                        </router-link>
                        &nbsp;
                        <router-link :to="{path:`edit/${est.id}`}" class="btn btn-warning">
                          <i class="fa-solid fa-edit"></i>
                        </router-link>
                        &nbsp;
                        <button class="btn btn-danger">
                          <i class="fa-solid fa-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
  </div>
</template>



<script>
import axios from 'axios';

export default {

  data(){
    return{
      students:null,
      loading:false
    }
  },
  mounted(){
    this.getStudents();
  },
  methods:{
    getStudents() {
      this.loading =true;
      axios.get("http://miniappgestion.test/api/v1/estudiantes").then(
        res =>{
          this.students = res.data;
          this.loading = false
        }
      );
   }
  }
}
</script>
