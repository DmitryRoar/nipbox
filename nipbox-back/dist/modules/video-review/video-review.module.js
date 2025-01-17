"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const file_service_1 = require("../file/file.service");
const video_review_controller_1 = require("./video-review.controller");
const video_review_service_1 = require("./video-review.service");
let VideoReviewModule = class VideoReviewModule {
};
VideoReviewModule = __decorate([
    common_1.Module({
        controllers: [video_review_controller_1.default],
        providers: [video_review_service_1.default, file_service_1.default],
    })
], VideoReviewModule);
exports.default = VideoReviewModule;
//# sourceMappingURL=video-review.module.js.map