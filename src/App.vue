<template>
  <div id="app">
    <div class="container">
      <datetime v-model="date" type="datetime" use12hour="false" value-zone="local"></datetime>
      {{ date.substring(0, 19) }}
      <div class="row">
        <div class="col-md-1 line-1">
          <ul class="table-column">
            <li class="table-data" v-for="row in line(1)" :key="row.id">{{ row.rn }}</li>
          </ul>
        </div>
        <div class="col-md-1 line-2">
          <ul class="table-column">
            <li class="table-data" v-for="row in line(2)" :key="row.id">{{ row.rn }}</li>
          </ul>
        </div>
        <div class="col-md-1 line-3">
          <ul class="table-column">
            <li class="table-data" v-for="row in line(3)" :key="row.id">{{ row.rn }}</li>
          </ul>
        </div>
        <div class="col-md-1 line-4">
          <ul class="table-column">
            <li class="table-data" v-for="row in line(4)" :key="row.id">{{ row.rn }}</li>
          </ul>
        </div>
        <div class="col-md-1 line-5">
          <ul class="table-column">
            <li class="table-data" v-for="row in line(5)" :key="row.id">{{ row.rn }}</li>
          </ul>
        </div>
        <div class="col-md-1 line-6">
          <ul class="table-column">
            <li class="table-data" v-for="row in line(6)" :key="row.id">{{ row.rn }}</li>
          </ul>
        </div>
        <div class="col-md-1 line-7">
          <ul class="table-column">
            <li class="table-data" v-for="row in line(7)" :key="row.id">{{ row.rn }}</li>
          </ul>
        </div>
        <div class="col-md-1 line-8">
          <ul class="table-column">
            <li class="table-data" v-for="row in line(8)" :key="row.id">{{ row.rn }}</li>
          </ul>
        </div>
        <div class="col-md-1 line-9">
          <ul class="table-column">
            <li class="table-data" v-for="row in line(9)" :key="row.id">{{ row.rn }}</li>
          </ul>
        </div>
        <div class="col-md-1 line-10">
          <ul class="table-column">
            <li class="table-data" v-for="row in line(10)" :key="row.id">{{ row.rn }}</li>
          </ul>
        </div>
        <div class="col-md-1 line-11">
          <ul class="table-column">
            <li class="table-data" v-for="row in line(11)" :key="row.id">{{ row.rn }}</li>
          </ul>
        </div>
        <div class="col-md-1 line-12">
          <ul class="table-column">
            <li class="table-data" v-for="row in line(12)" :key="row.id">{{ row.rn }}</li>
          </ul>
        </div>
      </div>
      <table id="firstTable">
        <thead>
          <tr>
            <th>id</th>
            <th>numurs</th>
            <th>rn</th>
            <th>datums</th>
            <th>s_datums</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row) in myJson['items']" :key="row.id">
            <td>{{ row.id }}</td>
            <td>{{ row.numurs }}</td>
            <td>{{ row.rn }}</td>
            <td>{{ row.datums }}</td>
            <td>{{ row.s_datums }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import json from "./json/db.json";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Datetime } from "vue-datetime";
// You need a specific loader for CSS files
import "vue-datetime/dist/vue-datetime.css";
import moment from "moment";

export default {
  name: "App",
  components: {
    Datetime
  },
  data() {
    return {
      myJson: json,
      date: "2020-06-16T10:07:00 "
    };
  },
  methods: {
    line(num) {
      var data = this.filter(this.date);
      return data.filter(function(row) {
        return row.numurs == num;
      });
    },
    filter(date) {
      return this.myJson["items"]
        .filter(function(row) {
          var datetime = moment(date).format();
          console.log(datetime);
          return datetime >= row.datums;
        })
        .filter(function(row) {
          var datetime = moment(date).format();
          console.log(datetime);
          return datetime <= row.s_datums;
        });
    }
  }
};
</script>

<style>
.table-column {
  border: 1px solid;
  padding-right: 8px;
  padding-left: 20px;
  display: table-row;
}

.table-data {
  list-style-type: none;
  padding-right: 10px;
  padding-left: 10px;

  border: 1px solid;
}
</style>
