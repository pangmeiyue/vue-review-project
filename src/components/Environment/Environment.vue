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
              {key:5,text:"Configure Manage",url:""},
              {key:6,text:" System Configure",url:"/Environment"}
          ]
      },

      mounted:function(){

      },

      methods: {
 
      }
    }
</script>