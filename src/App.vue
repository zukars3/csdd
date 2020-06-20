<template>
  <div id="app">
    <div class="container">
      <HelloWorld msg="Hello" />
      <datetime v-model="date" type="datetime" use12hour="false" value-zone="local"></datetime>
      {{ date.substring(0, 19) }}
      <div class="row">
        <div class="col-md-1 line-1">
          <ul>
            <li v-for="row in line(1)" :key="row.id">{{ row.rn }}</li>
          </ul>
        </div>
        <div class="col-md-1 line-2">
          <ul>
            <li v-for="row in line(2)" :key="row.id">{{ row.rn }}</li>
          </ul>
        </div>
        <div class="col-md-1 line-3">
          <ul>
            <li v-for="row in line(3)" :key="row.id">{{ row.rn }}</li>
          </ul>
        </div>
        <div class="col-md-1 line-4">
          <ul>
            <li v-for="row in line(4)" :key="row.id">{{ row.rn }}</li>
          </ul>
        </div>
        <div class="col-md-1 line-5">
          <ul>
            <li v-for="row in line(5)" :key="row.id">{{ row.rn }}</li>
          </ul>
        </div>
        <div class="col-md-1 line-6">
          <ul>
            <li v-for="row in line(6)" :key="row.id">{{ row.rn }}</li>
          </ul>
        </div>
        <div class="col-md-1 line-7">
          <ul>
            <li v-for="row in line(7)" :key="row.id">{{ row.rn }}</li>
          </ul>
        </div>
        <div class="col-md-1 line-8">
          <ul>
            <li v-for="row in line(8)" :key="row.id">{{ row.rn }}</li>
          </ul>
        </div>
        <div class="col-md-1 line-9">
          <ul>
            <li v-for="row in line(9)" :key="row.id">{{ row.rn }}</li>
          </ul>
        </div>
        <div class="col-md-1 line-10">
          <ul>
            <li v-for="row in line(10)" :key="row.id">{{ row.rn }}</li>
          </ul>
        </div>
        <div class="col-md-1 line-11">
          <ul>
            <li v-for="row in line(11)" :key="row.id">{{ row.rn }}</li>
          </ul>
        </div>
        <div class="col-md-1 line-12">
          <ul>
            <li v-for="row in line(12)" :key="row.id">{{ row.rn }}</li>
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
import HelloWorld from "./components/HelloWorld.vue";
import json from "./json/db.json";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Datetime } from "vue-datetime";
// You need a specific loader for CSS files
import "vue-datetime/dist/vue-datetime.css";
import moment from 'moment';

export default {
  name: "App",
  components: {
    HelloWorld,
    Datetime
  },
  data() {
    return {
      myJson: json,
      date: ""
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
      return this.myJson["items"].filter(function(row) {
        //var datetime = new Date(date);
        var datetime = moment(date).format();
        console.log(datetime);
        return (row.datums >= datetime);
      });
    },
  }
};
</script>

<style>
</style>
