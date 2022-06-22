import Vue from 'vue'
import { mapGetters } from 'vuex'

Vue.mixin({
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      userData: 'getUserData',
    })
  },
  methods: {
    getUserInfo () {
      return this.userData ? this.userData : null
    }
  }
})
