import Vue from 'vue'
export default new Vue({
  data() {
    return {
			scrollTop: 0
    }
	},
	methods: {
		returnToEnvironment(router){
			console.log('123')
			router.push({path: '/Environment'})
		}
	}
})

