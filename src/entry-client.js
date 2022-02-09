import { createApp } from './main';
import './plugins/plugins-client/vue-toasts';

const { app, router, store } = createApp();

if (window.__INITIAL_STATE__) {
	store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
	app.$mount('#app');
});