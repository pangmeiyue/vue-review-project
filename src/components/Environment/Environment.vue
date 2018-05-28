<template>
    <div>
        Environment
    </div>
</template>

<script>

    export default {
      name: 'Environment',

      data(){
          return {
            
          }
      },

      created:function(){
        
          cicd.captionBar.caption = [
              {text:"Configure Manage",url:""},
              {text:" System Configure",url:"/Environment"}
          ]
      },

      mounted:function(){

      },

      methods: {
 
      }
    }
</script>