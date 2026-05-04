import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    uploadFile(file: Express.Multer.File): Promise<{
        key: string;
        url: string;
        originalName: string;
        size: number;
        mimetype: string;
    }>;
    getCategories(): Promise<any[]>;
    createCategory(body: {
        name: string;
        icon?: string;
        sortOrder?: number;
    }): Promise<any>;
    updateCategory(id: number, body: Partial<{
        name: string;
        icon: string;
        sortOrder: number;
        isActive: boolean;
    }>): Promise<any>;
    deleteCategory(id: number): Promise<{
        success: boolean;
    }>;
    getFabrics(): Promise<any[]>;
    createFabric(body: {
        name: string;
        icon?: string;
        sortOrder?: number;
    }): Promise<any>;
    updateFabric(id: number, body: Partial<{
        name: string;
        icon: string;
        sortOrder: number;
        isActive: boolean;
    }>): Promise<any>;
    deleteFabric(id: number): Promise<{
        success: boolean;
    }>;
    getCrafts(): Promise<any[]>;
    createCraft(body: {
        name: string;
        icon?: string;
        sortOrder?: number;
    }): Promise<any>;
    updateCraft(id: number, body: Partial<{
        name: string;
        icon: string;
        sortOrder: number;
        isActive: boolean;
    }>): Promise<any>;
    deleteCraft(id: number): Promise<{
        success: boolean;
    }>;
    getFits(): Promise<any[]>;
    createFit(body: {
        name: string;
        sortOrder?: number;
    }): Promise<any>;
    getStyles(): Promise<any[]>;
    createStyle(body: {
        name: string;
        sortOrder?: number;
    }): Promise<any>;
    getTshirtColors(): Promise<any[]>;
    createTshirtColor(body: {
        name: string;
        colorCode?: string;
        imageUrl: string;
        sortOrder?: number;
    }): Promise<any>;
    updateTshirtColor(id: number, body: Partial<{
        name: string;
        colorCode: string;
        imageUrl: string;
        sortOrder: number;
        isActive: boolean;
    }>): Promise<any>;
    deleteTshirtColor(id: number): Promise<{
        success: boolean;
    }>;
    getSizes(): Promise<any[]>;
    createSize(body: {
        name: string;
        sortOrder?: number;
    }): Promise<any>;
    updateSize(id: number, body: Partial<{
        name: string;
        sortOrder: number;
        isActive: boolean;
    }>): Promise<any>;
    deleteSize(id: number): Promise<{
        success: boolean;
    }>;
    getProductSizes(id: number): Promise<{
        id: unknown;
        sizeId: unknown;
        sizeName: unknown;
        sortOrder: unknown;
        stock: unknown;
        isActive: unknown;
    }[]>;
    setProductSizes(id: number, body: {
        sizes: {
            sizeId: number;
            stock: number;
            isActive?: boolean;
        }[];
    }): Promise<any[]>;
    updateProductSize(productId: number, sizeId: number, body: Partial<{
        stock: number;
        isActive: boolean;
    }>): Promise<any>;
    removeProductSize(productId: number, sizeId: number): Promise<{
        success: boolean;
    }>;
    getProducts(categoryId?: string, fabricId?: string, craftId?: string): Promise<any[]>;
    getProductById(id: number): Promise<any>;
    createProduct(body: {
        name: string;
        description?: string;
        price: number;
        imageUrl?: string;
        categoryId?: number;
        fabricId?: number;
        craftId?: number;
        fitId?: number;
        styleId?: number;
        sortOrder?: number;
        detailImages?: string;
        videos?: string;
        photos?: string;
    }): Promise<any>;
    updateProduct(id: number, body: Partial<{
        name: string;
        description: string;
        price: number;
        imageUrl: string;
        categoryId: number;
        fabricId: number;
        craftId: number;
        fitId: number;
        styleId: number;
        sortOrder: number;
        isActive: boolean;
        detailImages: string;
        videos: string;
        photos: string;
    }>): Promise<any>;
    deleteProduct(id: number): Promise<{
        success: boolean;
    }>;
}
