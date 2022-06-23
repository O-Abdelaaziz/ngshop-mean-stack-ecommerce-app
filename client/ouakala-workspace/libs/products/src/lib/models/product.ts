import { Category } from './category';

export class Product {
    id?: string;
    name?: string;
    description?: string;
    longDescription?: string;
    image?: string;
    images?: string[];
    brand?: string;
    price?: string;
    category?: Category;
    countInStock?: number;
    rating?: number;
    numReviews?: number;
    isFeatured?: boolean;
    createdDate?: string;
}
