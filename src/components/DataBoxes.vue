<template>
    <div class="grid md:grid-col-2 gap-4">
        <div class="shadow-md bg-blue-200 p-10 text-center rounded">
            <h3 class="text-3xl font-bold mb-4 text-ble-900">
                <div class="text-2xl mb-4">
                    <span class="font-bold">New: {{ numberWithComas(stats.NewConfirmed) }}</span>
                    
                </div>

                <div class="text-2xl mb-4">
                    <span class="font-bold">Total Confirmed: {{ numberWithComas(stats.TotalConfirmed) }}</span>
                    
                </div>

            </h3>
        </div>

         <div class="shadow-md bg-blue-200 p-10 text-center rounded">
            <h3 class="text-3xl font-bold mb-4 text-ble-900">
                <div class="text-2xl mb-4">
                    <span class="font-bold">New Deaths: {{ numberWithComas(stats.NewDeaths) }}</span>
                    
                </div>

                <div class="text-2xl mb-4">
                    <span class="font-bold">Total Deaths: {{ numberWithComas(stats.TotalDeaths) }}</span>
                    
                </div>

            </h3>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'DataBoxes',
        props: ['stats'],

        methods:{
            numberWithComas(x){
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }
        }
    }
</script>