<template>
    <div class="part" >
        <div class="part-wrapper" v-if="num_parts > 0" >
            <div v-for="part in partArray" :key="part.id" class="part-wheel">
                <!-- p -->
            </div>
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
            // console.log(this.num_parts, new Array(this.num_parts))
            // return new Array(this.num_parts).map((p,i)=>{
            //     console.log('p', p,i)
            //     return {id:i}
            //     // part: 
            // })
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