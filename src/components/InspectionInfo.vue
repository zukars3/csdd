<template>
  <div>
    <Controls @selected="selectedDateTime = $event" />
    <Table :items="items" />
  </div>
</template>

<script>
import data from "../json/db.json";

import Controls from "./Controls.vue";
import Table from "./Table.vue";

export default {
  name: "InspectionInfo",
  components: {
    Controls,
    Table
  },
  data() {
    return {
      selectedDateTime: "",
      items: data.items
    };
  },
  computed: {
    allItems() {
      return data.items;
    },
    filteredByTime() {
      const filtered = this.allItems.filter(
        item =>
          (new Date(item.datums) <= this.selectedDateTime &&
            this.selectedDateTime <= new Date(item.s_datums)) ||
          (new Date(item.datums) <= this.selectedDateTime &&
            item.s_datums == null)
      );
      return filtered;
    }
  },
  watch: {
    selectedDateTime() {
      if (this.selectedDateTime) {
        this.items = this.filteredByTime;
      }
    }
  }
};
</script>