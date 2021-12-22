<template>
  <ion-page>
    <TopBar />
    <ion-content :fullscreen="true">
      <ion-header collapse="condense"> </ion-header>

      <div id="container">
        <strong class="capitalize">{{ $route.params.id }}</strong>
        <p>Test</p>
        <ion-grid>
          <ion-row>
            <ion-col
              sizeXl="3"
              sizeLg="4"
              sizeMd="4"
              sizeSm="12"
              sizeXs="12"
              v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
              :key="item"
            >
              <FeedBox />
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import TopBar from "../components/Layout/TopBar.vue";
import FeedBox from "../components/Feed/FeedBox.vue";
export default {
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    FeedBox,
    TopBar,
  },
};
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
