<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header bg-dark">
              <h3 class="card-title">Users Table</h3>

              <div class="card-tools">
                <button class="btn btn-success" @click="showModal">
                  <!-- Add New  -->
                  <i class="fas fa-user-plus fa-fw"></i>
                </button>
              </div>
            </div>

            <div class="card-body">
              <table class="table table-hover">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Type</th>
                    <th scope="col">Registered At</th>
                    <th class="white-space-nowrap" scope="col"> Modify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Steven</td>
                    <td>Soderbergh</td>
                    <td class="white-space-nowrap">@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: new Form({
        name: "",
        email: "",
        password: "",
        type: "",
        bio: "",
        photo: "",
      }),
    };
  },
};
//  v-if="$gate.isAdminOrAuthor()"
</script>
