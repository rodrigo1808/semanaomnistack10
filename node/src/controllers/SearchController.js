const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(require, response) {
        // Buscar todos os devs em 10km
        // Filtrar por tecnologia
        const { longitude, latitude, techs } = require.query;

        const techsArray = parseStringAsArray(techs);
        
        const devs = await Dev.find({
            techs: {
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [ Number(longitude), Number(latitude) ]
                    },
                    $maxDistance: 10000 // 10km
                }
            }
        })

        return response.json(devs);
    }
}