<template>



<form>
    <div class="container">
        <div class="row">
            <div class="col">
                <!-- First Name input -->
                <div class="mb-3">
                    <label for="FirstName" class="form-label">First name</label>
                    <input type="text" class="form-control" id="FirstName" aria-describedby="firstName">
                </div>
            </div>
            <div class="col">
                <!-- Last Name input -->
                <div class="mb-3">
                    <label for="LastName" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="LastName" aria-describedby="lastName">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="mb-3">
                    <label for="Email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="Email" aria-describedby="email">
                </div>
            </div>
            <div class="col">
                <div class="mb-3">
                    <label for="phoneNumb" class="form-label">Phone Number</label>
                    <input type="text" class="form-control" id="phoneNumb" aria-describedby="phone number">
                </div>
            </div>
        </div>
        <div class="row">

            <div class="mb-3">
                    <label for="Message" class="form-label">Message</label>
                    <input type="text" class="form-control" id="Message" aria-describedby="message">
            </div>
        </div>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
</form>


</template>

<script setup>

</script>

<style scoped>

</style>