iwage.transition = {

};

(function (transition) {
    function Quadratic(from, to, min, max) {
        this.from = from;
        this.to = to;
        this.min = min;
        this.max = max;
    }

    Quadratic.prototype.get = function (value) {
        value = value / this.to;

        return Math.pow(value, 2) * this.max + this.min;
    };

    function Cubic(from, to, min, max) {
        this.from = from;
        this.to = to;
        this.min = min;
        this.max = max;
    }

    Cubic.prototype.get = function (value) {
        value = value / this.to;

        return Math.pow(value, 3) * this.max + this.min;
    };

    function Exponencial(from, to, min, max) {
        this.from = from;
        this.to = to;
        this.min = min;
        this.max = max;
    }

    Exponencial.prototype.get = function (value) {
        value = value / this.to;

        var p = (value == 0) ? 0 : Math.pow(2, 10 * (value - 1));

        return p * this.max + this.min;
    };

    function ExponencialOut(from, to, min, max) {
        this.from = from;
        this.to = to;
        this.min = min;
        this.max = max;
    }

    ExponencialOut.prototype.get = function (value) {
        value = value / this.to;

        var p = (value == 1) ? 1 : -Math.pow(2, -10 * value) + 1;

        return p * this.max + this.min;
    };

    function QuadraticOut(from, to, min, max) {
        this.from = from;
        this.to = to;
        this.min = min;
        this.max = max;
    }

    QuadraticOut.prototype.get = function (value) {
        value = value / this.to;

        var p = -(Math.pow((value - 1), 2) - 1)

        return p * this.max + this.min;
    };


    transition.Quadratic = function (from, to, min, max) {
        return new Quadratic(from, to, min, max);
    };

    transition.Cubic = function (from, to, min, max) {
        return new Cubic(from, to, min, max);
    };

    transition.Exponencial = function (from, to, min, max) {
        return new Exponencial(from, to, min, max);
    };

    transition.QuadraticOut = function (from, to, min, max) {
        return new QuadraticOut(from, to, min, max);
    };

    transition.ExponencialOut = function (from, to, min, max) {
        return new ExponencialOut(from, to, min, max);
    };

})(iwage.transition);