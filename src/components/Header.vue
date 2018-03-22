<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">rSight</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link to="/dashboard" class="nav-item active" tag="li"><a class="nav-link">Dashboard</a></router-link>
        <router-link to="/rigs" class="nav-item active" tag="li"><a class="nav-link">Rigs</a></router-link>
        <router-link to="/settings" class="nav-item active" tag="li"><a class="nav-link">Settings</a></router-link>
      </ul>
    </div>
  </nav>
</template>
