import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDWDWnNL22cB2gQTloF44CuWHkJRhoTg6s",
  authDomain: "my-first-project-19aef.firebaseapp.com",
  databaseURL: "https://my-first-project-19aef.firebaseio.com",
  projectId: "my-first-project-19aef",
  storageBucket: "my-first-project-19aef.appspot.com",
  messagingSenderId: "259979579762",
  appId: "1:259979579762:web:a3e9886826b79e5cbb0deb",
  measurementId: "G-TYECL5TN66"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
