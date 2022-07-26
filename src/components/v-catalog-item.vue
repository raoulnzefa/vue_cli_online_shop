<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image" :src="imgLink" :alt="product_data.name" />
    <p class="v-catalog-item__name">{{product_data.name}}</p>
    <p class="v-catalog-item__price">Цена: {{product_data.price}} р.</p>
    <button
        class="v-catalog-item__add_to_cart_btn btn"
        @click="sendDataToParent"
    >Добавить в корзину
    </button>
  </div>
</template>

<script>
  export default {
    name: "v-catalog-item",
    props: { //Наследственность от родительского компонента
      product_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {}
    },
    computed: {
      imgLink: function () {
        const fileName = this.product_data.image;
        return require(`../assets/images/${fileName}`);
      },
    },
    methods: {
      sendDataToParent() {
        this.$emit('sendDataToParent', this.product_data.article); // emit() данные от дочернего к родителю
      }
    }
  }
</script>

<style lang="scss" scoped>

.v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
    &__image {
      width: 100px;
    }
  }
</style>