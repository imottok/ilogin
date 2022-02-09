import ezNotifyInterface from './ezNotifyInterface.vue';

const defaultOptions = {
    width: 400,
    icon: '',
    iconColor : 'orange',
    type : 'alert',
    text: ""
}

export default {
  install (Vue, vuetify, options) {
    const Construct = Vue.extend(ezNotifyInterface);
    const Instatnce = new Construct({
      vuetify: vuetify,
      data: {
        options: Object.assign(defaultOptions, options)
      }
    });
    Vue.prototype.$nextTick(() => {
      Vue.prototype.$ezNotify = Instatnce.$mount();
      document.getElementById('app').appendChild(Instatnce.$el);
    })
  }
}