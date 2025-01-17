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
class OrderCreateDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested({
        each: true,
    }),
    __metadata("design:type", Array)
], OrderCreateDto.prototype, "items", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], OrderCreateDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsEmail(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], OrderCreateDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], OrderCreateDto.prototype, "adress", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], OrderCreateDto.prototype, "city", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], OrderCreateDto.prototype, "country", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], OrderCreateDto.prototype, "trafic", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], OrderCreateDto.prototype, "deliveryType", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], OrderCreateDto.prototype, "zip", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], OrderCreateDto.prototype, "phone", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], OrderCreateDto.prototype, "promocode", void 0);
exports.default = OrderCreateDto;
class Item {
}
//# sourceMappingURL=order-create.dto.js.map