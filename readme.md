### MVT sample 

Sample code showing how to:

- create a TMS server, using the [Elasticsearch vector tile search API](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-vector-tile-api.html).
- build a web-app using [MapLibre](https://maplibre.org/), connecting to this TMS service.

#### Prerquisites

This sample uses NodeJS. Install the runtime from [NodeJS](https://nodejs.dev/).


#### Setup

Install dependencies with `npm`. npm is included with the NodeJS runtime.

> npm install

#### Start Elasticsearch

Run an [Elasticsearch](https://www.elastic.co/downloads/elasticsearch) instance. The sample code assumes it is running on the location stored in the `ES_URL` environment variable or in `http://localhost:9200`. Note: Hexagon aggregation requires a subscription or trial license.


#### Run TMS server

To start the TMS server, run the node script. `node` is included with the NodeJS runtime. It will start a server in `localhost` and `PORT` environment variable or `8080` by default.

> node ./index.js

#### Demo page

To view the web page, just open up `http://localhost:8080` or `http://localhost:{PORT}` browser.

