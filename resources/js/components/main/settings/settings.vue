<template>
  <div>simple</div>
</template>

<script>
import Setting from "../../../apis/Setting";

export default {
  data() {
    return {};
  },
  created() {
    Setting.get().then((response) => {
      console.log(response);
    });
  },
};
</script>

<style>
</style>