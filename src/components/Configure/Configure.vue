<template>
    <div>
        Configure
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
              {text:"Project Configure",url:"/Configure"}
          ]
      },

      mounted:function(){

      },

      methods: {
 
      }
    }
</script>

