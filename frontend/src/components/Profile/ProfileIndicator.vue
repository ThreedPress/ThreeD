<template>
  <ion-item>
    <ion-avatar slot="start">
      <img
        src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
      />
    </ion-avatar>
    <ion-label class="ion-hide-sm-down"> username </ion-label>
  </ion-item>
</template>

<script lang="ts">
import { IonItem, IonAvatar, IonLabel } from "@ionic/vue";

export default {
  components: {
    IonItem,
    IonAvatar,
    IonLabel,
  },
};
</script>
