 <template>

   
     <!-- Registration Form -->
     <div class="text-white text-center font-bold p-4 rounded mb-4" v-if="reg_show_alert"
     :class="reg_alert_variant"> {{ reg_alert_msg }}</div>
     <vee-form :validation-schema="schema" @submit="register" :initial-values="userData" >
       <!-- Name -->
       <div class="mb-3">
         <label class="inline-block mb-2">Name</label>

         <vee-field type="text" name="name" 
           class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
           placeholder="Enter Name" 
          
         />
         <ErrorMessage class="text-red-600" name="name"/>

       </div>
       <!-- Email -->
       <div class="mb-3">
         <label class="inline-block mb-2">Email</label>
         <vee-field
           type="email" name="email"
           class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
           placeholder="Enter Email"
         />
         <ErrorMessage class="text-red-600" name="email"/>
       </div>
       <!-- Age -->
       <div class="mb-3">
         <label class="inline-block mb-2">Age</label>
         <vee-field
           type="number" name="age"
           class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
         />
       </div>
       <ErrorMessage class="text-red-600" name="age"/>
       <!-- Password -->
       <div class="mb-3">
         <label class="inline-block mb-2">Password</label>
         <vee-field
           name="password"
            :bails="false" v-slot="{ field, errors }">  
           <input class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"  type="password"
           placeholder="Password" v-bind="field" />
         
         <div class="text-red-600" v-for="error in errors" :key="error"> {{ error  }} </div>
         </vee-field>
       </div>
       <ErrorMessage class="text-red-600" name="password"/>
       <!-- Confirm Password -->
       <div class="mb-3" >
         <label class="inline-block mb-2">Confirm Password</label>
         <vee-field 
           type="password"  name="confirm_password"
           class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
           placeholder="Confirm Password"
         />
         <ErrorMessage class="text-red-600" name="confirm_password"/>
       </div>

       <!-- Country -->
       <div class="mb-3">
         <label class="inline-block mb-2">Country</label>
         <vee-field as="select" name="country"
           class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
         >
           <option value="USA">USA</option>
           <option value="Mexico">Mexico</option>
           <option value="Germany">Germany</option>
           <option value="Bangladesh">Bangladesh</option>

         </vee-field>
         <ErrorMessage class="text-red-600" name="country"/>
       </div>
       <!-- TOS -->
       <div class="mb-3 pl-6">
         <vee-field name="tos" value="1"
           type="checkbox"
           class="w-4 h-4 float-left -ml-6 mt-1 rounded"
         />
         <label class="inline-block">Accept terms of service</label>
                     
                    <ErrorMessage class="text-red-600 block" name="tos"/>
       </div>
       <button
         type="submit"
         class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
         :disabled="reg_in_submisson"
       >
         Submit
       </button>
     </vee-form> 
  
 </template>

 <script>
  
   import { mapActions } from "pinia";
   import useUserStore from "../stores/user"
 export default {
  name:"RegisterForm",
  data() {
    return {
      tab:"login",
      schema : {
       names:"",
       email:"required|min:3|max:100|email",
       age:"required|min_value:18|max_value:100",
       password:"required|min:5|max:12|excluded:password",
       confirm_password :"password_mismatch:@password",
       country:"required|country_excluded:Bangladesh",
       tos:"tos",
       
     },
     userData:{
      country:'USA'
     },
     reg_in_submisson:false,
     reg_show_alert:false,
     reg_alert_variant:"bg-blue-500",
     reg_alert_msg:"please wait! your account is being created",
  
    }
  },
 
  methods:{
    ...mapActions(useUserStore, {
        createUser:'register'
       }),
   async register(values) {
    this.reg_show_alert = true;
    this.reg_in_submisson = true;
    this.reg_alert_variant = "bg-blue-500";
    this.reg_alert_msg = "please wait ! your account is being crated";
 
   try {
   await this.createUser(values)
   } catch(error) {
    this.reg_in_submisson = false
    this.reg_alert_variant = 'bg-red-500';
    this.reg_alert_msg = 'An unexpected error accured. pleasae try again later'
    return
   }
    this.reg_alert_variant="bg-green-500";
    this.reg_alert_msg="success ! your account has been created"

  window.location.reload();
  },
  }
 }
</script>