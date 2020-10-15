<template>
  <q-page id="principal" class="flex flex-center ">
    <div
      class="text-h3 text-weight-bolder"
      style="color:white; margin-top:-220px"
    >
      <div class="titulo" style="text-align: left; max-width:80%">
        Descubrí el futuro de la economía digital
      </div>

      <div
        class="text-h5 text-weight-light subtitulo"
        style="text-align: left; margin-top:20px; max-width:80%"
      >
        Comprá y vendé criptomonedas de la manera más simple.
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Home",
  created() {}
};
</script>

<style scoped>
#principal {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: top;
  background-image: url("~assets/bg-pc.png");
  min-height: 100%;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 0px;
}

@media screen and (max-width: 600px) {
  /* Specific to this particular image */
  #principal {
    background-image: url("~assets/bg-mobile.png");
  }
  .titulo {
    margin: -20px auto;
    padding: 0 10px;
    font-size: 2rem;
    line-height: 50px;
  }
  .subtitulo {
    margin: 0 auto;
    padding: 0 10px;
    font-size: 0.9rem;
    max-width: 90%;
  }
}
</style>
