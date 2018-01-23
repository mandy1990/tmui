<template>
  <div>
    <div 
      class="showtext"
      v-show="hastext" 
      @click="openPicker">
      <text :class="[checkedIndex==-1?'nopicked':'']">{{`${list[checkedIndex]?list[checkedIndex].title:'请选择'}`}}</text>
    </div>
    <wxc-popup 
      :height="height"
      :show="isShow"
      :pos="pos"
      @wxcPopupOverlayClicked="popupOverlayAutoClick">
      <scroller class="scroller">
        <wxc-radio 
          ref="radios"
          :list="list"
          :config="config"
          @wxcRadioListChecked="wxcRadioListChecked">
        </wxc-radio>
      </scroller>
    </wxc-popup>
  </div>
</template>
<script>
import { WxcPopup, WxcRadio } from "weex-ui";
export default {
  props: {
    hastext: {
      type: Boolean
    },
    height: {
      type: Number,
      default: 500
    },
    isShow: {
      type: Boolean,
      default: false
    },
    pos: {
      type: String,
      default: "bottom"
    },
    list: {
      type: Array
    },
    checkedIndex: {
      type: Number,
      default: -1
    },
    config: {
      type: Object
    }
  },
  watch: {
    isShow(e) {
      if (e) {
        this.$nextTick(() => {
          this.$refs.radios.checkedIndex = this.checkedIndex;
        });
      }
    }
  },
  methods: {
    openPicker() {
      this.$emit("openPicker");
    },
    popupOverlayAutoClick() {
      this.$emit("backClick");
    },
    wxcRadioListChecked(e) {
      this.$emit("itemClick", e);
    }
  },
  mounted() {},
  components: {
    WxcPopup,
    WxcRadio
  }
};
</script>
<style scoped>
.showtext {
  height: 100px;
  justify-content: center;
}
.scroller {
  height: 500px;
}
.nopicked {
  color: #9f9f9f;
}
</style>