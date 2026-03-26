import { useState } from "react";
import { CartContext } from "./useCart";


export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prev) => {
            const existingItem = prev.find((item) => item.id === product.id);

            if (existingItem) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCart((prev) => prev.filter((p) => p.id !== productId));
    };

    const incrementItem = (id) => {
        setCart((prev) =>
            prev.map((i) =>
                i.id === id ? { ...i, quantity: i.quantity + 1 } : i
            )
        );
    };

    const decrementItem = (id) => {
        setCart((prev) =>
            prev
                .map((i) =>
                    i.id === id ? { ...i, quantity: i.quantity - 1 } : i
                )
                .filter((i) => i.quantity > 0)
        );
    };

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, incrementItem, decrementItem, getTotal }}>
            {children}
        </CartContext.Provider>
    )
}
