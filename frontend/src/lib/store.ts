import { doc, getDoc } from 'firebase/firestore';
import{ create} from 'zustand';
import {persist} from 'zustand/middleware';
import { db } from './firebase';
import {IProductProps} from "../../src/types"

interface CartProduct extends IProductProps{
    quantity: number
}
interface UserType{
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    avator: string;
    id: string
}

interface StoreType{
    // user
    currentUser: UserType | null;
    isLoading: boolean;
    getUserInfo: (uid: string) => Promise<void>;
    // // cart
    cartProduct: CartProduct[];
    addToCart: (product: IProductProps) => Promise<void>;
    decreaseQuantity: (productId: number) => void;
    removeFromCart: (productId:number) => void;
    resetCart:() => void;
    // favourite
    // favouriteProduct: CartProduct[];
    // addToFavourite: (product: IProductProps) =>Promise<void>
    // removeFromFavourite:(productId: number) => void;
    // resetFavourite: () =>void;
}

const customStorage ={
    getItem:(name:string) =>{
        const item = localStorage.getItem(name)
        return item? JSON.parse(item) : null
    },
    setItem: <T>(name:string, value: T):void =>{  
        localStorage.setItem(name, JSON.stringify(value))
    },
    removeItem:(name:string):void =>{
        localStorage.removeItem(name)
    }
};

export const store = create<StoreType>()(persist((set)=>({
    currentUser:null,
    isLoading: true,
    cartProduct:[],
    favouriteProduct:[],

    getUserInfo: async(uid: string) => {
        if(!uid) return set({currentUser: null , isLoading: false});

        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef)
        
        try {
            if(docSnap.exists()){
                set({currentUser:docSnap.data() as UserType, isLoading: false})
            }
        } catch (error) {
            console.log("getUserInfo error", error);
            set({currentUser: null, isLoading: false})
        }
    },
    addToCart :(product: IProductProps) =>{
        return new Promise<void>((resolve) => {
            set((state: StoreType) =>{
                const existingProduct = state.cartProduct.find(
                    (p) => p._id === product._id
                )
                
                if(existingProduct){
                    return {
                        cartProduct: state.cartProduct.map((p) =>p._id === product._id ? {...p, quantity :(p.quantity || 0) +1}: p)
                    }
                }else{
                    return{
                        cartProduct:[...state.cartProduct, {...product, quantity:1}]
                    }
                }
            })
            resolve();
        })
    },
    decreaseQuantity: (productId: number) =>{
        set((state:StoreType)=>{
            const existingProduct = state.cartProduct.find((p) =>p._id === productId);
            if(existingProduct){
                return {
                    cartProduct: state.cartProduct.map((p) =>p._id === productId? {...p, quantity :Math.max(p.quantity -1,1)}:p)
                }
            }else{
                return state
                    
                
            }
        })
    },
    removeFromCart: (productId:number) =>{
        set((state:StoreType)=>({
            cartProduct: state.cartProduct.filter((item)=>item._id !==productId)
        }))
    },
    resetCart:()=>{
        set({cartProduct:[]})
    },
    
}),{
    name:'super-market-storage',
    storage:customStorage
}))