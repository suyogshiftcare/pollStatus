<template>
  <div class="header wrapper">
    <div class="menu-wrapper">
      <ul class="menu">
        <li>Home</li>
        <li :style="`color: ${statusColor}`">{{statusText}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import * as authService from "../services/auth.service";

import { mapState, mapGetters } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      polling: null
    };
  },
  computed: {
    ...mapGetters({
      statusText: "status/statusText",
      statusColor: "status/statusColor"
    })
  },
  methods: {
    created() {
      this.pollData();
    },
    beforeDestroy() {
      clearInterval(this.polling);
    },
    pollData() {
      this.polling = setInterval(() => {
        this.$store.dispatch("status/retriveStateData");
      }, 3000);
    }
  },
  created() {
    this.pollData();
  }
};
</script>

<style lang="scss" scoped>
.header {
  z-index: 1;
  padding: 20px 0;
  position: relative;

  .is-active {
    color: #e01b3c;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  .menu-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu {
    font-size: 25px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      padding: 15px;
    }

    &.side {
      font-size: 15px;

      .logout-button {
        cursor: pointer;
      }
    }
  }
}
</style>
