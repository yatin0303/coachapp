<template>
    <section >
        <h2>Filter By Expertise</h2>
        <span class=".filter-option">
            <input type="checkbox" id="frontend" checked @change="changefilter">
            <label for="frontend">frontend
            </label>
        </span >
        <span class=".filter-option">
            <input type="checkbox" id="backend" checked @change="changefilter">
            <label for="backend">Backend
            </label>
        </span >
        <span class=".filter-option">
            <input type="checkbox" id="career" checked @change="changefilter">
            <label for="career">Career
            </label>
        </span >
    </section>
</template>
<script>
export default {
    data(){
        return{
            coachfilter:{
                frontend:true,
                backend:true,
                career:true
            }
        }
    },
    methods:{
        changefilter(event)
        {
            const filterid=event.target.id
            const ischecked=event.target.checked;
            const newfilter={
                ...this.coachfilter,
                [filterid]:ischecked
            }
            this.coachfilter=newfilter;
            this.$emit('changed-filter',newfilter)
        }
    }
}
</script>
<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}

</style>
