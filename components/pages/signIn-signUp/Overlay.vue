<template>
  <div :class="[$style.overlayContainer, active && $style.active]">
    <div :class="$style.overlay">
      <div :class="$style.overlayLeft">
        <h1>Hello, Friend!</h1>
        <h4>Do not have an account yet?</h4>
        <el-button
          id="signIn"
          type="primary"
          :class="$style.btn"
          @click="$emit('update:active', !active)"
          >Sign In</el-button
        >
      </div>
      <div :class="$style.overlayRight">
        <h1>Welcome Back!</h1>
        <h4>Please login with your personal info</h4>
        <el-button
          id="signUp"
          type="primary"
          :class="$style.btn"
          @click="$emit('update:active', !active)"
          >Sign Up</el-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
})
</script>
<style lang="postcss" module>
@define-mixin overlays $property {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 70px 40px;
  width: 50%;
  height: 100%;
  text-align: center;
  transform: translateX($property);
  transition: transform 0.5s ease-in-out;
}

.overlayLeft {
  @add-mixin overlays -20%;
}

.overlayRight {
  @add-mixin overlays 0;
  right: 0;
}

.overlayContainer {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.5s ease-in-out;
  background: url('~/assets/images/signin-1.png');
  background-size: cover;
  z-index: 1;
  &.active {
    transform: translateX(-100%);
  }
}

.overlay {
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  color: #fff;
  backdrop-filter: blur(5px);
  transform: translateX(0);
  transition: all 0.5s ease-in-out;
  &:hover {
    backdrop-filter: blur(2px);
  }
}

.active {
  .overlay {
    transform: translateX(50%);
  }

  .overlayLeft {
    transform: translateX(0);
  }

  .overlayRight {
    transform: translateX(20%);
  }
}

.btn {
  width: 200px;
  background: transparent;
  border-color: #fff;
  color: #fff;
  transition: var(--transition-300);
  &:hover {
    background: #fff;
    color: var(--color-primary);
    border-color: #fff;
  }
}
</style>
