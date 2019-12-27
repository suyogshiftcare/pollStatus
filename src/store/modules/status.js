/**
 * status bar
 */
export default {
  namespaced: true,
  state: {
    color: "black",
    text: "Initial Text"
  },
  actions: {
    retriveStateData(context) {
      context.commit("RETRIEVE_DATA_FROM_BACKEND", {
        color: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
        text: Math.random()
          .toString(36)
          .substring(7)
      });
    }
  },
  mutations: {
    RETRIEVE_DATA_FROM_BACKEND(state, { color, text }) {
      state.color = color;
      state.text = text;
    }
  },

  getters: {
    statusColor: state => state.color,
    statusText: state => state.text
  }
};
