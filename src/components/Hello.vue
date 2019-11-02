<template>
  <div class="wrapper">
    <div class="opti-container">
      <div class="col-1 player-list">
        <md-card v-for="stat of stats" :key="stat.playerId" class="list" md-with-hover>
          <p class="player-name">
            {{ stat.playerName }} -
            <span>{{stat.playerPositionCode}}</span>
            <span> - PPG: {{stat.pointsPerGame}}</span>
          </p>
          <md-button class="md-icon-button md-primary add-btn">
            <md-icon>add</md-icon>
          </md-button>
        </md-card>
      </div>

      <div class="col-2">
        <md-card md-with-hover class="card">
          <md-card-header class="card-heading">
            <div class="md-title" style="flex: 1">
              My Lineups
              <span>(1/1)</span>
            </div>
            <md-button class="md-raised md-primary">
              <md-icon>sports_hockey</md-icon>Optimize
            </md-button>
          </md-card-header>

          <md-list class="md-triple-line">

            <md-divider class="md-inset"></md-divider>
            <md-list-item>
              <div>F</div>

              <div class="md-list-item-text">
                <span></span>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon class="md-primary">indeterminate_check_box</md-icon>
              </md-button>
            </md-list-item>

            <md-divider class="md-inset"></md-divider>
            <md-list-item>
              <div>F</div>

              <div class="md-list-item-text">
                <span></span>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon class="md-primary">indeterminate_check_box</md-icon>
              </md-button>
            </md-list-item>

            <md-divider class="md-inset"></md-divider>
            <md-list-item>
              <div>F</div>

              <div class="md-list-item-text">
                <span></span>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon class="md-primary">indeterminate_check_box</md-icon>
              </md-button>
            </md-list-item>

            <md-divider class="md-inset"></md-divider>
            <md-list-item>
              <div>F</div>

              <div class="md-list-item-text">
                <span></span>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon class="md-primary">indeterminate_check_box</md-icon>
              </md-button>
            </md-list-item>

            <md-divider class="md-inset"></md-divider>
            <md-list-item>
              <div>D</div>

              <div class="md-list-item-text">
                <span></span>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon class="md-primary">indeterminate_check_box</md-icon>
              </md-button>
            </md-list-item>

            <md-divider class="md-inset"></md-divider>
            <md-list-item>
              <div>D</div>

              <div class="md-list-item-text">
                <span></span>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon class="md-primary">indeterminate_check_box</md-icon>
              </md-button>
            </md-list-item>

            <md-divider class="md-inset"></md-divider>
            <md-list-item>
              <div>G</div>

              <div class="md-list-item-text">
                <span></span>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon class="md-primary">indeterminate_check_box</md-icon>
              </md-button>
            </md-list-item>

            <md-divider class="md-inset"></md-divider>
          </md-list>

          <md-card-actions>
            <md-button class="md-raised md-accent">Clear</md-button>
            <md-button class="md-raised md-primary">
              <md-icon>sports_hockey</md-icon>Optimize
            </md-button>
          </md-card-actions>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "hello",
  data() {
    return {
      stats: {},
      errors: []
    };
  },
  created() {
    axios
      .get(
        `https://api.nhle.com/stats/rest/skaters?isAggregate=false&reportType=basic&isGame=false&reportName=skatersummary&sort=[{%22property%22:%22points%22,%22direction%22:%22DESC%22},{%22property%22:%22goals%22,%22direction%22:%22DESC%22},{%22property%22:%22assists%22,%22direction%22:%22DESC%22}]&cayenneExp=leagueId=133%20and%20gameTypeId=2%20and%20seasonId%3E=20182019%20and%20seasonId%3C=20182019`
      )
      .then(res => {
        this.stats = res.data.data;
        console.log(res);
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style>
.opti-container {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
.col-1 {
  max-width: 20rem;
}
.list {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
.card-heading {
  display: flex;
  justify-content: space-between;
}
.player-name {
  padding-right: 1.5rem;
  padding-left: 1rem;
}
.player-list {
  margin-left: 1rem;
}
.col-2 {
  max-width: 50rem;
  min-width: 35rem;
  margin-right: 2rem;
  margin-top: 0;
}
.md-list-item-text {
  padding-left: 4rem;
}
.md-list.md-triple-line .md-list-item-content {
  min-height: initial;
}
</style>


