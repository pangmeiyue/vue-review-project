<template>
    <div>
        projects
    </div>
</template>

<script>

    export default {
      name: 'Configure',

      data(){
          return {
            
          }
      },

      created:function(){
         
        cicd.captionBar.caption = [
            {text:"Configure Manage",url:""},
            {text:"Project List",url:"/Projects"}
        ]
      },

      mounted:function(){

      },

      methods: {
 
      }
    }
</script>