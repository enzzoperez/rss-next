const parseString = require('xml2js').parseString;

/** 
* Muestra un mensaje de texto
* @param {String} texto nombre del metodo
* @param {String} texto mensaje a mostrar
* @returns {string} el codigo de retorno 0
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