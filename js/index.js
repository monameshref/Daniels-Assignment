            // Animation typed
            const typed = new Typed(".type",{
                strings : ["Larry Daniels" , "Developer" ,"Designer"],
                typeSpeed : 100,
                backSpeed : 50,
                loop : true,
            });
    
    
                // Navbar
                function changeBg(){
            var scrollValue = window.scrollY;
            var navbar = document.getElementById('navbar-example');
            var scrollValue = window.scrollY;
            if(scrollValue < 150){
                navbar.classList.remove('bgColor');
            } else{
                navbar.classList.add('bgColor');
            };
        };
    
        window.addEventListener('scroll', changeBg);
    
    
            // Section Numbers
    
            const nums = document.querySelectorAll(".num");
        const section = document.querySelector(".numbers");
        let started =false;
    
        function startCount(el){
            let goal = el.dataset.goal;
            let count = setInterval(() =>{
                el.textContent++;
                if (el.textContent === goal) {
                    clearInterval(count);
                }
            },2000 / goal)
        }
    
        window.onscroll = function(){
            if (window.scrollY >= section.offsetTop - 300) {
                if (!started) {
                    nums.forEach((num) => startCount(num));
                }
                started = true;
            }
        }
