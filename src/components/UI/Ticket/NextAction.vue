<template>
  <div class="next-action">
      <button v-if="checkIndex()" @click="back" class="btn">Back</button>
      <button type="button" @click="next" class="btn">Next</button>
  </div>
</template>

<script>

export default {
  name: 'NextAction',
  data () {
    return {
      index: 'one'
    }
  },
  async mounted () {
    this.verifyIndex()
  },
  methods: {
    verifyIndex () {
      const ele = document.getElementById('navi')
      if (!ele) return
      const items = ele.getElementsByTagName('li')
      items.forEach(element => {
        var att = element.getAttribute('name')
        var classNme = element.getAttribute('class')
        if (classNme === 'selected') {
          this.index = att
        }
      })
    },
    checkIndex () {
      this.verifyIndex()
      return this.index !== 'one'
    },
    next () {
      this.verifyIndex()
      this.$emit('nextChange')
    },
    back () {
      const ele = document.getElementById('navi')
      const items = ele.getElementsByTagName('li')
      items.forEach(element => {
        console.log(element)
      })
    }
  }
}
</script>
<style scoped>
.btn{
  background: #304E93;
  color: white;
  width: 110px;
  height: 40px;
  border-radius: 6px;
  font-weight: bolder;
  font-size: 1.3rem;
  cursor: pointer;
}
.btn:first-child{
  margin-right: 20px;
}
.next-action{
  margin-left: auto;
  margin-top: 64px;
  margin-right: 18px;
}
</style>
