<template>
    <div class="text-center">
       <h2 class="text-2xl font-bold">{{text}}</h2>
       <div class="text-3xl mt-4 mb-10">
           {{ timeFormatted }}
        </div> 
    </div>
</template>

<script>

import moment from 'moment';

export default {

    name: 'DataTitle',

    props: ['text', 'dataDate'],
    
    computed: {

        timeFormatted(){

            return moment(this.dataDate).format('MMMM Do YYYY, h:mm:ss a');

        }
    }
}
</script>