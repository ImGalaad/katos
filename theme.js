function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    setTheme('bg-light');
  }
  function toggleTheme() {
   if (localStorage.getItem('theme') === 'bg-light'){
       setTheme('bg-dark');
   } else {
       setTheme('bg-light');
   }
  }
  (function () {
   if (localStorage.getItem('theme') === 'bg-dark') {
       setTheme('bg-dark');
   } else {
       setTheme('bg-light');
   }
  })();