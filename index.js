const http = require('http');
const url = require('url');
const querystring = require('querystring');
const { Client } = require('@elastic/elasticsearch');

const elasticsearchHost = 'http://elastic:changeme@localhost:9200/';
const client = new Client({ node: elasticsearchHost })


const port = 80;
const server = http.createServer(async function (request, response) {

    // Set CORS headers
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Request-Method', '*');
    response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    response.setHeader('Access-Control-Allow-Headers', '*');

    // http://localhost/tile?index=parcels&geometry=geometry&x={x}&y={y}&z={z}
    if (request.url.startsWith('/tile')) {
        const urlParse = url.parse(request.url);
        const params = querystring.decode(urlParse.query);

        console.log(`Tile request: ${JSON.stringify(params)}`);
        try {
            const tile = await client.searchMvt({
                index: params.index,
                field: params.geometry,
                zoom: parseInt(params.z),
                x: parseInt(params.x),
                y: parseInt(params.y),
                exact_bounds: true,
                extent: 4096,
                grid_precision: params.renderMethod === 'aggs' ? 8 : 0, // only create grid when necessary
                grid_type: 'grid',
                size: params.renderMethod === 'hits' ? 10000 : 0,// only populate the hits layer when necessary
                track_total_hits: false,
                body: {}
            });

            // set response header
            response.writeHead(200, {
                'content-disposition': 'inline',
                'content-length': tile ? `${tile.body.length}` : `0`,
                'Content-Type': 'application/x-protobuf',
                'Cache-Control': `public, max-age=0`,
                'Last-Modified': `${new Date().toUTCString()}`,
            });

            // set response content
            response.write(tile.body);
            response.end();
        }catch (e){
            console.error(e);
            response.end();
        }
    } else {
        response.end('Foobar');
    }

});

server.listen(port);
console.log(`Tile server running on port ${port}`);