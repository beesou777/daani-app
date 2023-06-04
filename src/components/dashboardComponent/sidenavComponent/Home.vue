<template>
  <div>
    <topnav/>
  <div class="container">
    <div class="row ">
      <div class="col-md-3">
        <div class="card h-auto card-raised bg-primary text-white">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div class="me-2">
                <div class="display-5 text-white">101.1K</div>
                <div class="card-text">Downloads</div>
              </div>
              <div class="icon-circle text-white text-primary">
                <i class="material-icons">download</i>
              </div>
            </div>
            <div class="card-text">
              <div class="d-inline-flex align-items-center">
                <i class="material-icons icon-xs">arrow_upward</i>
                <div class="caption fw-500 me-2">3%</div>
                <div class="caption">from last month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card h-auto   card-raised bg-warning text-white">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div class="me-2">
                <div class="display-5 text-white">12.2K</div>
                <div class="card-text">Purchases</div>
              </div>
              <div class="icon-circle text-white text-warning">
                <i class="material-icons">storefront</i>
              </div>
            </div>
            <div class="card-text">
              <div class="d-inline-flex align-items-center">
                <i class="material-icons icon-xs">arrow_upward</i>
                <div class="caption fw-500 me-2">3%</div>
                <div class="caption">from last month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card h-auto card-raised bg-secondary text-white">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div class="me-2">
                <div class="display-5 text-white">5.3K</div>
                <div class="card-text">Customers</div>
              </div>
              <div class="icon-circle text-white text-secondary">
                <i class="material-icons">people</i>
              </div>
            </div>
            <div class="card-text">
              <div class="d-inline-flex align-items-center">
                <i class="material-icons icon-xs">arrow_upward</i>
                <div class="caption fw-500 me-2">3%</div>
                <div class="caption">from last month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card h-auto card-raised bg-info text-white">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div class="me-2">
                <div class="display-5 text-white">7</div>
                <div class="card-text">Channels</div>
              </div>
              <div class="icon-circle text-white text-info">
                <i class="material-icons">devices</i>
              </div>
            </div>
            <div class="card-text">
              <div class="d-inline-flex align-items-center">
                <i class="material-icons icon-xs">arrow_upward</i>
                <div class="caption fw-500 me-2">3%</div>
                <div class="caption">from last month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- chart -->
    <div>
   <VisitStore/>
   <!-- <DataTables/> -->
  </div>
  </div>
  </div>
</template>
<script setup>
// imports
import { ref } from "vue";
import topnav from "../navbar/TopNav.vue";
import VisitStore from "./HomeComponent/VisitStore.vue";

</script>


<script setup>
</script>


<style scoped>
button {
  background: #0c8a8a !important;
}

.card {
  height: 310px;
  max-width: 300px;
}
.text-muted {
  color: #9e9e9e !important;
  font-size: 1.1rem;
}
</style>