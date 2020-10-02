var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Птица
var ABird = /** @class */ (function () {
    function ABird(color, name, size, stamina, weight) {
        this._type = 'Bird';
        this._color = color;
        this._name = name;
        this._size = size;
        this._stamina = stamina;
        this._weight = weight;
    }
    Object.defineProperty(ABird.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ABird.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ABird.prototype, "color", {
        get: function () {
            return this._color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ABird.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ABird.prototype, "stamina", {
        get: function () {
            return this._stamina;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ABird.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        enumerable: false,
        configurable: true
    });
    ABird.prototype.moving = function (typeMoving) {
        console.log('======> moving');
        console.log("=> \u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0430\u044E\u0441\u044C - \"" + typeMoving + "\"");
    };
    ABird.prototype.nutrition = function (typeFood) {
        console.log('======> nutrition');
        console.log("=> \u041A\u0443\u0448\u0430\u044E - \"" + typeFood + "\"");
    };
    ABird.prototype.printInfo = function () {
        console.log('======> Инормация о существе');
        console.log("=> \u0442\u0438\u043F \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0430: " + this.type);
        console.log("=> \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: " + this.name);
        console.log("=> \u0432\u0435\u0441: " + this.weight);
        console.log("=> \u0440\u0430\u0437\u043C\u0435\u0440: " + this.size);
        console.log("=> \u043E\u043A\u0440\u0430\u0441: " + this.color);
        console.log("=> \u0437\u0430\u043F\u0430\u0441 \u0436\u0438\u0437\u043D\u0435\u043D\u043D\u044B\u0445 \u0441\u0438\u043B: " + this.stamina);
    };
    ABird.prototype.clearFeathers = function () {
        console.log('======> clearFeathers');
        console.log('=> Чищу перья');
    };
    return ABird;
}());
var Parrot = /** @class */ (function (_super) {
    __extends(Parrot, _super);
    function Parrot(color, name, size, stamina, weight) {
        return _super.call(this, color, name, size, stamina, weight) || this;
    }
    Parrot.prototype.attack = function () {
        console.log('======> attack');
        console.log('=> Атакую врага своим клювом при помощи специальной попугайной техники');
    };
    Parrot.prototype.foodExtraction = function () {
        console.log('======> foodExtraction');
        console.log('=> Копаю землю когтями и ищу еду в земле именно так, как это делают попугаи');
    };
    Parrot.prototype.moving = function () {
        _super.prototype.moving.call(this, 'Хождение по земле');
    };
    Parrot.prototype.nutrition = function () {
        _super.prototype.nutrition.call(this, 'Червяк');
    };
    Parrot.prototype.beAParrot = function () {
        console.log('======> beAParrot');
        console.log('=> Ура я попугай, делаю свои попугайные дела');
    };
    return Parrot;
}(ABird));
var myParrot1 = new Parrot('red', 'Красный попугай', 12, 100, 3);
var myParrot2 = new Parrot('blue', 'Синий попугай', 16, 111, 5);
console.log('=============myParrot1==============');
myParrot1.printInfo();
myParrot1.moving();
myParrot1.foodExtraction();
myParrot1.nutrition();
myParrot1.attack();
myParrot1.clearFeathers();
myParrot1.beAParrot();
console.log('=============myParrot2==============');
myParrot2.printInfo();
myParrot2.moving();
myParrot2.foodExtraction();
myParrot2.nutrition();
myParrot2.clearFeathers();
myParrot2.beAParrot();
