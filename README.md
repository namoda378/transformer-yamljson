# gridsome-transformer-yamljson

> YAML to JSON string transformer for Gridsome

## Install

- Do not use '@gridsome/' prefix since this package is not an official gridsome package. 

- `yarn add gridsome-transformer-yamljson`
- `npm install gridsome-transformer-yamljson`

## How To Use 

- This transformer can be used by writing the gridsome config file like this : 

<pre>
module.exports = {
  siteName: 'Namo',
  transformers:
    yamljson:{},
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: 
        {
          path: 'yamls/**/*.yaml',
          typeName: 'Yaml',
          yamljson: {
            plugins: [
              // ...local plugins
            ]
          }
        }
    }
  ],
}
</pre>


## What it Does 

- This is not the original yaml transformer but it rather takes yaml and turns it into a json string.
- This jsonstring can be accessed via the `json` field and be parsed and readed by gridsome page-queries.
- Currently the official yaml transformer doesn't handle pure number keys correctly, this transformer handles arrays or number keys fine since they just produce the json string. 
<pre>
    // myaml.yaml
    
    Hi:
        -a
        -b
        -c
</pre>
- will be viewable in the graphql db as 
<pre>
{
  "data": {
    "allYaml": {
      "edges": [
        {
          "node": {
            "path": "/yamls/myaml",
            "json": "{\"Hi\":{\"0\":\"a\",\"1\":\"b\",\"2\":\"c\"}}"
          }
        }
      ]
    }
  }
}
</pre>

- This is useful since graphql requires you to specify all fields to retrieve, If you use this transformer you can just get the whole json and play with it in vue code.

- Currently, the transformer eliminate all the empty lines so something like this (which would usually throw parsing errors): 
<pre>
    Hi:

        -i

        -am 
    
    
        -namo 
</pre>

- Will turn into this (before tranforming) : 
<pre>
    Hi:
        -i
        -am
        -namo 
</pre>
- I did this so you can write yaml files more comfortable for reading.
