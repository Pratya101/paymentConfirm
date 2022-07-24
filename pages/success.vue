<template>
  <div align="center">
    <v-card max-width="500" class="mt-5" rounded="xl" elevation="4">
      <v-card-title class="d-flex flex-column pt-0">
        <lottie :width="200" :height="200" :options="lottieOptions" />
        <h2 class="set-font">ทำรายการเรียบร้อย</h2>
      </v-card-title>
    </v-card>
  </div>
</template>
<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/assets/paymentSuccess.json";
export default {
  components: {
    lottie,
  },
  data() {
    return {
      anim: null, // for saving the reference to the animation
      lottieOptions: { animationData: animationData.default },
    };
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Niramit:wght@300;400;500;600;700&display=swap");
.set-font {
  font-family: "Niramit", sans-serif;
}
.set-font-title {
  font-size: 20px;
  font-family: "Niramit", sans-serif;
  font-weight: bold;
}
.set-font-normal {
  font-family: "Niramit", sans-serif;
  font-size: 20px;
}
</style>
