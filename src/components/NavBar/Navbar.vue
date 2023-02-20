<template>
  
<!-- Fixed-top = sticks navbar to top of page -->
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container-fluid">

    <!-- Nick's Blog Button -->
    <router-link to="/" style="text-decoration: none"><a class="navbar-brand">Nick's Blog</a></router-link>

    <!-- Not sure what this is... -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <router-link to="/Coding" style="text-decoration: none"> <a class="nav-link active" aria-current="page">Coding</a></router-link>
        </li>

        <li class="nav-item">
          <router-link to="/Travel" style="text-decoration: none"><a class="nav-link active" aria-current="page">Travel</a></router-link>
        </li>

        <li class="nav-item">
          <router-link to="/Health" style="text-decoration: none"><a class="nav-link active" aria-current="page">Health</a></router-link>
        </li>

        <li class="nav-item">
          <router-link to="/About" style="text-decoration: none"><a class="nav-link active" aria-current="page">About</a></router-link>
        </li>

        <li class="nav-item">
          <router-link to="/Contact" style="text-decoration: none"><a class="nav-link active" aria-current="page">Contact</a></router-link>
        </li>


        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Log in</a></li>
            <li><a class="dropdown-item" href="#">Log out</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
</script>


<style></style>