

const body = document.querySelector('body');
const loadPageFrame = document.querySelector('.load-page-frame');
const translateButtons = document.querySelectorAll('.translate-button');
const h2 = document.querySelectorAll('h2')
const backButton = document.querySelectorAll('.back-button h4')


const scrollBtn=  document.getElementById('scroll-btn-sign');

window.scrollTo(0, window.scrollY - 1);
    
window.addEventListener('scroll', function() {
    if (window.scrollY > 1) {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.visibility = 'visible';
        scrollBtn.style.display = 'flex';
        scrollBtn.style.transition = 'opacity 0.3s';
    } else {
        scrollBtn.style.display = 'none';
    }
});



window.onload = function()
{
    body.classList.remove('overflow-hidden')
    body.classList.add('overflow-auto')
    loadPageFrame.classList.add('load-page-frame-animation')

}


scrollBtn.addEventListener('click', function() {
    document.querySelector('html').scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelector('body').scrollTo({ top: 0, behavior: 'smooth' });
});




const FooterCl= document.querySelectorAll('.footer-cl')

var currentDate = new Date()

const todayYears = document.querySelectorAll('.today-years')

todayYears.forEach(function(element){
    element.textContent =currentDate.getFullYear();
})



translateButtons.forEach((translateButton) => {
    

    const attr = translateButton.getAttribute('language');


    
    let lastHoveredElement = document.querySelector('.translate-button-active');
    translateButton.addEventListener('click', () =>{
         
        if(attr != null)
        {
            StateLanguage = attr
        }
       
        translateButtons.forEach((btn) => {
            btn.classList.remove('translate-button-active');
        });

        

        translateButton.classList.add('translate-button-active');
        lastHoveredElement = translateButton;

        backButton[0].textContent =  data[attr].backButton;
        h2[0].textContent = data[attr].h2a;
        h2[1].textContent = data[attr].h2b;
        h2[2].textContent = data[attr].h2c;
        h2[3].textContent = data[attr].h2d;
        h2[4].textContent = data[attr].h2e;
        h2[5].textContent = data[attr].h2f;
        h2[6].textContent = data[attr].h2h;
        h2[7].textContent = data[attr].h2i;
        h2[8].textContent = data[attr].h2j;

        FooterCl[0].innerHTML =  data[attr].FooterCl0
        FooterCl[2].innerHTML =  data[attr].FooterCl2


            
    });
});



var data =
  {

    spanish:
        {
    backButton: `Volver`,
    h2a: `Para crear el callejón en low-poly, comenzamos con un coche patrulla, modelándolo mediante técnicas básicas y utilizando el modificador Mirror.`,
    h2b: `Al coche patrulla se le añadieron más detalles, con proporciones exageradas para simular un estilo caricaturesco.`,
    h2c: `La escena se diseñó de forma modular utilizando el modificador Array, y se incluyeron objetos adicionales, como basura, para que el lugar se sintiera más realista.`,
    h2d: `Se añadieron más objetos y detalles al diorama para crear una composición creíble en la escena.`,
    h2e: `A cada objeto se le asignaron materiales que correspondieran a su apariencia en la vida real, como metal, vidrio, cartón, plástico opaco, plástico pulido y emisores de luz.`,
    h2f: `Finalmente, se ajustaron los colores y la iluminación para darle a la escena una atmósfera nocturna, como después de la lluvia, con un toque tanto misterioso como encantador. Crear el diorama puede tomar de 3 a 5 días, dependiendo de su complejidad.`,
    h2h: `Render número 1.`,
    h2i: `Render número 2.`,
    h2j: `Gracias por revisar mi trabajo.`,



    FooterCl0:
        `
        <span class="font-weight-600 padding-left-1">Teléfono</span>
                <div class="margin-1">
                    +1(206)6705847
                </div>`
        ,
        FooterCl2:`Creado por <span class="font-weight-600">Gregory Peña</span>`,
 

    
    

    },
    
    english:
    {   
        backButton: `Back`,
        h2a:`To create the low-poly alleyway, we started with a police patrol car, shaping it through basic modeling and using the mirror modifier`,
        h2b:`The police patrol car was given more details, with exaggerated proportions to simulate a cartoon style.`,
        h2c:`The scene was designed modularly using the Array modifier, and additional objects, such as trash, were included to make the place feel more realistic.`,
        h2d:`
More objects and details were added to the diorama to create a believable composition for the scene.`,
        h2e:`Each object was assigned materials corresponding to how they would appear in real life, such as metal, glass, cardboard, opaque plastic, polished plastic, and light emitters.`,
        h2f:`
Finally, colors and lighting were adjusted to give the scene a nighttime atmosphere, as if after the rain, with a touch of both eerie and charming elements. Creating the diorama can take 3 to 5 days, depending on its complexity.`,
    h2h: `Render number 1.`,
    h2i: `Render number 2.`,
    h2j: `Thank you for reviewing my work.`,
    FooterCl0:
        `
        <span class="font-weight-600 padding-left-1">Phone</span>
                <div class="margin-1">
                    +1(206)6705847
                </div>`
        ,
        FooterCl2:`Created by <span class="font-weight-600">Gregory Peña</span>`,
    },
   
}