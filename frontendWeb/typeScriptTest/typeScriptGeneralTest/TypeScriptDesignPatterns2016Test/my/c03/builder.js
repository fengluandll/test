var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Builder1;
(function (Builder1) {
    var Probe = /** @class */ (function () {
        function Probe() {
        }
        return Probe;
    }());
    var Engine = /** @class */ (function () {
        function Engine(thrust) {
            this.thrust = thrust;
        }
        return Engine;
    }());
    var SolidRocketEngine = /** @class */ (function (_super) {
        __extends(SolidRocketEngine, _super);
        function SolidRocketEngine() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SolidRocketEngine;
    }(Engine));
    var SoundingRocket = /** @class */ (function () {
        function SoundingRocket() {
        }
        return SoundingRocket;
    }());
    var LiquidRocketEngine = /** @class */ (function (_super) {
        __extends(LiquidRocketEngine, _super);
        function LiquidRocketEngine() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.fuelLevel = 0;
            return _this;
        }
        LiquidRocketEngine.prototype.refuel = function (level) {
            this.fuelLevel = level;
        };
        return LiquidRocketEngine;
    }(Engine));
    var LiquidRocketStage = /** @class */ (function () {
        function LiquidRocketStage() {
            this.engines = [];
        }
        LiquidRocketStage.prototype.refuel = function (level) {
            if (level === void 0) { level = 100; }
            for (var _i = 0, _a = this.engines; _i < _a.length; _i++) {
                var engine = _a[_i];
                engine.refuel(level);
            }
        };
        return LiquidRocketStage;
    }());
    var FreightRocketFirstStage = /** @class */ (function (_super) {
        __extends(FreightRocketFirstStage, _super);
        function FreightRocketFirstStage(thrust) {
            var _this = _super.call(this) || this;
            var enginesNumber = 4;
            var singleEngineThrust = thrust / enginesNumber;
            for (var i = 0; i < enginesNumber; i++) {
                var engine = new LiquidRocketEngine(singleEngineThrust);
                _this.engines.push(engine);
            }
            return _this;
        }
        return FreightRocketFirstStage;
    }(LiquidRocketStage));
    var FreightRocketSecondStage = /** @class */ (function (_super) {
        __extends(FreightRocketSecondStage, _super);
        function FreightRocketSecondStage(thrust) {
            var _this = _super.call(this) || this;
            _this.engines.push(new LiquidRocketEngine(thrust));
            return _this;
        }
        return FreightRocketSecondStage;
    }(LiquidRocketStage));
    var FreightRocket = /** @class */ (function () {
        function FreightRocket() {
            this.stages = [];
        }
        return FreightRocket;
    }());
    // FREIGHT ROCKET
    var Satellite = /** @class */ (function () {
        function Satellite(id, weight) {
            this.id = id;
            this.weight = weight;
        }
        return Satellite;
    }());
    var RocketBuilder = /** @class */ (function () {
        function RocketBuilder() {
        }
        RocketBuilder.prototype.createRocket = function () {
        };
        RocketBuilder.prototype.addPayload = function (payload) {
        };
        RocketBuilder.prototype.addStages = function () {
        };
        RocketBuilder.prototype.refuelRocket = function () {
        };
        return RocketBuilder;
    }());
    var SoundingRocketBuilder = /** @class */ (function (_super) {
        __extends(SoundingRocketBuilder, _super);
        function SoundingRocketBuilder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SoundingRocketBuilder.prototype.createRocket = function () {
            this.buildingRocket = new SoundingRocket();
        };
        SoundingRocketBuilder.prototype.addPayload = function (probe) {
            this.buildingRocket.payload = probe;
        };
        SoundingRocketBuilder.prototype.addStages = function () {
            var payload = this.buildingRocket.payload;
            this.buildingRocket.engine =
                new SolidRocketEngine(payload.weight);
        };
        Object.defineProperty(SoundingRocketBuilder.prototype, "rocket", {
            get: function () {
                return this.buildingRocket;
            },
            enumerable: true,
            configurable: true
        });
        return SoundingRocketBuilder;
    }(RocketBuilder));
    var FreightRocketBuilder = /** @class */ (function (_super) {
        __extends(FreightRocketBuilder, _super);
        function FreightRocketBuilder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FreightRocketBuilder.prototype.createRocket = function () {
            this.buildingRocket = new FreightRocket();
        };
        FreightRocketBuilder.prototype.addPayload = function (satellite) {
            this.buildingRocket.payload = satellite;
        };
        FreightRocketBuilder.prototype.addStages = function () {
            var rocket = this.buildingRocket;
            var payload = rocket.payload;
            var stages = rocket.stages;
            stages[0] = new FreightRocketFirstStage(payload.weight * 4);
            if (payload.weight >= FreightRocketBuilder.oneStageMax) {
                stages[1] = new FreightRocketSecondStage(payload.weight);
            }
        };
        FreightRocketBuilder.prototype.refuel = function () {
            var rocket = this.buildingRocket;
            var payload = rocket.payload;
            var stages = rocket.stages;
            var oneMax = FreightRocketBuilder.oneStageMax;
            var twoMax = FreightRocketBuilder.twoStagesMax;
            var weight = payload.weight;
            stages[0].refuel(Math.min(weight, oneMax) / oneMax * 100);
            if (weight >= oneMax) {
                stages[1].refuel((weight - oneMax) / (twoMax - oneMax) * 100);
            }
        };
        Object.defineProperty(FreightRocketBuilder.prototype, "rocket", {
            get: function () {
                return this.buildingRocket;
            },
            enumerable: true,
            configurable: true
        });
        FreightRocketBuilder.oneStageMax = 1000;
        FreightRocketBuilder.twoStagesMax = 2000;
        return FreightRocketBuilder;
    }(RocketBuilder));
    var Director = /** @class */ (function () {
        function Director() {
        }
        Director.prototype.prepareRocket = function (builder, payload) {
            builder.createRocket();
            builder.addPayload(payload);
            builder.addStages();
            builder.refuelRocket();
            return builder.rocket;
        };
        return Director;
    }());
    var director = new Director();
    var soundingRocketBuilder = new SoundingRocketBuilder();
    var probe = new Probe();
    var soundingRocket = director.prepareRocket(soundingRocketBuilder, probe);
    var freightRocketBuilder = new FreightRocketBuilder();
    var satellite = new Satellite(0, 1200);
    var freightRocket = director.prepareRocket(freightRocketBuilder, satellite);
})(Builder1 || (Builder1 = {}));
