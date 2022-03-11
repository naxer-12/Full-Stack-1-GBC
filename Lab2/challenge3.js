function getKeyValuePairs(randObject){
    const keys = Object.keys(randObject).map((key)=>key)
    const values = Object.values(randObject).map((values)=>values)

    const newArr = [keys,values]
    console.log(newArr);
}