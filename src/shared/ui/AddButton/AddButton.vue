<script setup>
import { ADD_BUTTON_TEXT } from '../utils/constants';
</script>

<template>
  <button class="add-button" type="button" :aria-label="ADD_BUTTON_TEXT">
    <div class="add-button__icon" />
  </button>
</template>

<style lang="scss">
.add-button {
  width: 225px;
  height: 120px;
  background-color: $bg-grey;
  color: $primary-dark;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &__icon {
    width: 20px;
    -webkit-mask-image: url('../../../assets/icons/cross-icon.svg');
    mask-image: url('../../../assets/icons/cross-icon.svg');
    height: 20px;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: $primary-dark;
    transition: background-color 0.3s ease-in;
  }
  &:hover &__icon {
    background-color: $primary;
  }
}
</style>
