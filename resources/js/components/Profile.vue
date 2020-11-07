<style lang="css">
.widget-user-header {
  background-position: center center;
  background-size: cover;
  height: 250px !important;
}
.widget-user-image {
  margin-top: 6rem;
}
</style>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12" v-for="authUser in authUsers" :key="authUser.id">
        <div class="card card-widget widget-user bg-dark">
          <!-- Add the bg color to the header using any of the bg-* classes -->
          <div
            class="widget-user-header text-white"
            style="background: url('./images/photo1.png');"
          >
            <!-- style="background: url('images/cover/'+authUser.cover_photo);" -->

            <h3 class="widget-user-username text-right">{{ authUser.name }}</h3>
            <h5 class="widget-user-desc text-right">{{ authUser.skills }}</h5>
          </div>
          <div class="widget-user-image">
            <img class="img-circle" :src="'images/profile/' + authUser.photo | getProfilePhoto() " alt="User Avatar" />
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="col-sm-4 border-right">
                <div class="description-block">
                  <h5 class="description-header">3,200</h5>
                  <span class="description-text">SALES</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
              <div class="col-sm-4 border-right">
                <div class="description-block">
                  <h5 class="description-header">13,000</h5>
                  <span class="description-text">FOLLOWERS</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
              <div class="col-sm-4">
                <div class="description-block">
                  <h5 class="description-header">35</h5>
                  <span class="description-text">PRODUCTS</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
        </div>

        <div class="card bg-dark">
          <div class="card-header p-2">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a
                  class="nav-link text-white"
                  href="#activity"
                  data-toggle="tab"
                  >Activity</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-white active"
                  href="#timeline"
                  data-toggle="tab"
                  >Timeline</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-white"
                  href="#settings"
                  data-toggle="tab"
                  @click="popForm(authUser)"
                  >Settings <i class="fas fa-cogs"></i
                ></a>
              </li>
            </ul>
          </div>
          <!-- /.card-header -->

          <!-- sets -->
          <div class="card-body">
            <div class="tab-content">
              <div class="tab-pane" id="activity">
                <!-- Post -->
                <div class="post">
                  <div class="user-block">
                    <img
                      class="img-circle img-bordered-sm"
                      src="images/user1-128x128.jpg"
                      alt="user image"
                    />
                    <span class="username">
                      <a href="#">Jonathan Burke Jr.</a>
                      <a href="#" class="float-right btn-tool"
                        ><i class="fas fa-times"></i
                      ></a>
                    </span>
                    <span class="description"
                      >Shared publicly - 7:30 PM today</span
                    >
                  </div>
                  <!-- /.user-block -->
                  <p>
                    Lorem ipsum represents a long-held tradition for designers,
                    typographers and the like. Some people hate it and argue for
                    its demise, but others ignore the hate as they create
                    awesome tools to help create filler text for everyone from
                    bacon lovers to Charlie Sheen fans.
                  </p>

                  <p>
                    <a href="#" class="link-black text-sm mr-2"
                      ><i class="fas fa-share mr-1"></i> Share</a
                    >
                    <a href="#" class="link-black text-sm"
                      ><i class="far fa-thumbs-up mr-1"></i> Like</a
                    >
                    <span class="float-right">
                      <a href="#" class="link-black text-sm">
                        <i class="far fa-comments mr-1"></i> Comments (5)
                      </a>
                    </span>
                  </p>

                  <input
                    class="form-control form-control-sm"
                    type="text"
                    placeholder="Type a comment"
                  />
                </div>
                <!-- /.post -->

                <!-- Post -->
                <div class="post clearfix">
                  <div class="user-block">
                    <img
                      class="img-circle img-bordered-sm"
                      src="images/user7-128x128.jpg"
                      alt="User Image"
                    />
                    <span class="username">
                      <a href="#">Sarah Ross</a>
                      <a href="#" class="float-right btn-tool"
                        ><i class="fas fa-times"></i
                      ></a>
                    </span>
                    <span class="description"
                      >Sent you a message - 3 days ago</span
                    >
                  </div>
                  <!-- /.user-block -->
                  <p>
                    Lorem ipsum represents a long-held tradition for designers,
                    typographers and the like. Some people hate it and argue for
                    its demise, but others ignore the hate as they create
                    awesome tools to help create filler text for everyone from
                    bacon lovers to Charlie Sheen fans.
                  </p>

                  <form class="form-horizontal">
                    <div class="input-group input-group-sm mb-0">
                      <input
                        class="form-control form-control-sm"
                        placeholder="Response"
                      />
                      <div class="input-group-append">
                        <button type="submit" class="btn btn-danger">
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <!-- /.post -->

                <!-- Post -->
                <div class="post">
                  <div class="user-block">
                    <img
                      class="img-circle img-bordered-sm"
                      src="images/user6-128x128.jpg"
                      alt="User Image"
                    />
                    <span class="username">
                      <a href="#">Adam Jones</a>
                      <a href="#" class="float-right btn-tool"
                        ><i class="fas fa-times"></i
                      ></a>
                    </span>
                    <span class="description"
                      >Posted 5 photos - 5 days ago</span
                    >
                  </div>
                  <!-- /.user-block -->
                  <div class="row mb-3">
                    <div class="col-sm-6">
                      <img
                        class="img-fluid"
                        src="images/photo1.png"
                        alt="Photo"
                      />
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-6">
                      <div class="row">
                        <div class="col-sm-6">
                          <img
                            class="img-fluid mb-3"
                            src="images/photo2.png"
                            alt="Photo"
                          />
                          <img
                            class="img-fluid"
                            src="images/photo3.jpg"
                            alt="Photo"
                          />
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-6">
                          <img
                            class="img-fluid mb-3"
                            src="images/photo4.jpg"
                            alt="Photo"
                          />
                          <img
                            class="img-fluid"
                            src="images/photo1.png"
                            alt="Photo"
                          />
                        </div>
                        <!-- /.col -->
                      </div>
                      <!-- /.row -->
                    </div>
                    <!-- /.col -->
                  </div>
                  <!-- /.row -->

                  <p>
                    <a href="#" class="link-black text-sm mr-2"
                      ><i class="fas fa-share mr-1"></i> Share</a
                    >
                    <a href="#" class="link-black text-sm"
                      ><i class="far fa-thumbs-up mr-1"></i> Like</a
                    >
                    <span class="float-right">
                      <a href="#" class="link-black text-sm">
                        <i class="far fa-comments mr-1"></i> Comments (5)
                      </a>
                    </span>
                  </p>

                  <input
                    class="form-control form-control-sm"
                    type="text"
                    placeholder="Type a comment"
                  />
                </div>
                <!-- /.post -->
              </div>
              <!-- /.tab-pane -->
              <div class="tab-pane active" id="timeline">
                <!-- The timeline -->
                <div class="timeline timeline-inverse">
                  <!-- timeline time label -->
                  <div class="time-label">
                    <span class="bg-danger">
                      10 Feb. 2014
                    </span>
                  </div>
                  <!-- /.timeline-label -->
                  <!-- timeline item -->
                  <div>
                    <i class="fas fa-envelope bg-primary"></i>

                    <div class="timeline-item">
                      <span class="time"
                        ><i class="far fa-clock"></i> 12:05</span
                      >

                      <h3 class="timeline-header">
                        <a href="#">Support Team</a> sent you an email
                      </h3>

                      <div class="timeline-body">
                        Etsy doostang zoodles disqus groupon greplin oooj voxy
                        zoodles, weebly ning heekya handango imeem plugg dopplr
                        jibjab, movity jajah plickers sifteo edmodo ifttt
                        zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu
                        weebly balihoo...
                      </div>
                      <div class="timeline-footer">
                        <a href="#" class="btn btn-primary btn-sm">Read more</a>
                        <a href="#" class="btn btn-danger btn-sm">Delete</a>
                      </div>
                    </div>
                  </div>
                  <!-- END timeline item -->
                  <!-- timeline item -->
                  <div>
                    <i class="fas fa-user bg-info"></i>

                    <div class="timeline-item">
                      <span class="time"
                        ><i class="far fa-clock"></i> 5 mins ago</span
                      >

                      <h3 class="timeline-header border-0">
                        <a href="#">Sarah Young</a> accepted your friend request
                      </h3>
                    </div>
                  </div>
                  <!-- END timeline item -->
                  <!-- timeline item -->
                  <div>
                    <i class="fas fa-comments bg-warning"></i>

                    <div class="timeline-item">
                      <span class="time"
                        ><i class="far fa-clock"></i> 27 mins ago</span
                      >

                      <h3 class="timeline-header">
                        <a href="#">Jay White</a> commented on your post
                      </h3>

                      <div class="timeline-body">
                        Take me to your leader! Switzerland is small and
                        neutral! We are more like Germany, ambitious and
                        misunderstood!
                      </div>
                      <div class="timeline-footer">
                        <a href="#" class="btn btn-warning btn-flat btn-sm"
                          >View comment</a
                        >
                      </div>
                    </div>
                  </div>
                  <!-- END timeline item -->
                  <!-- timeline time label -->
                  <div class="time-label">
                    <span class="bg-success">
                      3 Jan. 2014
                    </span>
                  </div>
                  <!-- /.timeline-label -->
                  <!-- timeline item -->
                  <div>
                    <i class="fas fa-camera bg-purple"></i>

                    <div class="timeline-item">
                      <span class="time"
                        ><i class="far fa-clock"></i> 2 days ago</span
                      >

                      <h3 class="timeline-header">
                        <a href="#">Mina Lee</a> uploaded new photos
                      </h3>

                      <div class="timeline-body">
                        <img src="http://placehold.it/150x100" alt="..." />
                        <img src="http://placehold.it/150x100" alt="..." />
                        <img src="http://placehold.it/150x100" alt="..." />
                        <img src="http://placehold.it/150x100" alt="..." />
                      </div>
                    </div>
                  </div>
                  <!-- END timeline item -->
                  <div>
                    <i class="far fa-clock bg-gray"></i>
                  </div>
                </div>
              </div>
              <!-- /.tab-pane -->

              <div class="tab-pane" id="settings">
                <form class="form-horizontal" @submit.prevent="">
                  <!-- <div class="form-group row" data-select2-id="43">
                  <label>Multiple</label>
                  <select class="select2bs4 select2-hidden-accessible" multiple="" data-placeholder="Select a State" style="width: 100%;" data-select2-id="23" tabindex="-1" aria-hidden="true">
                    <option data-select2-id="33">Alabama</option>
                    <option data-select2-id="34">Alaska</option>
                    <option data-select2-id="35">California</option>
                    <option data-select2-id="36">Delaware</option>
                    <option data-select2-id="37">Tennessee</option>
                    <option data-select2-id="38">Texas</option>
                    <option data-select2-id="39">Washington</option>
                  </select><span class="select2 select2-container select2-container--bootstrap4 select2-container--below" dir="ltr" data-select2-id="24" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-selection__choice" title="Alabama" data-select2-id="48"><span class="select2-selection__choice__remove" role="presentation">×</span>Alabama</li><li class="select2-selection__choice" title="Alaska" data-select2-id="49"><span class="select2-selection__choice__remove" role="presentation">×</span>Alaska</li><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="" style="width: 0.75em;"></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                </div> -->
                  <div class="form-group row">
                    <label for="inputName" class="col-sm-2 col-form-label"
                      >Name</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="email"
                        class="form-control"
                        id="inputName"
                        placeholder="Name"
                        v-model="form.name"
                        :class="{
                          'is-invalid': form.errors.has('name'),
                        }"
                      />
                      <has-error :form="form" field="email"></has-error>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputEmail" class="col-sm-2 col-form-label"
                      >Email</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail"
                        placeholder="Email"
                        v-model="form.email"
                        :class="{
                          'is-invalid': form.errors.has('email'),
                        }"
                      />
                      <has-error :form="form" field="email"></has-error>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputExperience" class="col-sm-2 col-form-label"
                      >Experience</label
                    >
                    <div class="col-sm-10">
                      <textarea
                        class="form-control"
                        id="inputExperience"
                        placeholder="Experience"
                      ></textarea>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="inputSkills" class="col-sm-2 col-form-label"
                      >Skills</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        id="inputSkills"
                        placeholder="Skills"
                        name="skills"
                        v-model="form.skills"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="inputImage" class="col-sm-2 col-form-label"
                      >Profile Image</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="file"
                        class="form-control"
                        name="photo"
                        placeholder=""
                        @change="uploadImg"
                      />
                    </div>
                  </div>

                  <!-- <div class="form-group row">
                    <label for="coverPhoto" class="col-sm-2 col-form-label"
                      >Cover Photo</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="file"
                        class="form-control"
                        name="cover_photo"
                        placeholder=""
                        @change="uploadCoverImg"
                      />
                    </div>
                  </div> -->
                  <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label"
                      >Password</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="password"
                        class="form-control"
                        id="inputPassword"
                        v-model="form.password"
                        placeholder="Password (optional)"
                        :class="{
                          'is-invalid': form.errors.has('password'),
                        }"
                      />
                      <has-error :form="form" field="email"></has-error>
                    </div>
                  </div>
                  <!-- <div class="form-group row">
                        <div class="offset-sm-2 col-sm-10">
                          <div class="checkbox">
                            <label>
                              <input type="checkbox"> I agree to the <a href="#">terms and conditions</a>
                            </label>
                          </div>
                        </div>
                      </div> -->
                  <div class="form-group row">
                    <div class="offset-sm-2 col-sm-10">
                      <button
                        class="btn btn-success"
                        type="submit"
                        @click.prevent="updateProfileInfo"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <!-- /.tab-pane -->
            </div>
            <!-- /.tab-content -->
          </div>
          <!-- /.card-body -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      authUsers: {},
      form: new Form({
        id: "",
        name: "",
        email: "",
        password: "",
        type: "",
        bio: "",
        photo: "",
        // cover_photo: "",
        skills: "",
      }),
    };
  },

  mounted() {
    this.displayAuthUser();
    // this.getProfilePhoto();
    // this.popForm();
  },

  methods: {
    popForm(authUser) {
      this.form.fill(authUser);
    },

    displayAuthUser() {
      const url = window.location.origin + "/api/profile";
      // const url = window.location.origin + "/authUser";
      axios
        .get(url)
        .then((response) => {
          this.authUsers = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    uploadImg(e) {
      // console.log('file');
      let file = e.target.files[0];
      let reader = new FileReader();

      let limit = 1024 * 1024 * 2;
      if (file["size"] > limit) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "File size exceeded!",
        });

        return false;
      }

      reader.onloadend = (file) => {
        this.form.photo = reader.result;
      };
      reader.readAsDataURL(file);
    },

    // uploadCoverImg(e) {
    //   let file = e.target.files[0];
    //   let reader = new FileReader();

    //   let limit = 1024 * 1024 * 2;
    //   if (file["size"] > limit) {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: "File size exceeded!",
    //     });

    //     return false;
    //   }

    //   reader.onloadend = (file) => {
    //     this.form.cover_photo = reader.result;
    //   };
    //   reader.readAsDataURL(file);
    // },

    getProfilePhoto() {
      let photo =
        this.form.photo.length > 200
          ? this.form.photo
          : "images/profile/" + this.form.photo;
      return photo;
    },

    //   getCoverPhoto() {
    //   let cover_photo =
    //     this.form.cover_photo.length > 200
    //       ? this.cover_photo.photo
    //       : "images/profile/" + this.cover_photo.photo;
    //   return cover_photo;
    // },

    updateProfileInfo() {
      // const url = window.location.origin + "/updateInfo";
      const url = window.location.origin + "/api/profile";
      this.$Progress.start();
      this.form
        .put(url)
        .then(() => {
          this.$Progress.finish();
          Toast.fire({
            icon: "success",
            title: "Profile updated successfully",
          });
          this.displayAuthUser();
          // this.form.reset();
        })

        .catch(() => {
          this.$Progress.fail();
        });
    },
  },
};
</script>
