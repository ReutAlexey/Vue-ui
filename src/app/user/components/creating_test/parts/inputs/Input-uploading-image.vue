<template>
  <div>
    <label>{{text}}</label>
    <div class="Image-input">
      <div class="Image-input__input-wrapper">
        <div class="Image-input__image-wrapper">
          <v-icon v-show="!image" size="100">mdi-image-plus</v-icon>
          <img v-show="image" class="Image-input__image" :src="image">
        </div>
        <input
          @change="previewThumbnail"
          class="Image-input__input"
          multiple
          accept="image/jpeg,image/jpg,image/png"
          size="1048576"
          name="thumbnail"
          type="file">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input-uploading-image',
  props: ['text'],
  data () {
    return {
      image: ''
    }
  },
  methods: {
    previewThumbnail (event) {
      const input = event.target
      if (input.files && input.files[0]) {
        const reader = new FileReader()
        reader.onload = event => {
          this.image = event.target.result
          this.$emit('receiveImage', {
            image: event.target.result
          })
        }
        reader.readAsDataURL(input.files[0])
      }
    }
  }
}
</script>

<style scoped>
  .Image-input {
    display: flex;
    width: 150px;
    border: 2px solid #4a5568;
    border-radius: 3px;
  }

  .Image-input__image-wrapper {
    flex-basis: auto;
    height: auto;
    background: #eee;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .Image-input__image-wrapper {
    color: #ccc;
    font-size: 999px;
    cursor: default;
  }

  .Image-input__image {
    border-radius: 1px;
    background-size: cover;
    width: 100%;
    height: auto;
  }

  .Image-input__input-wrapper {
    overflow: hidden;
    position: relative;
    background: #eee;
    border-radius: 10px;
    float: left;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(0,0,0,0.2);
    transition: 0.4s background;
    width: auto;
  }

  .Image-input__input-wrapper:hover {
    background: #e0e0e0;
  }

  .Image-input__input {
    display: block;
    font-size: 200px;
    min-height: 100%;
    opacity: 0;
    position: absolute;
    right: 0;
    text-align: right;
    top: 0;
    cursor: pointer;
  }
</style>
