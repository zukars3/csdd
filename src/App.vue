<template>
  <div id="app">
    <notifications group="Removed" />
    <InspectionInfo />
  </div>
</template>

<script>
import InspectionInfo from "./components/InspectionInfo.vue";

export default {
  name: "App",
  components: {
    InspectionInfo
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.outer-container {
  display: flex;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto 20px;
}
</style>
