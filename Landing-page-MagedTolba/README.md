# Landing-page-Maged_Udacity
MY first landing page project for Udacity web professional Project Submission


About project
Architecture:The project structure is shown below. 
css
- styles.css    
index.html
js
- app.js
README.md

Usability: All features are usable across modern desktop, tablet, and phone browsers.
Styling: Styling has been added for active states in the folder js included in style.css

HTML Structure : a multi-section landing page which contains:-
                 1- Navigation bar added automatically up to sections were entered in the document content .
                 2-There are 4 sections that have been added to the page.
                 3- Page header linking the page to css file app.js ,style.css
                 4-Page footer which have top button




Langauge
JavaScript+css 

Features
  Navigation : Navigation is built dynamically as an unordered list up to document sections data-nav names , id
  Section Active State :It shows which section is being viewed while scrolling through the page.
  Scroll to Anchor : When clicking an item from the navigation menu, the link scrolls to the appropriate section.
  Top button : it scrolls the page to the top part of the document.
  
   
code has beed added to app.js :

create Global variable (scts ) for document sections to
add sections automatically to navigation bar
 document.querySelectorAll('section')
 
 create Global variable (upgo ) to scroll the document to
 top part when click the Top button
 document.getElementById('topbutton')
 
 create Global variable (freg ) to append document elements instead of adding elements
   to document directly so we can avoid reflow and repaint 
 document.createDocumentFragment()

create Global variable (myul ) to add unordered list automatically to the document
 document.querySelector('ul');

build dynamically the navigation bar
forEach(section => {
Get section id then store it in section_id variable
   section.getAttribute('id')
   
 Get section data-nav then store it in data_nav variable
  section.getAttribute("data-nav")
  
create list items in my_list variable
    document.createElement("li")
    
ctreate links  in my_link variable
   document.createElement("a")
   
add the style of navbar menu from style.css file
    my_link.classList.add("menu__link")
    
 create link as href from section id in my_link variable
    my_link.setAttribute('href',section_id)

 add addEventListener  to the link in navigation bar to scroll into view when we click the link
    my_link.addEventListener('click', e => {
        e.preventDefault();
        section.scrollIntoView({behavior : "smooth"})
    });

Get section name  from the data_nav variable then store it in section_name variable
    document.createTextNode(data_nav)
    
Add section name to the link (my_link) in navigation bar from section_name variable
    my_link.appendChild(section_name)
    
Add the link with section  name to  my list (my_list) from my_link variable
    my_list.appendChild(my_link)
    
Append my list to the document fragment to save time and avoid reflow and repaint processes
    frag.appendChild(my_list)
    })
    
Append the fragments which already have lists to my unordered list in the document
    myul.appendChild(frag)
    
Add an event listener to the window for  scroll event
        window.addEventListener('scroll',()=>{

Get the active section class name and store it in active_section variable then remove the 'your-active-class'
         document.getElementsByClassName('your-active-class')[0];
        if(active_Section !== undefined){
            active_Section.classList.remove('your-active-class')
        }
Get the active nav corresponding to the active section on the window then remove navactive class
        const Active_Nav = document.getElementsByClassName('navactive')[0];
        if(Active_Nav !== undefined){
            Active_Nav.classList.remove('navactive')
        }

Get the bounding rectangle's edges (top, left, bottom, and right) then add 'your-active-class'
to the class within this rectangle */

        scts.forEach(section => {

        const rct = section.getBoundingClientRect();

        if(rct.top >=-30 && rct.top<400){
                               
                section.classList.add('your-active-class');
 Make the navigation bar active when scroll over the section area with the bounding rectangle's edges
                
         const li_active = document.querySelectorAll(`a[href='${section.id}']`)[0].parentElement;

         li_active.classList.add("navactive");
                
Go scrolling up to the beginning of document
        if (section.id == "section1"){
                   
             upgo.style.display = 'none';
        }else {

             upgo.style.display ='block';
           }
        }
    })
})
    
code has been added to style.ss :

/* the style of top Button  */
#topbutton {
text-align: center;
z-index: 912;
 padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color:red;
  border: 3px;
  border-radius: 15px;
  box-shadow: 0 9px #999;
 right: 10px;
 position: absolute;
 justify-content: center;
 align-items: center;
  display: flex;
  left:50%;

}


#topbutton:hover {
background-color: #3e7e31
cursor: pointer;
opacity: 2;



}
#topbutton:active {
cursor:hand;
opacity: 3;
background-color: #3e8e41;
  box-shadow: 0 5px #666;
 transform: translateY(4px);
}

ection:nth-of-type(even) .landing__container::before {
    
    background: rgb(255, 99, 71);
  

section:nth-of-type(odd) .landing__container::before {
    
    background: rgba(255, 99, 71, 0.5);


         }
@media only screen and (max-width: 768px) {
    #navbar__list li {
          background-color: lightblue;
         display: block;
        text-align: center;
    }
  }



