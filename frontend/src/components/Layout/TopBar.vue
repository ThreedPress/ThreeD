<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-row>
        <ion-col>
          <ion-searchbar></ion-searchbar>
        </ion-col>
        <ion-col size="2">
          <profile-indicator class="ion-no-padding" />
        </ion-col>
      </ion-row>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonToolbar,
  IonRow,
  IonCol,
} from "@ionic/vue";
import ProfileIndicator from "../Profile/ProfileIndicator.vue";
export default {
  components: {
    IonButtons,
    IonHeader,
    IonMenuButton,
    IonToolbar,
    IonRow,
    IonCol,
    ProfileIndicator,
  },
};
</script>
