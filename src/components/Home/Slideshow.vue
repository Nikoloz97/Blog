<template>

<div>
        <div id="HomeFeaturedPosts"
                    class="carousel slide"
                    data-bs-ride="carousel">

        <!-- 1/3: Lower indicator buttons -->
          <div class="carousel-indicators">
            <button type="button"
                    data-bs-target="#HomeFeaturedPosts"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"></button>
        
            <button type="button"
                    data-bs-target="#HomeFeaturedPosts"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
        
            <button type="button"
                    data-bs-target="#HomeFeaturedPosts"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
        
            <button type="button"
                    data-bs-target="#HomeFeaturedPosts"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"></button>
        
            <button type="button"
                    data-bs-target="#HomeFeaturedPosts"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"></button>
          </div>
        
        
          <!-- 2/3: Carousel images -->
          <div class="carousel-inner" role="listbox">
        
            <!-- Image 1 -->
            <div class="carousel-item active"
                 data-bs-interval="10000">
              <img src="../../assets/MockCarousel/Georgia1.jpg"
                   class="d-block w-100"
                   alt="Image one of slideshow">
        
        
                   <!-- Image 1 caption -->
                <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
        
            </div>
        
            <!-- Image 2 -->
            <div class="carousel-item"
                  data-bs-interval="10000">
              <img src="../../assets/MockCarousel/Georgia2.jpg"
                   class="d-block w-100"
                   alt="Image two of slideshow">
        
                   <!-- Image 2 caption -->
                <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
        
            </div>
        
            <!-- Image 3 -->
            <div class="carousel-item"
                 data-bs-interval="10000">
              <img src="../../assets/MockCarousel/Georgia3.jpg"
                   class="d-block w-100"
                   alt="Image three of slideshow">
        
                   <!-- Image 3 caption -->
                   <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    </div>
            </div>
        
            <!-- Image 4 -->
            <div class="carousel-item"
                 data-bs-interval="10000">
              <img src="../../assets/MockCarousel/Georgia4.jpg"
                   class="d-block w-100"
                   alt="Image 4 of slideshow">
        
                   <!-- Image 4 caption -->
                   <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    </div>
            </div>
        
            <!-- Image 5 -->
            <div class="carousel-item"
                 data-bs-interval="10000">
              <img src="../../assets/MockCarousel/Georgia5.jpg"
                   class="d-block w-100"
                   alt="Image 5 of slideshow">
        
                   <!-- Image 5 caption -->
                   <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    </div>
            </div>
        
          </div>
        
          <!-- 3/3: Previous/Back arrow buttons -->
          <button class="carousel-control-prev"
                   type="button"
                   data-bs-target="#HomeFeaturedPosts"
                   data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
        
          <button class="carousel-control-next"
                    type="button"
                    data-bs-target="#HomeFeaturedPosts"
                    data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        
        
        </div>
</div>

</template>

<script setup>

</script>


<style>

</style>
