<template>
 <div class="multi-action">
           <button @click="action = !action" type="button" :class="{active: action}" class="action-button rotate-minus">
               <span class="icon"><font-awesome-icon icon="plus" /></span>
           </button>
           <ul class="actions drop-right">
             <li style="color: #db0d7f">
                <font-awesome-icon icon="paperclip" />
             </li>
              <li style="color: #0a7ac9"><font-awesome-icon icon="comment-dots" /></li>
              <li style="color: #15aabf"><font-awesome-icon icon="map-pin" /></li>
              <li style="color: #d6350d"><font-awesome-icon icon="file-pdf" /></li>
           </ul>
         </div>
</template>

<script>

export default {
  name: 'MultiActions',
  data () {
    return {
      action: false
    }
  }
}
</script>
<style scoped>
.action-button {
  padding: 0;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  line-height: 56px;
  text-align: center;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  border: 1px solid transparent;
  font-size: 0.875rem;
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
  background-color: #304E93;
  color: white;
  cursor: pointer;
  outline: none;
  position: relative;
  -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26);
          box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26);
}
.action-button .icon {
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 20px;
  display: inline-block;
  text-align: center;
  margin-top: 18px;
}
 .multi-action {
  display: inline-block;
  position: relative;
  width: 56px;
  height: 56px;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
}
.multi-action .action-button {
  position: absolute;
  z-index: 2;
  margin: 0 !important;
}
.multi-action .actions {
  position: absolute;
  list-style: none inside none;
  margin: 0 0 0 0;
  padding: 0;
  width: auto;
  float: left;
  background-color: transparent;
  top: 8px;
  left: 28px;
  z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.multi-action .actions li {
  position: absolute;
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26);
          box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  margin: 0;
  background: white;
  color: #646464;
  -webkit-transform: scale(0.2);
          transform: scale(0.2);
  line-height: 40px;
  font-size: 20px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  cursor: pointer;
}

.multi-action .actions li a {
  background: inherit;
  color: inherit;
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
}
.multi-action .actions li:active {
  -webkit-box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19), 0 8px 17px 0 rgba(0, 0, 0, 0.2);
          box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19), 0 8px 17px 0 rgba(0, 0, 0, 0.2);
}
.multi-action .actions.drop-right,
.multi-action .actions.drop-left,
.multi-action .actions.drop-down,
.multi-action .actions.drop-up {
  top: 8px!important;
  left: 32px!important;
}
.multi-action .action-button.active ~ .actions li {
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  -webkit-transform: scale(1);
          transform: scale(1);
}
.multi-action .action-button.active ~ .actions li:nth-child(1) {
  margin-top: -56px;
}
.multi-action .action-button.active ~ .actions li:nth-child(2) {
  margin-top: -104px;
}
.multi-action .action-button.active ~ .actions li:nth-child(3) {
  margin-top: -152px;
}
.multi-action .action-button.active ~ .actions li:nth-child(4) {
  margin-top: -200px;
}
.multi-action .action-button.active ~ .actions li:nth-child(5) {
  margin-top: -248px;
}
.multi-action .action-button.active ~ .actions li:nth-child(6) {
  margin-top: -296px;
}
.multi-action .action-button.active ~ .actions li:nth-child(7) {
  margin-top: -344px;
}
.multi-action .action-button.active ~ .actions li:nth-child(8) {
  margin-top: -392px;
}
.multi-action .action-button.active ~ .actions li:nth-child(9) {
  margin-top: -440px;
}
.multi-action .action-button.active ~ .actions li:nth-child(10) {
  margin-top: -488px;
}
.multi-action .action-button.active ~ .actions.drop-bottom li:nth-child(1),
.multi-action .action-button.active ~ .actions.drop-down li:nth-child(1) {
  margin-top: 56px;
}
.multi-action .action-button.active ~ .actions.drop-bottom li:nth-child(2),
.multi-action .action-button.active ~ .actions.drop-down li:nth-child(2) {
  margin-top: 104px;
}
.multi-action .action-button.active ~ .actions.drop-bottom li:nth-child(3),
.multi-action .action-button.active ~ .actions.drop-down li:nth-child(3) {
  margin-top: 152px;
}
.multi-action .action-button.active ~ .actions.drop-bottom li:nth-child(4),
.multi-action .action-button.active ~ .actions.drop-down li:nth-child(4) {
  margin-top: 200px;
}
.multi-action .action-button.active ~ .actions.drop-bottom li:nth-child(5),
.multi-action .action-button.active ~ .actions.drop-down li:nth-child(5) {
  margin-top: 248px;
}
.multi-action .action-button.active ~ .actions.drop-bottom li:nth-child(6),
.multi-action .action-button.active ~ .actions.drop-down li:nth-child(6) {
  margin-top: 296px;
}
.multi-action .action-button.active ~ .actions.drop-bottom li:nth-child(7),
.multi-action .action-button.active ~ .actions.drop-down li:nth-child(7) {
  margin-top: 344px;
}
.multi-action .action-button.active ~ .actions.drop-bottom li:nth-child(8),
.multi-action .action-button.active ~ .actions.drop-down li:nth-child(8) {
  margin-top: 392px;
}
.multi-action .action-button.active ~ .actions.drop-bottom li:nth-child(9),
.multi-action .action-button.active ~ .actions.drop-down li:nth-child(9) {
  margin-top: 440px;
}
.multi-action .action-button.active ~ .actions.drop-bottom li:nth-child(10),
.multi-action .action-button.active ~ .actions.drop-down li:nth-child(10) {
  margin-top: 488px;
}
.multi-action .action-button.active ~ .actions.drop-right li {
  margin-top: 0;
}
.multi-action .action-button.active ~ .actions.drop-right li:nth-child(1) {
  margin-left: 56px;
}
.multi-action .action-button.active ~ .actions.drop-right li:nth-child(2) {
  margin-left: 104px;
}
.multi-action .action-button.active ~ .actions.drop-right li:nth-child(3) {
  margin-left: 152px;
}
.multi-action .action-button.active ~ .actions.drop-right li:nth-child(4) {
  margin-left: 200px;
}
.multi-action .action-button.active ~ .actions.drop-right li:nth-child(5) {
  margin-left: 248px;
}
.multi-action .action-button.active ~ .actions.drop-right li:nth-child(6) {
  margin-left: 296px;
}
.multi-action .action-button.active ~ .actions.drop-right li:nth-child(7) {
  margin-left: 344px;
}
.multi-action .action-button.active ~ .actions.drop-right li:nth-child(8) {
  margin-left: 392px;
}
.multi-action .action-button.active ~ .actions.drop-right li:nth-child(9) {
  margin-left: 440px;
}
.multi-action .action-button.active ~ .actions.drop-right li:nth-child(10) {
  margin-left: 488px;
}
.multi-action .action-button.active ~ .actions.drop-left li {
  margin-top: 0;
}
.multi-action .action-button.active ~ .actions.drop-left li:nth-child(1) {
  margin-left: -56px;
}
.multi-action .action-button.active ~ .actions.drop-left li:nth-child(2) {
  margin-left: -104px;
}
.multi-action .action-button.active ~ .actions.drop-left li:nth-child(3) {
  margin-left: -152px;
}
.multi-action .action-button.active ~ .actions.drop-left li:nth-child(4) {
  margin-left: -200px;
}
.multi-action .action-button.active ~ .actions.drop-left li:nth-child(5) {
  margin-left: -248px;
}
.multi-action .action-button.active ~ .actions.drop-left li:nth-child(6) {
  margin-left: -296px;
}
.multi-action .action-button.active ~ .actions.drop-left li:nth-child(7) {
  margin-left: -344px;
}
.multi-action .action-button.active ~ .actions.drop-left li:nth-child(8) {
  margin-left: -392px;
}
.multi-action .action-button.active ~ .actions.drop-left li:nth-child(9) {
  margin-left: -440px;
}
.multi-action .action-button.active ~ .actions.drop-left li:nth-child(10) {
  margin-left: -488px;
}
.multi-action .action-button .icon {
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.multi-action .action-button.active.rotate .icon {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}
.multi-action .action-button.active.rotate-minus .icon {
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
}
</style>
