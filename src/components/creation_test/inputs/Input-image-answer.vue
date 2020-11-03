<template>
  <div
    class="d-flex flex-row">
    <p>{{$props.index + 1}}</p>
    <v-checkbox
      @change="previewThumbnail"
      v-model="checkBox"
      label="Пр.Отв"
      color="success"
      hide-details
    ></v-checkbox>
    <div class="Image-input">
      <div class="Image-input__input-wrapper">
        <div class="Image-input__image-wrapper">
          <v-icon v-show="!image" size="100">mdi-image-plus</v-icon>
          <img v-show="image" class="Image-input__image" :src="image">
        </div>
        <input accept="image/*" @change="previewThumbnail" class="Image-input__input" name="thumbnail" type="file">

      </div>
    </div>
    <v-btn @click="deleteInput" icon class="float-md-left"><v-icon color="red">mdi-minus-box</v-icon></v-btn>
  </div>
</template>

<script>
export default {
  name: 'Input-image-answer',
  props: {
    index: {
      default () {
        return Number
      }
    }
  },
  data () {
    return {
      typeAnswer: 'image',
      image: '',
      checkBox: false
    }
  },
  methods: {
    previewThumbnail (event) {
      if (event.target) {
        const input = event.target
        if (input.files && input.files[0]) {
          const reader = new FileReader()
          reader.onload = event => {
            this.image = event.target.result
            this.$emit('acceptDataInput', {
              answer: event.target.result,
              checkBox: this.checkBox,
              index: this.$props.index,
              typeAnswer: this.typeAnswer
            })
          }
          reader.readAsDataURL(input.files[0])
        }
      } else {
        this.$emit('acceptDataInput', {
          answer: this.image,
          checkBox: this.checkBox,
          index: this.$props.index,
          typeAnswer: this.typeAnswer
        })
      }
    },
    deleteInput () {
      this.$emit('deleteInput', this.$props.index)
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
  margin-left: 20px;
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
  height: 100%;
}

.Image-input__input-wrapper {
  overflow: hidden;
  position: relative;
  background: #eee;
  border-radius: 1px;
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
