<template>
    <div class="part" :class="{marginRight: showLastPart}">
        <div class="part-wrapper" v-if="num_parts > 0" >
            <div v-for="part in partArray" :key="part.id" class="part-wheel">
                <!-- p -->
            </div>
            <!-- {{remainder}} -->
            <!-- <div class="remainder-wheel" :class="{show: remainder,quarterCircleBottomRight: remainder == 0.25, halfCircleLeft: remainder == 0.5, 'three-quarters-circle': remainder == 0.75}"> -->
            <div class="remainder-wheel" :class="{show: remainder,quarterCircleBottomRight: remainder == 0.25, halfCircleLeft: remainder == 0.5, threeQuartersRight: remainder == 0.75}">

            </div>
            <span v-if="showLastPart">|</span>
            
        </div>            
    </div>
</template>

<script>
export default {
    name: 'Parts',
    props: {
        num_parts: Number,
        index: Number,
        length: Number
    },
    computed: {
        partArray: function(){
            var parts = []
            console.log('num parts', this.num_parts)
            var num = 0
            if(this.num_parts.toString().includes('.')){
                num = Number(this.num_parts.toString().split('.')[0])
            } else {
                num = this.num_parts
            }
            for(var i = 0; i < num; i++){
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
        },
        showLastPart: function(){
            return this.index < (this.length - 1)
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
    /* margin-right: 15px; */
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
.remainder-wheel {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    /* display: inline-block; */
    display: none;
    background-color: black;
    margin-right: 15px;
}
.halfCircleLeft {
     /* height:90px;
     width:45px; */
     height: 10px;
     width: 5px;
     border-radius: 90px 0 0 90px;
     background:black;
}
.quarterCircleBottomRight{
     /* width:100px; 
     height:100px;  */
     width: 5px;
     height: 5px;
     border:1px solid #000; 
     background: black;
     border-radius: 0 0 0 90px;
}
.threeQuartersRight{
     /* width:100px; 
     height:100px;  */
     width: 0px;
     height: 0px;
     /* width: 5px;
     height: 5px; */
     /* border:1px solid #000;  */
     /* background: black; */
     /* border-radius: 0 90px 90px 90px; */
     background: transparent;
    border-right: 5px solid black;
    border-top: 5px solid transparent;
    border-left: 5px solid black;
    border-bottom: 5px solid black;
    border-radius: 5px;
    transform: rotate(45deg)
}
.three-quarters-circle {
  width: 0px;
  height: 0px;
  border-radius: 100px;
  border: 100px solid aqua;
  border-top-color: transparent;
  -webkit-transform: rotate(45deg);
}
.show {
    display: inline-block;
}
.marginRight {
    margin-right: 15px;
}
</style>