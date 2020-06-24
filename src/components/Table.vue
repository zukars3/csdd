<template>
  <div class="outer-container table-container">
    <div class="hor-title">Līnijas numurs</div>
    <div class="table">
      <div class="vert-title">
        <span>Vieta rindā</span>
      </div>
      <div class="table-column">
        <div class="queue" v-for="num in sideRows" :key="num">{{ num }}</div>
      </div>
      <div class="table-column" v-for="colTitle in columns" :key="colTitle">
        {{ colTitle }}
        <div class="col-data" v-for="(colData, index) in sortByLine[colTitle-1]" :key="index">
          <div class="cell" v-for="index in rows" :key="index">
            <a
              href="javascript:;"
              class="vehicle"
              v-on:click="removeVehicle(colData[index])"
            >{{ colData[index] ? colData[index].rn : "" }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    items: {}
  },
  data() {
    return {
      columns: [...Array(13).keys()].slice(1),
      sideRows: [...Array(15).keys()],
      rows: [...Array(14).keys()]
    };
  },
  computed: {
    sortByLine() {
      let items = [];
      this.columns.forEach(element => {
        items.push({
          [element]: this.items.filter(item => item.numurs === element)
        });
      });
      return items;
    }
  },
  methods: {
    removeVehicle(data) {
      if (data.s_datums == null) {
        if (confirm("Vai tiešām vēlaties izņemt " + data.rn + " no rindas?")) {
          console.log("sucess");
          this.$notify({
            group: "Removed",
            type: "warn",
            title: "Svarīgs paziņojums",
            text: "Spēkrats ar numurzīmi " + data.rn + " ir noņemts no rindas!"
          });
        }
      } else {
        if (confirm(data.rn)) {
          console.log("sucess");
        }
      }
    }
  }
};
</script>

<style>
.table-container {
  display: flex;
  flex-direction: column;
  position: relative;
}

.table {
  display: flex;
}

.table-column {
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: center;
  box-shadow: 1px 0 0 0 #888, 0 1px 0 0 #888, 1px 1px 0 0 #888,
    1px 0 0 0 #888 inset, 0 1px 0 0 #888 inset;
}

.hor-title {
  text-align: center;
}

.vert-title {
  display: flex;
  align-items: center;
  max-width: 30px;
}

.vert-title span {
  transform: rotate(-90deg);
  left: -50px;
  position: absolute;
}

.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  box-shadow: 1px 0 0 0 #888, 0 1px 0 0 #888, 1px 1px 0 0 #888,
    1px 0 0 0 #888 inset, 0 1px 0 0 #888 inset;
}

.table-column:nth-child(2) {
  max-width: 40px;
}

.queue:not(:first-child) {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  box-shadow: 1px 0 0 0 #888, 0 1px 0 0 #888, 1px 1px 0 0 #888,
    1px 0 0 0 #888 inset, 0 1px 0 0 #888 inset;
}

.queue:first-of-type {
  visibility: hidden;
}

.vehicle {
  color: black;
}

.vehicle:visited {
  color: black;
}

.vehicle:hover {
  color: black;
  text-decoration: none;
}

.vehicle:active {
  color: black;
}
</style>