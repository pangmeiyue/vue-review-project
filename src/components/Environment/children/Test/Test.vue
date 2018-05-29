<template>
    <div>
        Test
    </div>
</template>

<script>

    export default {
      name: 'Test',

      data(){
          return {
            
          }
      },

      created:function(){
         
          cicd.captionBar.caption = [
              {key:3,text:"Configure Manage",url:""},
              {key:4,text:"Project Configure",url:"/Test"}
          ]
      },

      mounted:function(){

      },

      methods: {
 
      }
    }
</script>

