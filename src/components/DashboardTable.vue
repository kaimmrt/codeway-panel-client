<script setup lang="ts">
import CustomButton from './CustomButton.vue';

const parameters = [
  { key: 'min_version', value: '1.4.4', description: 'Minimum required version of the app', createDate: '10/05/2021 01:58' },
  { key: 'latest_version', value: '1.4.7', description: 'Latest version of the app', createDate: '10/05/2021 01:58' },
  { key: 'pricing_tier', value: 't6', description: 'Pricing tier of the user', createDate: '07/07/2021 11:13' },
  { key: 'scroll', value: '5', description: 'Index of Scroll Paywall for free users.', createDate: '25/08/2021 10:22' },
  { key: 'scroll_limit', value: '13', description: 'Index of Scroll Limit Paywall for free users.', createDate: '25/08/2021 10:23' },
];
</script>

<template>
  <!-- DESKTOP -->
  <div class="dashboard-table-wrapper">
    <table class="dashboard-table-container">
      <thead class="dashboard-table-header">
        <tr>
          <th>Parameter Key</th>
          <th>Value</th>
          <th>Description</th>
          <th>Create Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="dashboard-table-body">
        <tr v-for="(item, index) in parameters" :key="index">
          <td>{{ item.key }}</td>
          <td>{{ item.value }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.createDate }}</td>
          <td class="action-container">
            <CustomButton text="Edit" size="small" />
            <CustomButton text="Delete" size="small" theme="danger"/>
          </td>
        </tr>
        <tr>
          <td>
            <input placeholder="New Parameter" />
          </td>
          <td>
            <input placeholder="Value" />
          </td>
          <td colspan="2">
            <input placeholder="New Description" />
          </td>
          <td>
            <CustomButton text="ADD" size="small" theme="success"/>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- MOBILE -->
  <div class="mobile-parameter-list">
    <div v-for="(item, index) in parameters" :key="index" class="mobile-parameter-item">
      <p class="card-line-key"><strong>Parameter Key:</strong> {{ item.key }}</p>
      <p class="card-line-key"><strong>Value:</strong> {{ item.value }}</p>
      <p class="card-line-key"><strong>Description:</strong> {{ item.description }}</p>
      <p class="card-line-key"><strong>Create Date:</strong> {{ item.createDate }}</p>
      <div class="action-container">
        <CustomButton text="Edit" size="small" />
        <CustomButton text="Del" size="small" theme="danger" />
      </div>
    </div>

    <div class="mobile-input-card">
      <p class="card-line-key"><strong>New Parameter</strong></p>
      <input placeholder="New Parameter" />
      <p class="card-line-key"><strong>Value</strong></p>
      <input placeholder="Value" />
      <p class="card-line-key"><strong>New Description</strong></p>
      <input placeholder="New Description" />
      <div class="action-container">
        <CustomButton text="ADD" size="small" theme="success" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/scss/variables.scss';

.dashboard-table-wrapper {
  width: 100%;
  overflow-x: auto;
  border-radius: 10px;

  .dashboard-table-container {
    width: 100%;
    border-collapse: separate;
    border-radius: 10px;
    
    .dashboard-table-header {
      th {
        color: $gray;
        text-align: left;
        padding: 10px;
      }
    }

    .dashboard-table-body {
      td {
        padding: 10px;
        color: $light-gray;
      }

      .action-container {
        display: flex;
        gap: 1rem;
      }
    }
  }
}

.mobile-parameter-list {
  display: none; 

  .mobile-parameter-item,
  .mobile-input-card {
    border: 1px solid $white;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 1rem;

    .card-line-key {
      margin: 5px 0;
      color: $light-gray;
    }

    .action-container {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 0.5rem;
    }
  }
}

@media (max-width: $medium-breakpoint) {
  .dashboard-table-container {
    display: none; 
  }

  .mobile-parameter-list {
    display: block;
  }
}
</style>
