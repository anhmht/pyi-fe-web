<template>
  <div :class="$style.root">
    <div
      v-for="item in displaySteps"
      :key="item.id"
      :class="[
        $style.item,
        isCompleted(item.status) && $style.completed,
        isActive(item.status) && $style.active
      ]"
    >
      <div :class="$style.bar">
        <div :class="$style.leftBar"></div>
        <div :class="$style.dot">
          <i
            v-if="isCompleted(item.status)"
            class="fa fa-check"
            aria-hidden="true"
          ></i>
          <div
            v-if="isActive(item.status)"
            :class="[
              $style.activeDot,
              'animate__animated animate__zoomIn animate__infinite'
            ]"
          ></div>
        </div>
        <div :class="$style.rightBar"></div>
      </div>
      <div :class="$style.label">
        <div>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { cloneDeep } from 'lodash'
import Vue from 'vue'
import { Step, STEP_STATUS } from '~/model/common/common'

export default Vue.extend({
  props: {
    activeStep: {
      type: Number,
      required: true
    },
    steps: {
      type: Array as () => Step[],
      required: true
    }
  },
  computed: {
    displaySteps(): Step[] {
      const result = cloneDeep(this.steps)
      this.steps.forEach((element, index) => {
        if (index < this.activeStep) {
          result[index].status = STEP_STATUS.COMPLETED
        } else if (index === this.activeStep) {
          result[index].status = STEP_STATUS.ACTIVE
        }
      })
      return result
    }
  },
  methods: {
    isCompleted(status: STEP_STATUS): boolean {
      return status === STEP_STATUS.COMPLETED
    },
    isActive(status: STEP_STATUS): boolean {
      return status === STEP_STATUS.ACTIVE
    }
  }
})
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
}
</style>
