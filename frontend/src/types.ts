export interface IHighlightsTypeProps{
    _id:number;
    _base:string;
    title:string;
    name:string;
    image:string;
    color:string;
    buttonTitle:string;
}
export interface ICategoryProps{
    _id: number;
    image: string;
    name:string;
    _base: string;
    description:string;
}
export interface IProductProps{
    _id: number;
    _base:string;
    reviews:number;
    rating:number;
}

export interface IProductProps{
    _id:number;
    _base:string;
    reviews: number;
    rating: number;
    quantity: number;
    overView: string;
    name: string;
    isStock: boolean;
    isNew: boolean;
    images: [string];
    discountedPrice:number;
    regularPrice: number;
    description:string;
    colors:[string];
    category: string;
    brand: string;
}

export interface IBlogProps{
    _id: number;
    image: string;
    title: string;
    description: string;
    _base: string;
}

export interface IUserTypes{
    currentUser:{
        firstName: string;
        lastName: string;
        email: string;
        avatar: string;
        id: string
    }
}
 
export interface OrderTypes{
    orderItems:[IProductProps];
    paymentId: string;
    paymentMethod: string;
    userEmail: string;
}