<template>
  <div>
    <div class="container">
      <div class="mt-5">
        <div class="col-md-12">
          <!-- Modal-->
          <div
            class="modal fade"
            id="users"
            tabindex="-1"
            role="dialog"
            aria-labelledby="usersLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content bg-dark">
                <div class="modal-header">
                  <h5 class="modal-title" id="usersLabel">
                    New User
                  </h5>
                  <button
                    class="close text-white"
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span class="font-weight-light" aria-hidden="true"
                      >&times;</span
                    >
                  </button>
                </div>
                <form @submit.prevent="createUser()">
                  <div class="modal-body">
                    <div class="form-group">
                      <input
                        class="form-control"
                        id="name"
                        v-model="form.name"
                        type="text"
                        placeholder="Name"
                        :class="{
                          'is-invalid': form.errors.has('name'),
                        }"
                      />
                      <has-error :form="form" field="name"></has-error>
                    </div>

                    <div class="form-group">
                      <input
                        v-model="form.email"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        class="form-control"
                        :class="{
                          'is-invalid': form.errors.has('email'),
                        }"
                      />
                      <has-error :form="form" field="email"></has-error>
                    </div>

                    <div class="form-group">
                      <textarea
                        v-model="form.bio"
                        name="bio"
                        id="bio"
                        placeholder="Short bio for user (Optional)"
                        class="form-control"
                        :class="{ 'is-invalid': form.errors.has('bio') }"
                      ></textarea>
                      <has-error :form="form" field="bio"></has-error>
                    </div>

                    <div class="form-group">
                      <select
                        name="type"
                        v-model="form.type"
                        id="type"
                        class="form-control"
                        :class="{ 'is-invalid': form.errors.has('type') }"
                      >
                        <option value="">Select User Role</option>
                        <option value="admin">Admin</option>
                        <option value="user">Standard User</option>
                        <option value="author">Author</option>
                      </select>
                      <has-error :form="form" field="type"></has-error>
                    </div>

                    <div class="form-group">
                      <input
                        v-model="form.password"
                        type="password"
                        name="password"
                        id="password"
                        class="form-control"
                        :class="{
                          'is-invalid': form.errors.has('password'),
                        }"
                      />
                      <has-error :form="form" field="password"></has-error>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      class="btn btn-secondary btn-sm"
                      type="button"
                      data-dismiss="modal"
                    >
                      Close</button
                    ><button class="btn btn-primary btn-sm" type="submit">
                      Save changes <i class="fas fa-user-check"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header bg-dark">
              <h3 class="card-title">Users Table</h3>

              <div class="card-tools">
                <button
                  class="btn btn-success"
                  data-toggle="modal"
                  data-target="#users"
                >
                  <!-- Add New  -->
                  <i class="fas fa-user-plus fa-fw"></i>
                </button>
              </div>
            </div>

            <div class="card-body table-responsive">
              <!-- <div class="table-responsive"> -->
              <table class="table table-hover">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Type</th>
                    <th scope="col">Registered At</th>
                    <th class="white-space-nowrap" scope="col">Modify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.id">
                    <th scope="row">{{ user.id }}</th>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.type | cap }}</td>
                    <td>{{ user.created_at | date }}</td>
                    <td class="white-space-nowrap">
                      <a href=""><i class="fas fa-user-edit"></i></a>/
                      <a
                        href=""
                        class="text-danger"
                        @click.prevent="deleteUser(user.id)"
                        ><i class="far fa-trash-alt"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- </div> -->
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
      users: {},
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

  mounted() {
    this.displayUsers();
    // setInterval(() => {
    //   this.displayUsers()
    // }, 3000);
    Ignite.$on("userCreated", () => {
      this.displayUsers();
    });
  },

  methods: {
    displayUsers() {
      axios.get("api/user").then(({ data }) => (this.users = data.data));
    },

    createUser() {
      this.$Progress.start();
      this.form
        .post("api/user")
        .then(() => {
          Ignite.$emit("userCreated");

          $("#users").modal("hide");

          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          });

          this.$Progress.finish();
        })
        .catch(() => {});
    },

    deleteUser(id) {
      // Swal.fire("hello world");

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        // Send request to the server
        if (result.value) {
          Swal.fire("deleted!", "Your file has been deleted", "success");
          // this.form
          //   .delete("api/user/" + id)
          //   .then(() => {
          //     swal("Deleted!", "User was deleted.", "success");
          //     Fire.$emit("AfterCreate");
          //   })
          //   .catch(() => {
          //     swal("Failed!", "There was something wronge.", "warning");
          //   });
        }
      });
    },
  },
};
//  v-if="$gate.isAdminOrAuthor()"
</script>
