<template>
  <div :class="$style.root">
    <div class="container">
      <el-row :class="$style.row">
        <el-col :lg="12">
          <div :class="$style.image">
            <img
              src="~/assets/images/deal_ofthe_week.png"
              alt="deal of the week"
            />
          </div>
        </el-col>
        <el-col :lg="12" :class="$style.col">
          <div :class="$style.content">
            <div :class="$style.title">
              <h2>Deal Of The Week</h2>
            </div>
            <ul :class="$style.timer">
              <li>
                <div :class="$style.num">{{ day }}</div>
                <div :class="$style.unit">Day</div>
              </li>
              <li>
                <div :class="$style.num">{{ hour }}</div>
                <div :class="$style.unit">Hours</div>
              </li>
              <li>
                <div :class="$style.num">{{ minute }}</div>
                <div :class="$style.unit">Mins</div>
              </li>
              <li>
                <div :class="$style.num">{{ second }}</div>
                <div :class="$style.unit">Sec</div>
              </li>
            </ul>
            <div :class="$style.btn">
              <el-button :class="$style.submitBtn" type="primary"
                >Shop now</el-button
              >
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data(): {
    day: number
    hour: number
    minute: number
    second: number
  } {
    return {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0
    }
  },

  mounted() {
    let date = new Date()
    date.setDate(date.getDate() + 3)
    let targetDate = date.getTime()
    setInterval(() => {
      // find the amount of "seconds" between now and target
      let current_date = new Date().getTime()
      let seconds_left = (targetDate - current_date) / 1000

      // do some time calculations
      this.day = parseInt((seconds_left / 86400).toString())
      seconds_left = seconds_left % 86400

      this.hour = parseInt((seconds_left / 3600).toString())
      seconds_left = seconds_left % 3600

      this.minute = parseInt((seconds_left / 60).toString())
      this.second = parseInt((seconds_left % 60).toString())
    }, 1000)
  }
})
</script>

<style lang="postcss" module>
.root {
  width: 100%;
  margin-top: var(--space-4x);
  background: var(--color-bg-secondary);
  .image {
    img {
      margin: auto;
    }
  }
  .row {
    position: relative;
    display: flex;
    align-items: center;
  }
  .col {
    display: flex;
    justify-content: center;
  }
  .content {
    position: relative;
  }
  .title {
    text-align: center;
    position: relative;
    h2 {
      font-size: 4rem;
      font-weight: 600;
    }
    &::after {
      display: block;
      position: absolute;
      top: calc(100% + 13px);
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 5px;
      background: var(--color-primary);
      content: '';
    }
  }
  .timer {
    margin-top: var(--space-4x);
  }
  li {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: #ffffff;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  li + li {
    margin-left: var(--space-1o2);
  }
  .num {
    font-size: 3.6rem;
    font-weight: 500;
    color: var(--color-primary);
  }
  .unit {
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--color-primary-text);
  }
  .btn {
    margin-top: var(--space-3x);
    text-align: center;
  }
  .submitBtn {
    background: var(--color-primary);
    &:hover {
      opacity: 0.7;
    }
  }
  @media only screen and (max-width: 1024px) {
    .col {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 100%;
    }
    li {
      width: 70px;
      height: 70px;
    }
    .num {
      font-size: 2.8rem;
    }
    .unit {
      font-size: 1.4rem;
    }
  }
}
</style>
