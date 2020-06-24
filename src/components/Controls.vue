<template>
  <div class="outer-container controls">
    <label for="date-input" class="sr-only">Izvēlēties datumu</label>
    <b-input-group class="col-3 date">
      <b-input-group-append>
        <b-form-datepicker
          v-model="date"
          :max="today()"
          right
          size="sm"
          locale="lv"
          :start-weekday="1"
          aria-controls="date-input"
          placeholder="Izvēlieties datumu"
        ></b-form-datepicker>
      </b-input-group-append>
    </b-input-group>

    <label for="time-input" class="sr-only">Izvēlēties laiku</label>
    <b-input-group class="col-3 time">
      <b-input-group-append>
        <b-form-timepicker
          v-model="time"
          right
          show-seconds
          size="sm"
          locale="lv"
          aria-controls="time-input"
          placeholder="Izvēlieties laiku"
        ></b-form-timepicker>
      </b-input-group-append>
      <b-button class="show" variant="success" size="sm" @click="filteredByTime()">Parādīt</b-button>
    </b-input-group>
    
  </div>
</template>

<script>
export default {
  name: "Controls",
  data() {
    return { time: "08:13:14", date: "2020-06-17" };
  },
  methods: {
    today() {
      return new Date().toISOString().split("T")[0];
    },
    filteredByTime() {
      if (this.date && this.time) {
        this.$emit("selected", new Date(this.date + "T" + this.time));
      }
      // else warn about empty time
    }
  },
  created() {
      this.filteredByTime()
  }
};
</script>

<style>
.controls {
    padding: 1%
}

.input-group.col-3 {
    padding-right: 20px;
}

.input-group.col-3.date {
    width: 25%;
}

.input-group.col-3.time {
    width: 15%;
    margin-right: -35px;
}

.show {
    margin-left: 30px;
    height: 30px;
}
</style>