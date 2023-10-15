import { ref ,computed} from "vue"

export const useNumber = () => {
   
    const number = ref(0);
   

    function increment() {
      number.value++;
    }
   
    const double = computed(() => {
        return number.value * 2
      })
      return {number, increment, double}
}