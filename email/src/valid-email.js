export default function validateEmail(modelValue){
    return modelValue.length >= 4 && modelValue.length > 0;
}