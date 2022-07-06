<template>
  <div :class="$style.root">
    <div class="container">
      <el-row>
        <el-col :md="8">
          <h1>About us</h1>
          <p>
            pyiexpress.net, PYIgroup LTD brand is the all-in-one e-commerce
            platform that takes care of everything for entrepreneurs, from
            payment processing to customer service. <br /><br />
            The talented artists that create all the artworks on this site are
            based at 232 Forest Road Walthamstow E17 6JG UNITED KINGDOM.
          </p>
        </el-col>
        <el-col :md="16">
          <el-row :gutter="32" :class="$style.team">
            <el-col :span="12">
              <div :class="$style.member">
                <img src="~/assets/images/hieu_nguyen.jpeg" alt="Hieu Nguyen" />
                <div :class="$style.info">
                  <div :class="$style.name">Hieu Nguyen</div>
                  <div :class="$style.position">Co-Founder / CEO</div>
                </div>
              </div>
              <div :class="$style.member">
                <img src="~/assets/images/vu_hung.jpeg" alt="Vu Hung" />
                <div :class="$style.info">
                  <div :class="$style.name">Vu Hung</div>
                  <div :class="$style.position">Director</div>
                </div>
              </div>
              <div :class="$style.member">
                <img src="~/assets/images/duyen.jpeg" alt="Duyen" />
                <div :class="$style.info">
                  <div :class="$style.name">Duyen</div>
                  <div :class="$style.position">
                    Manager, Business Relations
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div :class="$style.member">
                <img src="~/assets/images/tri_anh.jpeg" alt="Tri Anh" />
                <div :class="$style.info">
                  <div :class="$style.name">Tri Anh</div>
                  <div :class="$style.position">Co-Founder / CTO</div>
                </div>
              </div>
              <div :class="$style.member">
                <img src="~/assets/images/huu_khanh.jpeg" alt="Huu Khanh" />
                <div :class="$style.info">
                  <div :class="$style.name">Huu Khanh</div>
                  <div :class="$style.position">
                    Product Development / Developer
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutPage'
})
</script>
<style lang="postcss" module>
.root {
  font-size: 1.4rem;
  margin-top: var(--space-4x);
  .team {
    padding: 0 var(--space-2x);
  }
  .member {
    display: flex;
    align-items: center;
    img {
      height: 80px;
      width: 80px;
      border-radius: 50%;
      object-fit: cover;
      filter: drop-shadow(2px 4px 6px black);
    }
  }
  .member + .member {
    margin-top: var(--space-2x);
  }
  .info {
    margin-left: var(--space-1x5);
    .name {
      font-weight: 600;
    }
    .position {
      font-weight: 600;
      color: var(--color-primary);
    }
  }
}
</style>
