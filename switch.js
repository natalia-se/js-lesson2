const currentWeather = "sunny";

switch(currentWeather){
    case "rainy":
        console.log("Det kommer att regna");
        break;
    case "sunny":
        console.log("Det verkar vara soligt");
        break;
    case "cloudy":
        console.log("Molning idag");
        break;
    default:
        console.log("I don't know");
        break;
}