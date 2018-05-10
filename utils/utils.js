const parseString = require('xml2js').parseString;

/** 
* Extrae el src de imagen textoque se le pasa
* @param {String} tex Texto(con xml format) que hay que pasarle
* @returns {string} link de la imagen
*/
export const extractImage = text =>{
    let imgSrc
    parseString(text, (err, result) => {
        if(result){
            imgSrc = text
        }
        else{ 
            imgSrc = 'http://www.industrialparts.com.sv/wp-content/uploads/2017/02/Error_l-531.jpg'
        }
    })
    return imgSrc
}

/**
 * Funcion para extraer la pequeña descripcion de la noticia
 * @param {String} text TExto de donde se extrae la descripcion
 * @returns {String} Descripcion, y si no hay devuelve un mensaje
 */
export const extractDescription = text => {
    let shortDescription = null
    if(text){
        shortDescription = text.substring(text.indexOf('div>') + 4)
        if (shortDescription === '') {
            shortDescription = 'Resumen no disponible'
        }
    }
    else{ 
        shortDescription = 'Resumen no disponible'
    }
    return shortDescription
}

/**
 * Funciones que devuelven la categoria segun diario
 * @param {String} journal Nombre del diario
 * @returns {Array} Listado de categorias del diario
 */
const categoriesEsquiu = [
    {name:'Política', link: 'r=10'}, 
    {name:'Sociedad', link:'http://www.elesquiu.com/rss/feed.html?r=11'},
    {name:'Policiales', link:'r=12'}, 
    {name:'Nacionales', link:'r=502'},
    {name:'Cultura',link:'r=14'}, 
    {name:'Deportes',link:'r=15'},
    {name:'Entrevistas',link:'r=16'}, 
    {name:'Editorial',link:'r=17'},
    {name:'Correo y Opinión',link:'r=18'}, 
    {name:'Tecnología',link:'r=20'},
    {name:'Internacionales',link:'r=504'}, 
    {name:'Educación',link:'r=13'},
]

const categoriesClarin = [
    {name: 'Política',link: 'politica/'},
    {name: 'Policiales',link: 'policiales/'},
    {name: 'Cultura',link: 'cultura/'},
    {name: 'Economia',link: 'economia/'},
    {name: 'Fútbol',link: 'deportes/futbol/'},
    {name: 'Espectaculos', link:'espectaculos/'},
]

export const chooseCategories = text => {
    if (text === 'El esquiu') return categoriesEsquiu
    if (text === 'Clarin') return categoriesClarin
}