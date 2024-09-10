        // Splash screen timeout
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.getElementById('splash').style.display = 'none';
                document.getElementById('main-content').style.display = 'block';
            }, 700);
        });


        var dropDowns=document.querySelectorAll(".nav-link.dropdown-toggle");
        
        for (i=0; i < dropDowns.length; i++){
            dropDowns[i].addEventListener("click", function(){
                console.log(this);
                
                this.classList.toggle("pressed");
                
                // setTimeout(function(){
                //     dropDowns.classList.remove("pressed");
                // } , 200);
            })
        }
		
		


        // Enable dropdown-submenu functionality
        $(document).ready(function() {
            $('.dropdown-submenu a.dropdown-toggle').on("click", function(e) {
                if (!$(this).next().hasClass('show')) {
                    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
                }
                var $subMenu = $(this).next(".dropdown-menu");
                $subMenu.toggleClass('show');

                $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
                    $('.dropdown-submenu .show').removeClass("show");
                });

                return false;
            });

        });

        if (window.matchMedia("(max-width: 992px)").matches) {
            var elements=document.querySelectorAll('.dropend');
            for (var i=0; i<elements.length; i++) {
                elements[i].classList.remove("dropend");
            //console.log(elements);
            
            }
        }

        document.getElementById("year").innerHTML = new Date().getFullYear();