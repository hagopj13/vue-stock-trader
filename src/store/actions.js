import Vue from 'vue';

export const loadData = context => {
  Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        const { stocks, funds, stockPortfolio } = data;
        context.commit('SET_STOCKS', stocks);
        context.commit('SET_PORTFOLIO', { funds, stockPortfolio });
      }
    });
}