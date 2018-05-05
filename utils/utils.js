const parseString = require('xml2js').parseString;

/** 
* Extrae el src de imagen textoque se le pasa
* @param {String} tex Texto(con xml format) que hay que pasarle
* @returns {string} link de la imagen
*/
export const extractImage = (text)=>{
    let imgSrc
    parseString(text, (err, result) => {
        if(result){
            imgSrc = result.div.img[0].$.src
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
export const extractDescription = (text) => {
    let shortDescription = null
    parseString(text, (err, result) => {
        if(result){
            shortDescription = text.substring(text.indexOf('div>') + 4)
            if (shortDescription === '') {
                shortDescription = 'Resumen no disponible'
            }
        }
        else{ 
            shortDescription = 'Resumen no disponible'
        }
    })
    return shortDescription
}