<template>
  <div class="employee">
    <section class="employee-info">
      <header>
        <h3>employee id: {{employee.id}}</h3>
      </header>
    </section>
    <main v-if="employee.employees.length" class="employee-employees">
      <ad-employee v-for="employee in employee.employees" :key="employee.id" :employee="employee"/>
    </main>
  </div>
</template>

<script>
export default {
  name: "ad-employee",
  props: {
    employee: {
      type: Object,
      required: true,
      default() {
        return {
          employees: []
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.employee {
  &-info {
    max-width: 10rem;
    border: 1px solid;
    display: flex;
    flex-direction: column;
  }
  &-employees {
    //
  }
}
</style>

