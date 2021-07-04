<template>
  <section>
    <form @submit.prevent>
      <div class="form-control" :class="{ invalid: !firstname.isval }">
        <label for="firstname">FirstName</label>
        <input
          type="text"
          id="firstname"
          v-model="firstname.val"
          @input="clear('firstname')"
        />
        <p v-if="!firstname.isval">Please enter a Valid Firstname</p>
      </div>
      <div class="form-control" :class="{ invalid: !lastname.isval }">
        <label for="lastname">LastName</label>
        <input
          type="text"
          id="lastname"
          v-model="lastname.val"
          @input="clear('lastname')"
        />
        <p v-if="!lastname.isval">Please enter a Valid Lastname</p>
      </div>
      <div class="form-control" :class="{ invalid: !description.isval }">
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          v-model="description.val"
          @input="clear('description')"
        ></textarea>
        <p v-if="!description.isval">Please tell something about yourself</p>
      </div>
      <div class="form-control" :class="{ invalid: !rate.isval }">
        <label for="rate">Hourly Rate</label>
        <input
          type="number"
          id="rate"
          v-model.number="rate.val"
          @input="clear('rate')"
        />
        <p v-if="!rate.isval">Please enter a Valid Hourly rate</p>
      </div>
      <div class="form-control" :class="{ invalid: !areas.isval }">
        <h4>Areas Of Expertise</h4>
        <div class="form-control">
          <input
            type="checkbox"
            id="frontend"
            value="frontend"
            v-model="areas.val"
            @input="clear('areas')"
          />
          <label for="frontend">frontend</label>
        </div>
        <div class="form-control">
          <input
            type="checkbox"
            id="backend"
            value="backend"
            v-model="areas.val"
          />
          <label for="backend">Backend</label>
        </div>
        <div class="form-control">
          <input
            type="checkbox"
            id="career"
            value="career"
            v-model="areas.val"
          />
          <label for="career">Career</label>
        </div>
        <p v-if="!areas.isval">Please Select atleast one option</p>
      </div>
      <v-btn @click="getdata" >Register</v-btn>
    </form>
  </section>
</template>
<script>
export default {
  emits: ["form-submitted"],
  data() {
    return {
      firstname: {
        val: "",
        isval: true,
      },
      lastname: {
        val: "",
        isval: true,
      },
      rate: {
        val: null,
        isval: true,
      },
      description: {
        val: "",
        isval: true,
      },
      areas: {
        val: [],
        isval: true,
      },
      formisvalid: true,
    };
  },
  methods: {
    clear(id) {
      this[id].isval = true;
    },
    formvalidator() {
      this.formisvalid = true;
      if (this.firstname.val === "") {
        this.formisvalid = false;
        this.firstname.isval = false;
      }
      if (this.lastname.val === "") {
        this.formisvalid = false;
        this.lastname.isval = false;
      }
      if (this.rate.val === null) {
        this.formisvalid = false;
        this.rate.isval = false;
      }
      if (this.areas.val.length === 0) {
        this.formisvalid = false;
        this.areas.isval = false;
      }
      if (this.description.val === "") {
        this.formisvalid = false;
        this.description.isval = false;
      }
    },
    getdata() {
      this.formvalidator();
      if (!this.formisvalid) {
      
        return;
      }
      const newdata = {
        firstname: this.firstname.val,
        lastname: this.lastname.val,
        rate: this.rate.val,
        description: this.description.val,
        areas: this.areas.val,
      };

      this.$emit("form-submitted", newdata);
    },
  },
};
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label,
.invalid h4 {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
p {
  font-size: 0.8rem;
}
</style>