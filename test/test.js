'use strict';

const Config = require('../lib/config');

const config = new Config(
[
    {
        domain: [ 'staging.xclbr.com', 'hq.xclbr.com' ],
        ssl: true
    }
]);

console.log( config.get() );
