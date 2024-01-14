/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// function buildNavContent()
// {
//     const nav_list = document.querySelector('#navbar__list');
//     frag_nav_list = document.createDocumentFragment();

//     for (let i = 0; i < 4; i++) 
//     {
//         const temp_nav_list_item = document.createElement('li');
//         temp_nav_list_item.textContent = 'Section ' + i;
//         temp_nav_list_item.style.color = 'black';
//         frag_nav_list.appendChild(temp_nav_list_item);
//     }
//     return null;
// }


// document.addEventListener('DOMContentLoaded', buildNavContent());

document.addEventListener('DOMContentLoaded', function () 
{
    const nav_list = document.querySelector('#navbar__list');
    
    frag_nav_list = document.createDocumentFragment();
  
    for (let i = 1; i <= 3; i++) {
      const temp_nav_list_item = document.createElement('li');
      temp_nav_list_item.id = 'navbar_section' + i
      temp_nav_list_item.style.padding = '10px';
      temp_nav_list_item.textContent = 'Section ' + i;
      temp_nav_list_item.style.color = 'black';
      frag_nav_list.appendChild(temp_nav_list_item);
    }
  
    nav_list.appendChild(frag_nav_list);

    list_of_sections_navbar = nav_list.querySelectorAll('li');
    list_of_sections_main = document.querySelectorAll('section');
    
    
    for (let i = 0; i < list_of_sections_navbar.length; i++) {
        list_of_sections_navbar[i].addEventListener('click',function(){
            let view_section = list_of_sections_main[i];
            view_section.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    for (let i = 0; i < list_of_sections_navbar.length; i++) {
        list_of_sections_navbar[i].addEventListener('mouseover',function(){
            list_of_sections_navbar[i].style.backgroundColor = 'lightgray';
            list_of_sections_navbar[i].style.transition = 'ease 0.3s all';
        });
    }

    for (let i = 0; i < list_of_sections_navbar.length; i++) {
        list_of_sections_navbar[i].addEventListener('mouseout',function(){
            list_of_sections_navbar[i].style.backgroundColor = '';
            list_of_sections_navbar[i].style.transition = 'ease 0.3s all';
        });
    }

    // const section_1 = document.querySelector('#navbar_section1');
    // section_1.addEventListener('click',function(){
    //     const view_section = document.querySelector('#section1');
    //     view_section.scrollIntoView({ behavior: 'smooth' });
    // });

    // const section_2 = document.querySelector('#navbar_section2');
    // section_2.addEventListener('click',function(){
    //     const view_section = document.querySelector('#section2');
    //     view_section.scrollIntoView({ behavior: 'smooth' });
    // });

    // const section_3 = document.querySelector('#navbar_section3');
    // section_3.addEventListener('click',function(){
    //     const view_section = document.querySelector('#section3');
    //     view_section.scrollIntoView({ behavior: 'smooth' });
    // });

});




// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


