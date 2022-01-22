const wrapper = document.querySelector(".wrapper"),
            header = wrapper.querySelector("header");

            function onDrag({movementX, movementY}){
                let getStyle = window.getComputedStyle(wrapper);
                let leftVal = parseInt(getStyle.left);
                let topVal = parseInt(getStyle.top);
                wrapper.style.left = `${leftVal + movementX}px`;
                wrapper.style.top = `${topVal + movementY}px`;
                }

            header.addEventListener("mousedown", ()=>{
            header.classList.add("active");
            header.addEventListener("mousemove", onDrag);
            });

            document.addEventListener("mouseup", ()=>{
            header.classList.remove("active");
            header.removeEventListener("mousemove", onDrag);
            });

//------------------------------------APP------------------------------------//
/*function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    setTheme('theme-normal');
  }
  function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-normal'){
       setTheme('theme-blur');
   } else {
       setTheme('theme-normal');
   }
  }
  (function () {
   if (localStorage.getItem('theme') === 'theme-blur') {
       setTheme('theme-blur');
   } else {
       setTheme('theme-normal');
   }
  })();*/