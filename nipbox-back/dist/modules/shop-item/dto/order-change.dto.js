"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class OrderChangeDto {
}
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => Product),
    __metadata("design:type", Array)
], OrderChangeDto.prototype, "products", void 0);
exports.default = OrderChangeDto;
class Product {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumberString(),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], Product.prototype, "order", void 0);
//# sourceMappingURL=order-change.dto.js.map