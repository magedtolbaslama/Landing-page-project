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
 * Define Global Variables
 * 
*/
// create Global variable (scts ) for document sections to add sections automatically to navigation bar
const scts = document.querySelectorAll('section');
// create Global variable (upgo ) to scroll the document to top part when click the Top button
const upgo = document.getElementById('topbutton');
/* create Global variable (freg ) to append document elements instead of adding elements
   to document directly so we can avoid reflow and repaint */
const frag = document.createDocumentFragment();
// create Global variable (myul ) to add unordered list automatically to the document
const myul = document.querySelector('ul');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//build dynamically the navigation bar
scts.forEach(section => {
// Get section id then store it in section_id variable
    const section_id = section.getAttribute('id');
//Get section data-nav then store it in data_nav variable
    const data_nav = section.getAttribute("data-nav");
//ctreate list items in my_list variable
    const my_list = document.createElement("li");
//ctreate links  in my_link variable
    const my_link = document.createElement("a");
// add the style of navbar menu from style.css file
    my_link.classList.add("menu__link");
// create link as href from section id in my_link variable
    my_link.setAttribute('href',section_id);

// add addEventListener  to the link in navigation bar to scroll into view when we click the link
    my_link.addEventListener('click', e => {
        e.preventDefault();
        section.scrollIntoView({behavior : "smooth"})
    });

// Get section name  from the data_nav variable then store it in section_name variable
    const section_name = document.createTextNode(data_nav);
//Add section name to the link (my_link) in navigation bar from section_name variable
    my_link.appendChild(section_name);
//Add the link with section  name to  my list (my_list) from my_link variable
    my_list.appendChild(my_link);
// append my list to the document fragment to save time and avoid reflow and repaint processes
    frag.appendChild(my_list);
    });
//append the fragments which already have lists to my unordered list in the document
    myul.appendChild(frag);
//add an event listener to the window for  scroll event
        window.addEventListener('scroll',()=>{

//Get the active section class name and store it in active_section variable then remove the 'your-active-class'
        const active_Section = document.getElementsByClassName('your-active-class')[0];
        if(active_Section !== undefined){
            active_Section.classList.remove('your-active-class')
        }
//Get the active nav corresponding to the active section on the window then remove navactive class
        const Active_Nav = document.getElementsByClassName('navactive')[0];
        if(Active_Nav !== undefined){
            Active_Nav.classList.remove('navactive')
        }

/* Get the bounding rectangle's edges (top, left, bottom, and right) then add 'your-active-class'
to the class within this rectangle */

        scts.forEach(section => {

        const rct = section.getBoundingClientRect();

        if(rct.top >=-30 && rct.top<400){
                               
                section.classList.add('your-active-class');
// make the navigation bar active when scroll over the section area with the bounding rectangle's edges
                
         const li_active = document.querySelectorAll(`a[href='${section.id}']`)[0].parentElement;

         li_active.classList.add("navactive");
                
// go up to the beginning of document
        if (section.id == "section1"){
                   
             upgo.style.display = 'none';
        }else {

             upgo.style.display ='block';
           }
        }
    })
})
    

 
