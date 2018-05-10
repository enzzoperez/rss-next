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
    {name:'Política', link: 'http://www.elesquiu.com/rss/feed.html?r=10'}, 
    {name:'Sociedad', link:'http://www.elesquiu.com/rss/feed.html?r=11'},
    {name:'Policiales', link:'http://www.elesquiu.com/rss/feed.html?r=12'}, 
    {name:'Nacionales', link:'http://www.elesquiu.com/rss/feed.html?r=502'},
    {name:'Cultura',link:'http://www.elesquiu.com/rss/feed.html?r=14'}, 
    {name:'Deportes',link:'http://www.elesquiu.com/rss/feed.html?r=15'},
    {name:'Entrevistas',link:'http://www.elesquiu.com/rss/feed.html?r=16'}, 
    {name:'Editorial',link:'http://www.elesquiu.com/rss/feed.html?r=17'},
    {name:'Correo y Opinión',link:'http://www.elesquiu.com/rss/feed.html?r=18'}, 
    {name:'Tecnología',link:'http://www.elesquiu.com/rss/feed.html?r=20'},
    {name:'Internacionales',link:'http://www.elesquiu.com/rss/feed.html?r=504'}, 
    {name:'Educación',link:'http://www.elesquiu.com/rss/feed.html?r=13'},
]

const categoriesCatamarcaActual = [
    {name:'Política', link: 'http://www.catamarcactual.com.ar/rss/feed.html?r=1'}, 
    {name:'Policiales', link:'http://www.catamarcactual.com.ar/rss/feed.html?r=4'}, 
    {name:'Nacionales', link:'http://www.catamarcactual.com.ar/rss/feed.html?r=6'},
    {name:'Economia',link:'http://www.catamarcactual.com.ar/rss/feed.html?r=2'}, 
    {name:'Informacion General',link:'http://www.catamarcactual.com.ar/rss/feed.html?r=3'},
    {name:'Deportes',link:'http://www.catamarcactual.com.ar/rss/feed.html?r=5'}, 
    {name:'Educación',link:'http://www.catamarcactual.com.ar/rss/feed.html?r=7'},
]

const categoriesClarin = [
    {name: 'Política',link: 'https://www.clarin.com/rss/politica/'},
    {name: 'Policiales',link: 'https://www.clarin.com/rss/policiales/'},
    {name: 'Cultura',link: 'https://www.clarin.com/rss/cultura/'},
    {name: 'Economia',link: 'https://www.clarin.com/rss/economia/'},
    {name: 'Fútbol',link: 'https://www.clarin.com/rss/deportes/futbol/'},
    {name: 'Espectaculos', link:'https://www.clarin.com/rss/espectaculos/'},
]

const categoriesAncasti = [
    {name: 'Política y Economía',link: 'http://www.elancasti.com.ar/rss/feed.html?r=1'},
    {name: 'Policiales',link: 'http://www.elancasti.com.ar/rss/feed.html?r=6'},
    {name: 'Información General',link: 'http://www.elancasti.com.ar/rss/feed.html?r=9'},
    {name: 'Deportes',link: 'http://www.elancasti.com.ar/rss/feed.html?r=5'},
    {name: 'Educación',link: 'http://www.elancasti.com.ar/rss/feed.html?r=8'},
    {name: 'País', link:'http://www.elancasti.com.ar/rss/feed.html?r=2'},
    {name: 'Mundo', link:'http://www.elancasti.com.ar/rss/feed.html?r=3'},
    {name: 'Cultura', link:'http://www.elancasti.com.ar/rss/feed.html?r=51'},
    {name: 'Espectáculo', link:'http://www.elancasti.com.ar/rss/feed.html?r=4 '},
]

export const chooseCategories = text => {
    let value = text.toUpperCase()
    if (value === 'EL ESQUIU') return categoriesEsquiu
    if (value === 'CATAMARCA ACTUAL') return categoriesCatamarcaActual
    if (value === 'CLARIN') return categoriesClarin
    if (value === 'EL ANCASTI') return categoriesAncasti
}