import { createApp } from './main';
import './plugins/plugins-client/vue-toasts';
import './plugins/plugins-client/vue-progressbar';
import './plugins/plugins-client/ezNotify';

const { app, router, store } = createApp();

if (window.__INITIAL_STATE__) {
	store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
  //console.log('entry-client.js onReady');
	app.$mount('#app');
});