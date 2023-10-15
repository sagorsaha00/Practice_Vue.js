<template>
    <div class="input-group">
        <input type="text" class="form-control" readonly :value="inputValue" />
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" ref="emojiBtn">
                {{ modelValue ? modelValue.emoji : 'Select' }}
            </button>
        </div>
    </div>
</template>

<script>
import { EmojiButton } from '@joeattardi/emoji-button'
export default {
    name: 'Emojiinput',
    props: {
        modelValue: {
            required: true
        }, Option: {
            default() {
                return {

                }
            }
        },

    },
    data() {
        return {
            inputValue: '',
        };
    },
    mounted() {
        const picker = new EmojiButton(this.Option);
        const btn = this.$refs.emojiBtn;

        let inputValue = '';

        picker.on('emoji', (emoji) => {
            inputValue += emoji.emoji;
            this.$emit('update:modelValue', emoji);
            this.hi(inputValue);
            // console.log(inputValue);
        })
        btn.addEventListener('click', () => {
            picker.togglePicker(btn);

        })
    },

    methods: {
        hi(inputValue) {
            this.inputValue = inputValue;
        },
    },

}

</script>