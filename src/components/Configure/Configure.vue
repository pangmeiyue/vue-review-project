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
              {key:3,text:"Configure Manage",url:""},
              {key:4,text:"Project Configure",url:"/Configure"}
          ]
      },

      mounted:function(){

      },

      methods: {
 
      }
    }
</script>

