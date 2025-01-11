const S = ( n ) => '    '.repeat( n );
const E = ';\n';

module.exports = class NginxConfig
{
    #config;

    constructor( config )
    {
        this.#config = config;
    }

    get()
    {
        let config = [];

        for( let item of this.#config )
        {
            let item_config = 'server\n{\n';

            item_config += S(1) + 'server_name' + S(1) + item.domain.join(' ') + E;

            item_config += '\n';

            item_config += S(1) + 'listen' + S(1) + '443 ssl' + E;

            item_config += '\n';

            item_config += S(1) + 'access_log' + S(1) + 'off' + E;
            item_config += S(1) + 'error_log' + S(1) + 'off' + E;

            config.push( item_config += '}' );
        }

        return config.join('\n\n');
    }
}
