$(function() {
    var slider = document.getElementById("js__range-slider");
    var output = document.getElementById("js__range-value");
    output.innerHTML = slider.value;
    slider.oninput = function() {
        output.innerHTML = this.value;
    }
});

