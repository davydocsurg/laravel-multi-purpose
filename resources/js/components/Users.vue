<template>
  <div>
    <div class="container">
      <div class="mt-5" v-if="$gate.isAdminOrAuthor()">
        <div class="col-md-12 col-xs-12">
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
              <div
                class="modal-content"
                :class="editMode ? 'bg-secondary' : 'bg-dark'"
              >
                <div class="modal-header">
                  <h5 class="modal-title" id="usersLabel" v-if="!editMode">
                    New User
                  </h5>
                  <h5 class="modal-title" id="usersLabel" v-if="editMode">
                    Update User's Details
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
                <form @submit.prevent="editMode ? editUser() : createUser()">
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
                        placeholder="Enter password(min: 8 characters)"
                      />
                      <has-error :form="form" field="password"></has-error>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      class="btn btn-warning btn-sm"
                      type="button"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      class="btn btn-success btn-sm"
                      type="submit"
                      v-if="!editMode"
                    >
                      Add User <i class="fas fa-user-plus"></i>
                    </button>

                    <button
                      class="btn btn-info btn-sm"
                      type="submit"
                      v-if="editMode"
                    >
                      Edit User <i class="fas fa-user-edit"></i>
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
                <button class="btn btn-success" @click="newUser">
                  <!-- data-toggle="modal"
                  data-target="#users" -->
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
                    <!-- <th scope="col" v-if="user.photo">Photo</th> -->
                    <th scope="col">Email</th>
                    <th scope="col">Type</th>
                    <th scope="col">Registered At</th>
                    <th class="white-space-nowrap" scope="col">Modify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users.data" :key="user.id">
                    <th scope="row">{{ user.id }}</th>
                    <td>{{ user.name }}</td>
                    <!-- <td><img class="img-circle" :src="authUser.photo" alt="User Avatar" /></td> -->
                    <td>{{ user.email }}</td>
                    <td>{{ user.type | cap }}</td>
                    <td>{{ user.created_at | date }}</td>
                    <td class="white-space-nowrap">
                      <a href="#" @click="editUserModal(user)"
                        ><i class="fas fa-user-edit"></i></a
                      >/
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
              <div class="card-footer">
                <pagination
                  :data="users"
                  @pagination-change-page="getResults"
                ></pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container" v-if="!$gate.isAdminOrAuthor()">
        <not-found></not-found>
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
        id: "",
        name: "",
        email: "",
        password: "",
        type: "",
        bio: "",
        photo: "",
        skills: "",
      }),
      editMode: false,
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

    Ignite.$on("searching", () => {
      let query = this.$parent.search;
      axios
        .get("api/findUser?q=" + query)
        .then((data) => {
          this.users = data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },

  methods: {
    displayUsers() {
      if (this.$gate.isAdminOrAuthor) {
        axios.get("api/user").then(({ data }) => (this.users = data));
      }
    },

    getResults(page = 1) {
      const paginationURL = "api/user?page=";
      axios.get(paginationURL + page).then((response) => {
        this.users = response.data;
      });
    },

    createUser() {
      this.$Progress.start();
      this.form
        .post("api/user")
        .then(() => {
          Ignite.$emit("userCreated");

          $("#users").modal("hide");

          Toast.fire({
            icon: "success",
            title: "User created successfully",
          });

          this.$Progress.finish();
        })
        .catch(() => {
          this.$Progress.fail();
        });
    },

    deleteUser(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        // Send request to the server
        if (result.value) {
          // Swal.fire("deleted!", "Your file has been deleted", "success");
          this.form
            .delete("api/user/" + id)
            .then(() => {
              Swal.fire(
                "Deleted!",
                "User was deleted successfully!.",
                "success"
              );
              Ignite.$emit("userCreated");
            })
            .catch(() => {
              Swal.fire("Failed!", "There was something wrong.", "warning");
            });
        }
      });
    },
    newUser() {
      this.editMode = false;
      this.form.reset();
      $("#users").modal("show");
    },

    editUserModal(user) {
      this.editMode = true;
      this.form.reset();
      $("#users").modal("show");
      this.form.fill(user);
    },

    editUser() {
      this.$Progress.start();
      this.form
        .put("api/user/" + this.form.id)
        .then(() => {
          Ignite.$emit("userCreated");
          $("#users").modal("hide");
          // const Toast = Swal.mixin({
          //   toast: true,
          //   position: "top-end",
          //   showConfirmButton: false,
          //   timer: 3000,
          //   timerProgressBar: true,
          //   didOpen: (toast) => {
          //     toast.addEventListener("mouseenter", Swal.stopTimer);
          //     toast.addEventListener("mouseleave", Swal.resumeTimer);
          //   },
          // });

          Toast.fire({
            icon: "success",
            title: "User's details updated successfully",
          });
          this.$Progress.finish();
        })

        .catch(() => {
          Toast.fire({
            icon: "failed",
            title: "Something went wrong",
          });

          this.$Progress.fail();
        });
    },
  },
};
//  v-if="$gate.isAdminOrAuthor()"
</script>
