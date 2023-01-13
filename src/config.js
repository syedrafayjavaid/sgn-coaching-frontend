const env = 'local'

let config = {

    // ENV 
    local: {
        base_url: 'http://localhost:3005'
    },
    prod: {
        base_url: 'https://sgn-coaching-backend-production.up.railway.app'
    },
    office: {
        base_url: ''
    }
}

// ENV
if (env === 'local') config = config.local;
if (env === 'prod') config = config.prod;
if (env === 'office') config = config.office;

export default config;
