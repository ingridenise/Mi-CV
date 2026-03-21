const secciones= document.querySelectorAll(".skills, .projects, .about")

secciones.forEach( seccion=>{
    seccion.classList.add('fade-in')

})

const observer= new IntersectionObserver ((entries)=>{
    entries.forEach((entry)=> {
        if(entry.isIntersecting)  {
    
            entry.target.classList.add('show')
        }

    })
}, {threshold: 0.1})

secciones.forEach(seccion=>observer.observe (seccion))
