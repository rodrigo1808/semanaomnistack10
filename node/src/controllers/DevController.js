const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const ObjectId = require('mongodb').ObjectId;

// index, show, store, update, destroy

module.exports = {

    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username })

        if(!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
            const { name = login, bio, avatar_url } = apiResponse.data;
        
            const techsArray = parseStringAsArray(techs);
        
            console.log(name, bio, avatar_url, techsArray);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })

        }

        return response.json(dev);
    },

    async update(request, response) {
        const { id } = request.params;


        const { name, techs, bio, latitude, longitude } = request.body;
        
        const objectId = new ObjectId(id);

        let location;

        if(longitude && latitude) {
            location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        }

        const dev = await Dev.updateOne(
            { _id: { $eq: objectId } },
            { $set: { name, techs: parseStringAsArray(techs), bio, location } }
        );
        
        return response.json(dev);
    },

    async destroy(request, response) {
        const { id } = request.params;

        const objectId = new ObjectId(id);

        const dev = await Dev.deleteOne({
            _id: {
                $eq: objectId
            }
        });
        
        return response.json(dev);
    }
}