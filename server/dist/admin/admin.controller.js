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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const admin_service_1 = require("./admin.service");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    async uploadFile(file) {
        console.log('上传文件:', file.originalname, file.mimetype, file.size);
        return this.adminService.uploadFile(file);
    }
    async getCategories() {
        return this.adminService.getCategories();
    }
    async createCategory(body) {
        return this.adminService.createCategory(body);
    }
    async updateCategory(id, body) {
        return this.adminService.updateCategory(id, body);
    }
    async deleteCategory(id) {
        return this.adminService.deleteCategory(id);
    }
    async getFabrics() {
        return this.adminService.getFabrics();
    }
    async createFabric(body) {
        return this.adminService.createFabric(body);
    }
    async updateFabric(id, body) {
        return this.adminService.updateFabric(id, body);
    }
    async deleteFabric(id) {
        return this.adminService.deleteFabric(id);
    }
    async getCrafts() {
        return this.adminService.getCrafts();
    }
    async createCraft(body) {
        return this.adminService.createCraft(body);
    }
    async updateCraft(id, body) {
        return this.adminService.updateCraft(id, body);
    }
    async deleteCraft(id) {
        return this.adminService.deleteCraft(id);
    }
    async getFits() {
        return this.adminService.getFits();
    }
    async createFit(body) {
        return this.adminService.createFit(body);
    }
    async getStyles() {
        return this.adminService.getStyles();
    }
    async createStyle(body) {
        return this.adminService.createStyle(body);
    }
    async getTshirtColors() {
        return this.adminService.getTshirtColors();
    }
    async createTshirtColor(body) {
        return this.adminService.createTshirtColor(body);
    }
    async updateTshirtColor(id, body) {
        return this.adminService.updateTshirtColor(id, body);
    }
    async deleteTshirtColor(id) {
        return this.adminService.deleteTshirtColor(id);
    }
    async getSizes() {
        return this.adminService.getSizes();
    }
    async createSize(body) {
        return this.adminService.createSize(body);
    }
    async updateSize(id, body) {
        return this.adminService.updateSize(id, body);
    }
    async deleteSize(id) {
        return this.adminService.deleteSize(id);
    }
    async getProductSizes(id) {
        return this.adminService.getProductSizes(id);
    }
    async setProductSizes(id, body) {
        return this.adminService.setProductSizes(id, body.sizes);
    }
    async updateProductSize(productId, sizeId, body) {
        return this.adminService.updateProductSize(productId, sizeId, body);
    }
    async removeProductSize(productId, sizeId) {
        return this.adminService.removeProductSize(productId, sizeId);
    }
    async getProducts(categoryId, fabricId, craftId) {
        const filters = {};
        if (categoryId)
            filters.categoryId = parseInt(categoryId, 10);
        if (fabricId)
            filters.fabricId = parseInt(fabricId, 10);
        if (craftId)
            filters.craftId = parseInt(craftId, 10);
        return this.adminService.getProducts(Object.keys(filters).length > 0 ? filters : undefined);
    }
    async getProductById(id) {
        return this.adminService.getProductById(id);
    }
    async createProduct(body) {
        return this.adminService.createProduct(body);
    }
    async updateProduct(id, body) {
        return this.adminService.updateProduct(id, body);
    }
    async deleteProduct(id) {
        return this.adminService.deleteProduct(id);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.memoryStorage)(),
        limits: { fileSize: 50 * 1024 * 1024 },
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)('categories'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Post)('categories'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createCategory", null);
__decorate([
    (0, common_1.Put)('categories/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateCategory", null);
__decorate([
    (0, common_1.Delete)('categories/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteCategory", null);
__decorate([
    (0, common_1.Get)('fabrics'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getFabrics", null);
__decorate([
    (0, common_1.Post)('fabrics'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createFabric", null);
__decorate([
    (0, common_1.Put)('fabrics/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateFabric", null);
__decorate([
    (0, common_1.Delete)('fabrics/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteFabric", null);
__decorate([
    (0, common_1.Get)('crafts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getCrafts", null);
__decorate([
    (0, common_1.Post)('crafts'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createCraft", null);
__decorate([
    (0, common_1.Put)('crafts/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateCraft", null);
__decorate([
    (0, common_1.Delete)('crafts/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteCraft", null);
__decorate([
    (0, common_1.Get)('fits'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getFits", null);
__decorate([
    (0, common_1.Post)('fits'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createFit", null);
__decorate([
    (0, common_1.Get)('styles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getStyles", null);
__decorate([
    (0, common_1.Post)('styles'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createStyle", null);
__decorate([
    (0, common_1.Get)('tshirt-colors'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getTshirtColors", null);
__decorate([
    (0, common_1.Post)('tshirt-colors'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createTshirtColor", null);
__decorate([
    (0, common_1.Put)('tshirt-colors/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateTshirtColor", null);
__decorate([
    (0, common_1.Delete)('tshirt-colors/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteTshirtColor", null);
__decorate([
    (0, common_1.Get)('sizes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getSizes", null);
__decorate([
    (0, common_1.Post)('sizes'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createSize", null);
__decorate([
    (0, common_1.Put)('sizes/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateSize", null);
__decorate([
    (0, common_1.Delete)('sizes/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteSize", null);
__decorate([
    (0, common_1.Get)('products/:id/sizes'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getProductSizes", null);
__decorate([
    (0, common_1.Post)('products/:id/sizes'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "setProductSizes", null);
__decorate([
    (0, common_1.Put)('products/:id/sizes/:sizeId'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('sizeId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateProductSize", null);
__decorate([
    (0, common_1.Delete)('products/:id/sizes/:sizeId'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('sizeId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "removeProductSize", null);
__decorate([
    (0, common_1.Get)('products'),
    __param(0, (0, common_1.Query)('categoryId')),
    __param(1, (0, common_1.Query)('fabricId')),
    __param(2, (0, common_1.Query)('craftId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)('products/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getProductById", null);
__decorate([
    (0, common_1.Post)('products'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Put)('products/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)('products/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteProduct", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map