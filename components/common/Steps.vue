<template>
  <div :class="$style.root">
    <div :class="[$style.item, $style.completed]">
      <div :class="$style.bar">
        <div :class="$style.leftBar"></div>
        <div :class="$style.dot">
          <i class="fa fa-check" aria-hidden="true"></i>
        </div>
        <div :class="$style.rightBar"></div>
      </div>
      <div :class="$style.label">
        <div>Pending</div>
        <img src="~/assets/images/order-processed.png" width="60" height="60" />
        <div :class="$style.detail">Received and waiting to process</div>
      </div>
    </div>
    <div :class="[$style.item, $style.active]">
      <div :class="$style.bar">
        <div :class="$style.leftBar"></div>
        <div :class="$style.dot">
          <div
            :class="[
              $style.activeDot,
              'animate__animated animate__zoomIn animate__infinite'
            ]"
          ></div>
        </div>
        <div :class="$style.rightBar"></div>
      </div>
      <div :class="$style.label">
        <div>Verified</div>
        <img src="~/assets/images/order-shipped.png" width="60" height="60" />
        <div :class="$style.detail">Verified and production started</div>
      </div>
    </div>
    <div :class="$style.item">
      <div :class="$style.bar">
        <div :class="$style.leftBar"></div>
        <div :class="$style.dot"></div>
        <div :class="$style.rightBar"></div>
      </div>
      <div :class="$style.label">
        <div>Shipped</div>
        <img src="~/assets/images/shipped.png" width="60" height="60" />
        <div :class="$style.detail">Shipped</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
<style lang="postcss" module>
.root {
  display: flex;
  width: 100%;
  .label {
    margin-top: 6px;
    color: var(--color-bg-secondary);
    font-size: 1.3rem;
    text-align: center;
    img {
      margin: auto;
    }
  }
  .bar {
    display: flex;
    align-items: center;
  }
  .leftBar,
  .rightBar {
    flex: 1;
    height: 3px;
    background-color: var(--color-bg-secondary);
  }
  .dot {
    width: 30px;
    height: 30px;
    background-color: var(--color-bg-secondary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .active {
    .dot {
      background-color: #ffc7006b;
    }
    .leftBar {
      background-color: var(--color-primary);
    }
    .label {
      color: var(--color-primary);
      font-weight: 500;
    }
    .value {
      color: var(--color-primary);
      font-weight: 500;
    }
  }
  .activeDot {
    width: 12px;
    height: 12px;
    background-color: var(--color-primary);
    border-radius: 50%;
    backdrop-filter: opacity(0.5);
  }
  .completed {
    .leftBar,
    .rightBar,
    .dot {
      background-color: var(--color-primary);
      font-size: 1.4rem;
      color: #fff;
    }
    .label {
      color: var(--color-form-text);
    }
  }
  .error {
    .dot {
      background-color: var(--color-error);
    }
    .leftBar {
      background-color: var(--color-primary);
    }
    .label {
      color: var(--color-error);
    }
    .value {
      color: var(--color-error);
      font-weight: 500;
    }
  }
  .item {
    flex: 1;
    &:first-child {
      .leftBar {
        visibility: hidden;
      }
    }
    &:last-child {
      .rightBar {
        visibility: hidden;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    display: block;
    padding-left: var(--space-2x);
    .item {
      display: flex;
      align-items: center;
    }
    .bar {
      display: inline-block;
    }
    .label {
      margin-top: 0;
      margin-left: var(--space);
      display: flex;
      align-items: center;
      img {
        margin: 0 var(--space);
      }
    }
    .leftBar,
    .rightBar {
      height: 40px;
      width: 3px;
      margin: auto;
    }
  }

  @media only screen and (max-width: 539px) {
    padding-left: 0;
    .label {
      flex: 1;
      img {
        display: none;
      }
      .detail {
        margin-left: var(--space);
        flex: 1;
      }
    }
  }
}
</style>
