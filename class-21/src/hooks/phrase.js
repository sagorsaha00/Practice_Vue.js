import { ref, watchEffect } from "vue"

export const usePharse = () => {
     
    const pharse = ref("");
    const reversedphrase = ref("");
    

    watchEffect(() => {
      reversedphrase.value = pharse.value.split('').reverse().join('');

    })
    return(pharse, reversedphrase)
}