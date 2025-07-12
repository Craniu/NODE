//HATEOAS
const HATEOAS = async (entity, data)=> {
    const result = data.map((item) => {
        return {
            viajes: item.destino,
            
            links: [
                {
                    href: `http://localhost:3000/api/${entity}/${item.id}`
                }
            ]
        }
    }).slice(0,4);
    //console.log(result);
    const total = data.length
    const dataWhitHateoas = {
        total,
        result
    }
    //console.log(dataWhitHateoas)
    return dataWhitHateoas;
}



export default HATEOAS;