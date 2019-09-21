<template>
  <div class="container">
    <line-chart
      v-if="loaded==true"
      :chartdata="chartdata"
      :options="{responsive: true, maintainAspectRatio: true}"/>
  </div>
</template>

<script>
import LineChart from './Chart.vue'
import axios from "axios";

export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data: () => ({
    stats: {},
    labels: {},
    loaded: false,
    chartdata: null
  }),
  mounted() {
      axios
        .get(
          `https://api.nhle.com/stats/rest/skaters?isAggregate=false&reportType=basic&isGame=false&reportName=skatersummary&sort=[{%22property%22:%22points%22,%22direction%22:%22DESC%22},{%22property%22:%22goals%22,%22direction%22:%22DESC%22},{%22property%22:%22assists%22,%22direction%22:%22DESC%22}]&cayenneExp=leagueId=133%20and%20gameTypeId=2%20and%20seasonId%3E=20182019%20and%20seasonId%3C=20182019`
        )
        .then(res => {
          this.stats = res.data.data.map(d => d.stats);
          this.labels = res.data.data.map(d => d.playerName)
          console.log(res);
          this.loaded = true
        })
        .catch(e => {
          this.errors.push(e);
        });
  }
}
</script>