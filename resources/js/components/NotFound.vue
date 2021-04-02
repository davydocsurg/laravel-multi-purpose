<style lang="css" scoped>
.fs-error {
    font-size: 10rem;
}
.fs-error {
    font-size: 10rem !important;
}
.text-300 {
    color: #d8e2ef !important;
}
.display-1 {
    font-size: 4.29982rem;
    font-weight: 900;
    line-height: 1;
}
</style>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card text-center">
                    <div class="card-body p-4 p-sm-5">
                        <div class="display-1 text-300 fs-error">404</div>
                        <p
                            class="lead mt-4 text-800 text-sans-serif font-weight-semi-bold"
                        >
                            The page you're looking for is not found.
                        </p>
                        <hr />
                        <p>
                            Make sure the address is correct and that the page
                            hasn't moved. If you think this is a mistake,
                            <a href="mailto:info@exmaple.com">contact us</a>.
                        </p>
                        <router-link
                            class="btn btn-primary btn-sm mt-3"
                            to="/dashboard"
                            ><i class="fas fa-home"></i
                            ><!-- <span class="fas fa-home mr-2"></span> -->Take
                            me home</router-link
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
