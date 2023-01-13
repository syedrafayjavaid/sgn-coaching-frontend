const env = 'prod'

let config = {

    // ENV 
    local: {
        base_url: 'http://localhost:3005'
    },
    prod: {
        base_url: 'https://sgn-coaching-frontend.onrender.com'
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
