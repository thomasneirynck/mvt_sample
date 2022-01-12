

### MVT sample 

Sample code showing how to:
- create a TMS server, using the [Elasticsearch vector tile search API](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-vector-tile-api.html).
- build a web-app using [MapLibre](https://maplibre.org/), connecting to this TMS service.

#### Prerquisites

This sample uses NodeJS. Install the runtime from [NodeJS](https://nodejs.dev/).


#### Setup

Install dependencies with `npm`. npm is included with the NodeJS runtime.

> npm install


Run an [Elasticsearch](https://www.elastic.co/downloads/elasticsearch) instance.

The sample code assumes it is running on `http://localhost:9200`.


#### Run TMS server

To start the TMS server, run the node script. `node` is included with the NodeJS runtime.

> node ./index.js

#### Demo page

To view the web page, just open up the `./index.html` file in a browser.

