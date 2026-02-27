import { CartProvider } from "../context/cart-context";
import CartDrawer from "./components/cart/cart";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Products from "./components/products/products";

export default function Merchandise(){
    return (
        <main>
            <Hero />
            <Products />
            <Footer />
            <CartDrawer />
        </main>
    )
}