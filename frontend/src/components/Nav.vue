<script setup>
    import { RouterLink, useRoute} from "vue-router";


    const active_path = useRoute(); 
    

</script>



<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-inner">
        <div class="navbar-links">
          <RouterLink to="/" class="nav-link" active-class="active">Strona Główna</RouterLink>
          <RouterLink to="/tests" class="nav-link" active-class="active">Testy</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>



<style scoped>
.navbar {
  background-color: #047857; /* odpowiada Tailwind bg-green-700 */
  border-bottom: 1px solid #10b981; /* odpowiada Tailwind border-green-500 */
}

.navbar-container {
  width: 100%;
  padding-left: 0; /* zmienione z px-2 sm:px-6 lg:px-8 */
  padding-right: 0;
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px; /* odpowiada h-20 */
}

.navbar-links {
  display: flex;
  gap: 0.5rem; /* odpowiada space-x-2 */
  padding-left: 8px; /* Dodatkowe zbliżenie do lewej krawędzi */
}

.nav-link {
  color: white;
  background-color: #065f46; /* odpowiada bg-green-900 */
  padding: 8px 12px;
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.nav-link.active {
  background-color: #1f2937; /* ciemny szary */
  font-weight: bold;
  border: 2px solid #10b981;
}

.nav-link:hover {
  background-color: #111827; /* odpowiada hover:bg-gray-900 */
  color: white;
}
</style>