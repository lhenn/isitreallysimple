

const mealTypes = ['','Pudding', 'Meat', 'Rice, Grains, and Pulses', 'Noodles and Pasta', 'Brunch'];
const simpleCategories = ['S', 'I', 'M', 'P', 'L', 'E'];
const simpleRatings = ['simple', 'not simple'];
const tasteRatings = [0, 1, 2, 3, 4, 5];



const averageTasteRatings = (tasteRatings) => {
    if(tasteRatings != null){
        let average = tasteRatings.reduce((a, b) => (parseInt(a) + parseInt(b))) / tasteRatings.length;        
        return Math.round(average * 100)/100;
    } 
    return 0;
}
const countSimpleRatings = (simpleRatings) => {
    if(simpleRatings != null)
        return ({
            simple: simpleRatings.filter(s => s === 'simple').length,
            notSimple: simpleRatings.filter(s => s === 'not simple').length
        })      
    return 0;
}


module.exports = {
    mealTypes: mealTypes,
    simpleCategories: simpleCategories,
    tasteRatings: tasteRatings,
    simpleRatings: simpleRatings,
    averageTasteRatings: averageTasteRatings,
    countSimpleRatings: countSimpleRatings
}