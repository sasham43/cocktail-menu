<template>
    <div class="part" >
        <div class="part-wrapper" v-if="num_parts > 0" >
            <div v-for="part in partArray" :key="part.id" class="part-wheel">
                <!-- p -->
            </div>
            {{remainder}}
            <span>|</span>
            
        </div>            
    </div>
</template>

<script>
export default {
    name: 'Parts',
    props: {
        num_parts: Number
    },
    computed: {
        partArray: function(){
            var parts = []
            for(var i = 0; i < this.num_parts; i++){
                parts.push({
                    id: i
                })
            }
            return parts
        },
        remainder: function(){
            if(this.num_parts.toString().includes('.')){
                // var push = false
                // var remainder_array = []
                var remainder = this.num_parts.toString().split('.')[1]
                // console.log('remainder array', remainder_array, this.num_parts.toString().split('.'))
                var parsed = parseFloat(`.${remainder}`)
                return parsed
            } else {
                return null
            }
        }
    }
}
</script>

<style scoped>
.part-wrapper {
    display: inline-block;
}
.part {
    display: inline-block;
    margin-right: 15px;
}
.part-wheel {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    border-color: black;
    background-color: black;
    display: inline-block;
    margin-right: 15px;
}
</style>