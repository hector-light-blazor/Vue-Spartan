<template>
  <div class="navbar">
      <div class="wrap">
         <span>Customer Info</span>
         <span>Premises Info</span>
         <span>LV</span>
      </div>
      <ul id='navi' @proceed="proceed" @handle="selected">
        <li @click="setSelected" class="selected" :class="{active: select.two}" name="one">
          1
        </li>
        <li @click="setSelected" :class="{selected: select.two, active: select.three}" name="two" >2</li>
        <li @click="setSelected" :class="{selected: select.three}" name="three" >3</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'NavigationBar',
  data () {
    return {
      name: '',
      select: { one: false, two: false, three: false }
    }
  },
  methods: {
    selected (event) {
      this.parse(event.detail)
    },
    setSelected (event) {
      const li = event.target
      this.name = li.getAttribute('name')
      this.$emit('navigationChange', this.name)
    },
    proceed () {
      this.parse(this.name)
    },
    parse (name) {
      if (name === 'one') {
        for (const key in this.select) {
          this.select[key] = false
        }
      } else if (name === 'two') {
        for (const key in this.select) {
          if (key === 'three') {
            this.select[key] = false
            break
          }
          this.select[key] = true
        }
      } else {
        for (const key in this.select) {
          this.select[key] = true
        }
      }
    }
  }
}
</script>
<style scoped>
.one{
  position: relative;
  bottom: 80px;
  font-size: 1.2rem;
  width: 20px;
  border: 1px solid red;
}
.navbar{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 90px;
    width: 80%;
    margin: 0 auto;
    height: 120px;
    text-align: center;
}
.wrap{
  display: grid;
  grid-template-columns: auto auto auto;
}

.selected{
    border:1px solid #304E93;
}

ul{
    list-style: none inside none;
    margin: 0;
    padding: 0;
    width: 100%;
}
ul > li {
    margin-left: 14.8%;
    line-height: 80px;
    width: 80px;
    height: 80px;
    color: #646464;
    cursor: pointer;
    font-weight: bolder;
    font-size: 1.9rem;
    background: white;
    border-radius: 50%;
    float: left;
    box-shadow: 0 2px 10px 0 rgb(0 0 0 / 16%), 0 2px 5px 0 rgb(0 0 0 / 26%);
}

li:nth-child(2){
  margin-left: 29.7%;
}

li:nth-child(3){
  margin-left: 25.3%;
}

ul > li.active:not(li:last-child)::after {
    content: '';
    position: absolute;
    margin-left:32px;
    margin-top: 40px;
    background: #05173F;
    border: 2px solid #05173F;
}
ul > li.active:nth-child(1)::after{
   width: 20.2%;
}

ul > li.active:nth-child(2)::after{
   width: 17.3%;
}

</style>
