export namespace HomePageModel{
    export interface ProductList {
        id: number;
        name?: string | null;
        price?: number | null;
        cover_image?: string | null;
        category?: number | string;
        description?: string | null;
        updatedAt?: string | null;
        createdAt?: string | null;
      }
    
    export interface ProductDetails{
        name: string;
        price: string;
        category: string;
        cover_image: string;
        description: string;
      }
}