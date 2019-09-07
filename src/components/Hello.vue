<template>
<div>
  <h4>RotoRink Lineup Optimizer</h4>
   <div v-for="stat of stats" :key="stat.id">
      <p>
        {{ stat.fullName }} -
        <span>{{ stat.primaryPosition.name }} ({{ stat.primaryPosition.abbreviation }})</span>
      </p>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import draggable from 'vuedraggable';

export default {
  name: 'hello',
  components: {
    draggable
  },
  data () {
    return {
      stats: [],
      errors: []
    }
  },
   created() {
    axios
      .get(`https://statsapi.web.nhl.com/api/v1/draft/prospects`)
      .then(res => {
        this.stats = res.data.prospects;
        console.log(res);
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
}
</script>

<style scoped>

a {
  color: #35495E;
}
</style>


