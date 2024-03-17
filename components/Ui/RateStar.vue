<template >
    <div class="">
        <fieldset class="rating">
            <input type="radio" id="star5" name="rating" value="5" @change="handleStar($event.target.value)"/><label class = "full" for="star5" title="Awesome - 5 stars"></label>
            <!-- <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label> -->
            <input type="radio" id="star4" name="rating" value="4" @change="handleStar($event.target.value)"/><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
            <!-- <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label> -->
            <input type="radio" id="star3" name="rating" value="3" @change="handleStar($event.target.value)"/><label class = "full" for="star3" title="Meh - 3 stars"></label>
            <!-- <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label> -->
            <input type="radio" id="star2" name="rating" value="2" @change="handleStar($event.target.value)"/><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
            <!-- <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label> -->
            <input type="radio" id="star1" name="rating" value="1" @change="handleStar($event.target.value)"/><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
            <!-- <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label> -->
        </fieldset>
    </div>
</template>
<script setup>
import { defineEmits, ref } from 'vue';
const emits = defineEmits(['update:star'])
const handleStar = (event) => {
    emits('update:star', event)
}



</script>

<style scoped>
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css);

.rating { 
  border: none;
  float: left;
}

.rating > input { display: none; } 
.rating > label:before { 
  margin-right: 4px;
  font-size: 1.10em;
  font-family: FontAwesome;
  display: inline-block;
  content: "\f005";
}


.rating > .half:before { 
  content: "\f006";
  font-size: 0;
  position: absolute;
}

.rating > label { 
  color: #ddd; 
 float: right; 
}



/***** CSS Magic to Highlight Stars on Hover *****/

.rating > input:checked ~ label, /* show gold star when clicked */
.rating:not(:checked) > label:hover, /* hover current star */
.rating:not(:checked) > label:hover ~ label { color: #FFD700;  } /* hover previous stars in list */

.rating > input:checked + label:hover, /* hover current star when changing rating */
.rating > input:checked ~ label:hover,
.rating > label:hover ~ input:checked ~ label, /* lighten current selection */
.rating > input:checked ~ label:hover ~ label { color: #FFED85;  } 
/* .rating_bar {
  width: 100px;
  height: 100px;
  margin: 4px 175px !important;
  display: inline-block;
  display: inline;
  unicode-bidi: bidi-override;
  direction: rtl;
}

.rating_bar>span:before {
  content: '';
  color: #c7c5c5;
  height: 100px;
  width: 100px;
  cursor: pointer;
  font-size: 3em;
}

.rating_bar>span:hover:before,
.rating_bar span:hover~span:before {
  color: #4bce32;
}
     */
</style>