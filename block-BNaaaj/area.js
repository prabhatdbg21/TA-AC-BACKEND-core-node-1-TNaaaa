function areaOfSquare(a) {
    return a * a;
}

function areaOfRectangle (l, b) {
    return l * b;
}

function areaOfCircle (r) {
    return 3.14 * r * r;
}

module.exports = {
    areaOfSquare: areaOfSquare,
    areaOfRectangle: areaOfRectangle,
    areaOfCircle: areaOfCircle
}