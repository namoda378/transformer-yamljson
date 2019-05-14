const jsYaml = require('js-yaml')

class YamlTransformer {
  static mimeTypes () {
    return ['text/yaml']
  }

  parse (content) {
    
    content = content.replace(/\t/g,'  ');
    content = content.replace(/(\r\n\s*)*(\r\n\s*)/g,'$2');
    
    console.log(content);
    
    let data = jsYaml.load(content)
    
    let title = Object.keys(data)[0];

    const json = JSON.stringify(data,(key,value)=>{
      if(Array.isArray(value)){
        return {...value};
      }else{
        return value;
      }
    });
     
    // data = JSON.parse(arrayConversionApplied);
    
    return { fields:{title,json} };
  }
}

module.exports = YamlTransformer
