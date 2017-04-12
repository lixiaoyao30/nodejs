var main={};

main.MyRequest=function (Path){
    function Module(){
        this.exports={};
    }
    var fs=require('fs');
    var sourceCode=fs.readFileSync(Path,'utf8');
    var packSourceCode='(function(exports,module){'+sourceCode+' return module.exports;})';

    var packObj = eval(packSourceCode);

    // Module will include attributes called exports
    var module = new Module();

    var obj = packObj(module.exports,module);
    return obj;
}

