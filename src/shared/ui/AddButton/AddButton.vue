<script setup>
import { ADD_BUTTON_TEXT } from '../utils/constants';

const props = defineProps({
  onClick: {
    type: Function,
    default: () => undefined
  }
});
</script>

<template>
  <button
    class="add-button"
    type="button"
    :aria-label="ADD_BUTTON_TEXT"
    @click="props.onClick"
  >
    <div class="add-button__icon" />
  </button>
</template>

<style lang="scss">
.add-button {
  width: 225px;
  height: 120px;
  color: $primary-dark;
  border: none;
  box-shadow: 0 0 2px $primary-dark;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.3s ease-in;
  &:hover {
    box-shadow: 0 0 2px $primary;
  }
  &__icon {
    width: 20px;
    height: 20px;
    -webkit-mask-image: url('../../../assets/icons/cross-icon.svg');
    mask-image: url('../../../assets/icons/cross-icon.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-color: $primary-dark;
    transition: background-color 0.3s ease-in, transform 0.3s ease-in;
  }
  &:hover &__icon {
    background-color: $primary;
    transform: scale(1.1);
  }
}
</style>
