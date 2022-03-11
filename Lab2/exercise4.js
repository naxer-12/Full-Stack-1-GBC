function helloWorlds(arg){
    if('number'===typeof(arg)){
        for(let i=0 ; i<arg ; i++){
            console.log("Hello World!")
        }
    }
    else{
        console.log("Goodbye world")
    }
}