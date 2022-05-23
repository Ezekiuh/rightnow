let gradientsArray = localStorage.getItem('gradients') ? JSON.parse(localStorage.getItem('gradients')) : [];

localStorage.setItem('gradients', JSON.stringify(gradientsArray));
const data = JSON.parse(localStorage.getItem('gradients'));

data.forEach(gradient => {
    createGradient(gradient.color1, gradient.color2, gradient.direction);
});

function restoreGradient() {
    var lastGradient = gradientsArray[gradientsArray.length-1];
    document.documentElement.style.setProperty('--color-1', lastGradient.color1);
    document.documentElement.style.setProperty('--color-2', lastGradient.color2);document.documentElement.style.setProperty('--gradient-direction', lastGradient.direction);
    document.getElementById("color-1").innerHTML = lastGradient.color1;
    document.getElementById("color-2").innerHTML = lastGradient.color2;
    document.getElementById("gradient-direction").value = lastGradient.direction;
}

gradientsArray.length > 0 && restoreGradient();

// Function to generate random color
function randomColorGenerator() {
    var characters = ["a","b","c","d","e","f",0,1,2,3,4,5,6,7,8,9];
    var randomColorArray = [];
    for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random()*characters.length);
        randomColorArray.push(characters[randomIndex])
    }
    return `#${randomColorArray.join("")}`;
}

// Function to set CSS color variables to randomly generated colors
function randomGradient() {
    var color1 = randomColorGenerator();
    var color2 = randomColorGenerator();

    document.documentElement.style.setProperty('--color-1', color1);
    document.documentElement.style.setProperty('--color-2', color2);

    document.getElementById("color-1").innerHTML = color1;
    document.getElementById("color-2").innerHTML = color2;
}