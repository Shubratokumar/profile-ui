<template>
  <!-- Profiling Element -->
  <div
    class="bg-gray-50 inline-flex justify-center gap-5 p-7 h-full items-start rounded-xl"
  >
    <!-- Basic Information Form -->
    <div class="flex flex-start bg-white rounded-xl p-7 drop-shadow-lg">
      <!-- Left Side -->
      <div class="p-5 flex flex-col gap-3 w-full">
        <!-- Basic Information -->
        <div class="gap-1.5">
          <div class="text-gray-900 font-medium">Basic Information</div>
          <div class="text-gray-500">
            Enter the information below to claim your profile. You can change it
            anytime you want.
          </div>
        </div>
        <!-- Email Address -->
        <div class="mb-1.5">
          <label for="email" class="block text-gray-700 font-medium"
            >Email address <span class="text-red-600">*</span></label
          >
          <input
            v-model="email"
            type="email"
            placeholder="your@gmail.com"
            id="email"
            required
            class="block w-full bg-slate-50 rounded-lg border-solid border-gray-300 hover:border-gray-500 active:border-gray-900 border-2 p-2 text-gray-500"
            @input="validateEmail"
            v-on:blur="validateEmail"
    v-on:keyup.enter="$event.target.blur()"
          />
          <p id="error-message" class="text-red-600" v-if="showError">
            Invalid email address
          </p>
        </div>
        <!-- Date picker here -->
        <div class="h-[3rem] w-full mb-6 p-0">
          <label for="" class="font-medium text-gray-700"
            >Date Of Birth <span class="text-red-600">*</span></label
            >
            <div class="flex flex-row">
              
            <VueDatePicker
            v-model="date"
            :max-date="maxDate"
            ignore-time-validation
            :format="format"
            :text-input="{format: 'dd.MM.yyyy'}"
            color="green lighten-1"
            :enable-time-picker="false"
          >
          <template #input-icon>
            <img class="w-auto ml-2 h-5" src="./assets/icons/clock.svg" />
        </template>
        </VueDatePicker>
      </div>
        </div>
        <!-- Career -->
        <div class="h-[10rem] w-full mb-8 p-0">
          <label for="career" class="font-medium text-gray-700"
            >Career Objective</label
          >
          <textarea
            id="career"
            cols="30"
            rows="10"
            placeholder="Your goals and career purpose go in here..."
            v-model="careerText"
            class="box-border w-full h-full rounded-md text-gray-900 border-gray-200 border-2 px-3 py-1 drop-shadow-sm"
          >
          </textarea>
        </div>
        <!-- About  -->
        <div class="h-[10rem] w-full p-0">
          <label for="career" class="font-medium text-gray-700">About</label>
          <textarea
            id="career"
            cols="30"
            rows="10"
            v-model="aboutText"
            placeholder="A little about me..."
            class="h-full w-full rounded-md text-gray-900 border-gray-200 border-2 py-1 px-3 drop-shadow-sm"
          >
          </textarea>
        </div>
      </div>
      <!-- Right Side -->
      <div class="w-full p-5 flex flex-col">
        <div class="flex flex-col mb-10">
          <h4 class="font-medium text-gray-700">Profile Avatar</h4>
          <!-- Profile Image -->
          <!-- <img src="./assets/icons/usercircle.svg" class="w-[130px] h-[130px]"/> -->

          <div
            class="relative w-[130px] h-[130px] bg-[#FDF9F2] border-solid border-4 border-[#FCF3E6] rounded-full flex items-center justify-center self-center justify-self-center"
          >
          <img :src="userImage" class="
          bg-[#FDF9F2]  rounded-full flex items-center justify-center"/>
          <img src="./assets/icons/pen.png" class="absolute top-[66%] left-[66%]" @click="openImageFileInput" />
    <input type="file" ref="fileInput" class="hidden" accept="image/*" @change="updateUserImage" />
          </div>
        </div>

        <div class="w-full mb-5">
          <label for="fname" class="font-medium text-gray-700"
            >First name <span class="text-red-600">*</span></label
          >
          <input
            type="text"
            id="fname"
            required
            placeholder="Jyot"
            class="w-full rounded-lg border-solid border-gray-300 hover:border-gray-500 active:border-gray-900 border-2 p-2 text-gray-500"
          />
        </div>

        <div class="w-full mb-10">
          <label for="lname" class="font-medium text-gray-700"
            >Last name <span class="text-red-600">*</span></label
          >
          <input
            type="text"
            id="lname"
            placeholder="Singh"
            required
            class="rounded-lg border-solid border-gray-300 hover:border-gray-500 active:border-gray-900 border-2 p-2 w-full text-gray-500"
          />
        </div>

        <div class="flex items-center space-x-4 mb-5">
          <label class="font-medium">Sex:</label>
          <div class="flex items-center mr-4 gap-3">
            <label
              v-for="sex in ['Female', 'Male', 'Other', 'Prefer not to say']"
              :key="sex"
              class="cursor-pointer ml-2 text-md flex items-center"
            >
              <input
                type="radio"
                :value="sex"
                v-model="selectedSex"
                class="hidden"
                required
              />
              <span
                :class="{
                  'radio-outer': true,
                  'radio-checked': selectedSex === sex,
                }"
              >
                <span class="radio-inner"></span>
              </span>
              {{ sex }}
            </label>
          </div>
        </div>

        <div class="flex flex-col mb-10">
          <h3 class="text-gray-900 font-medium">Add your video pitch</h3>
          <h4 class="text-gray-500 mb-4">
            Introduce yourself with a video intro
          </h4>
          <!-- Video Input -->
          <div
            class="py-4 px-6 w-full rounded-lg border-gray-200 justify-center items-center flex flex-col text-gray-500 border-2"
          >
            <!-- Icon -->
            <div class="bg-gray-200 rounded-full p-1 mb-2">
              <img
                src="@/assets/icons/cloud.svg"
                class="w-12 h-12 justify-center items-center p-3"
              />
            </div>
            <!-- <video src=""></video> -->
            <div class="font-normal">
              <button class="text-yellow-600 font-bold" @click="openVideoFileInput">
                Record pitch
              </button>
              <input
                type="file"
                ref="videoInput"
                class="hidden"
                @change="handleFileChange"
                accept="video/*"
              />
              or upload a video
              <br />
              MP4,MOV WMV or AVI (max,5mb)
            </div>
          </div>
        </div>
        <div class="flex items-end justify-end flex-row">
          <button
            class="bg-yellow-500 rounded-lg px-4 py-3 font-bold text-white"
          >
            Claim Profile
          </button>
        </div>
      </div>
      <!-- Claim Profile Button -->
    </div>
  </div>
</template>
<script>
// import CustomDatePicker from '@/components/CustomDatePicker.vue';
// import datePicker from './components/date-picker'
// import { BFormDatepicker } from 'bootstrap-vue'
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
// const textInputOptions = {
//   format: 'dd.MM.yyyy'
// };
export default {
  // components: { CustomDatePicker },
  components: {
    // 'b-form-datepicker': BFormDatepicker,
    // CustomDatePicker,
    VueDatePicker,
  },
  data() {
    return {
      date: new Date(),
      maxDate: new Date(),
      email: "",
      showError: false,
      careerText: "",
      aboutText: "",
      selectedSex: "Male",
      userImage: require('./assets/icons/user.svg'),
    };
  },
  methods: {
    format() {
      const day = this.date.getDate();
      const month = this.date.getMonth() + 1;
      const  monthName = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      const year = this.date.getFullYear();
          return `${day}-${monthName[month]}-${year}`;
    // }
    },
   
    openImageFileInput() {
      this.$refs.fileInput.click();
    },
    updateUserImage(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.userImage = reader.result;
        };

        reader.readAsDataURL(file);
      }
    },
    openVideoFileInput() {
      this.$refs.videoInput.click();
    },
    validateEmail() {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (this.email.match(emailPattern)) {
        this.showError = false;
      } else {
        this.showError = true;
      }
    },
  },
};
</script>

<style lang="scss">
.radio-outer {
  width: 15px;
  height: 15px;
  border: 2px solid #ffd700; /* Yellow-500 border color */
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
}

.radio-inner {
  width: 7px;
  height: 7px;
  background-color: #ffd700; /* Yellow-500 background color */
  border-radius: 50%;
  display: block;
  visibility: hidden;
}

.radio-checked .radio-inner {
  visibility: visible; /* Show the inner circle when checked */
}
.dp__theme_light {
    --dp-background-color: #fff;
    --dp-text-color: #212121;
    --dp-hover-color: #f3f3f3;
    --dp-hover-text-color: #212121;
    --dp-hover-icon-color: #959595;
    --dp-primary-color: #ffd700;
    --dp-primary-disabled-color:yellow;
    --dp-primary-text-color: #f8f5f5;
    --dp-secondary-color: #c0c4cc;
    --dp-border-color: #ddd;
    --dp-menu-border-color: #ddd;
    --dp-border-color-hover: #aaaeb7;
    --dp-disabled-color: #f6f6f6;
    --dp-scroll-bar-background: #f3f3f3;
    --dp-scroll-bar-color: #959595;
    --dp-success-color: #76d275;
    --dp-success-color-disabled: #a3d9b1;
    --dp-icon-color: #959595;
    --dp-danger-color: #ff6f60;
    --dp-marker-color: #ff6f60;
    --dp-tooltip-color: #fafafa;
    --dp-disabled-color-text: #8e8e8e;
    --dp-highlight-color: rgb(25 118 210 / 10%);
    --dp-range-between-dates-background-color: var(--dp-hover-color, #f3f3f3);
    --dp-range-between-dates-text-color: var(--dp-hover-text-color, #212121);
    --dp-range-between-border-color: var(--dp-hover-color, #f3f3f3);
}
</style>
