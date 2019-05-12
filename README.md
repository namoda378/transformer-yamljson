# @gridsome/transformer-yamljson

> YAML transformer for Gridsome

## Install
- `yarn add transformer-yamljson`
- `npm install transformer-yamljson`


## What it Does 

- This is not the original yaml transformer but it rather takes yaml and turns it into a json string.
- This jsonstring can accessed via the json field and be parsed and readed by gridsome page-queries.
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



## Current Issue

- Currently there is no way to integrate this package into package.json since i could not put my package under the @gridsome namespace. This is mandatory since a transformer should be under the @gridsome directory in node_modules. You can do this manually but you'll have to do it for every repository 

