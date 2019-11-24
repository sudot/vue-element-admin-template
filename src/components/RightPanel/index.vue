<template>
  <div ref="rightPanel" :class="{show:visible}" class="rightPanel-container">
    <div class="rightPanel-background" />
    <div class="rightPanel">
      <div v-show="visible" class="handle-button" :style="{'top':buttonTop+'px','background-color':theme}" @click="hide">
        <i class="el-icon-close" />
      </div>
      <div class="rightPanel-items">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { addClass, removeClass } from '@/utils'

export default {
  name: 'RightPanel',
  props: {
    buttonTop: {
      default: 350,
      type: Number
    },
    visible: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    theme() {
      return this.$store.state.settings.theme
    }
  },
  watch: {
    visible(value) {
      if (value) {
        addClass(document.body, 'showRightPanel')
      } else {
        removeClass(document.body, 'showRightPanel')
      }
    }
  },
  mounted() {
    this.insertToBody()
    this.addEventClick()
  },
  beforeDestroy() {
    const elx = this.$refs.rightPanel
    elx.remove()
  },
  methods: {
    addEventClick() {
      document.querySelector('.rightPanel-background').addEventListener('click', this.closeSidebar)
    },
    closeSidebar(evt) {
      this.$emit('update:visible', false)
    },
    insertToBody() {
      const elx = this.$refs.rightPanel
      const body = document.querySelector('body')
      body.insertBefore(elx, body.firstChild)
    },
    hide() {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style>
.showRightPanel {
  overflow: hidden;
  position: relative;
  width: calc(100% - 15px);
}
</style>

<style lang="scss" scoped>
.rightPanel-background {
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
  background: rgba(0, 0, 0, 0.2);
  width: 0;
  height: 0;
  top: 0;
  left: 0;
  position: fixed;
  z-index: -1;
}

.rightPanel {
  z-index: 3000;
  position: fixed;
  height: calc(100vh - 50px);
  width: 100%;
  max-width: 372px;
  top: 50px;
  left: 0px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
  transition: all 0.25s cubic-bezier(0.7, 0.3, 0.1, 1);
  transform: translate(100%);
  z-index: 40000;
  left: auto;
  right: 0px;
}

.show {
  transition: all 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);

  .rightPanel-background {
    z-index: 20000;
    opacity: 1;
    width: 100%;
    height: 100%;
  }

  .rightPanel {
    transform: translate(0);
  }
}

.handle-button {
  position: absolute;
  left: -48px;
  border-radius: 6px 0 0 6px !important;
  width: 48px;
  height: 48px;
  pointer-events: auto;
  z-index: 0;
  cursor: pointer;
  pointer-events: auto;
  font-size: 24px;
  text-align: center;
  color: #fff;
  line-height: 48px;

  i {
    font-size: 24px;
    line-height: 48px;
  }
}
</style>
