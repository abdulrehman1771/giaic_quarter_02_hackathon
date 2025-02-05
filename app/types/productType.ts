export interface iProduct {
    /** The name of the product */
    name: string;
  
    /** The image object representing the product */
    image?: {
      asset: {
        _ref: string; // Reference to the image asset
        _type: string; // Type of the asset
      };
      hotspot?: {
        x: number; // Hotspot X coordinate
        y: number; // Hotspot Y coordinate
        height: number; // Hotspot height
        width: number; // Hotspot width
      };
    };
  
    /** The price of the product as a string */
    price: string;
  
    /** A brief description of the product, limited to 150 characters */
    description?: string;
  
    /** Discount percentage, must be between 0 and 100 */
    discountPercentage: number;
  
    /** Whether the product is a featured product */
    isFeaturedProduct?: boolean;
  
    /** The stock level, must be a positive number */
    stockLevel?: number;
  
    /** The category of the product (e.g., 'Chair', 'Sofa') */
    category: 'Chair' | 'Sofa';
    _id: string;
    id:string;
    // name: string;
    imageUrl: string;
    // price: number;
    // discountPercentage: number;
    // stockLevel: number;
    // description: string;
  }
  