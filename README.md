# @gridsome/transformer-yamljson

> YAML transformer for Gridsome

## Install
- `yarn add @gridsome/transformer-yamljson`
- `npm install @gridsome/transformer-yamljson`


## What it Does 

- This is not the original yaml transformer but it rather takes yaml and turns it into a json string.
- This jsonstring can accessed via the json field and be parsed and readed by gridsome page-queries.
- This is useful since graphql requires you to specify all fields to retrieve, If you use this transformer you can just get the whole json and play with it in vue code.