import { useCallback, useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Newsletter from "./components/Newsletter.jsx";
import MiniCart from "./components/MiniCart.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Confirmation from "./pages/Confirmation.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";

export default function App() {
  const [page, setPage] = useState("home");
  const [productId, setProductId] = useState(null);
  const [items, setItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const go = useCallback((p, id) => {
    setPage(p);
    if (id) setProductId(id);
    window.scrollTo(0, 0);
  }, []);

  const addItem = useCallback((product, { size = "M", qty = 1 } = {}) => {
    setItems((prev) => {
      const key = product.id + "-" + size;
      const existing = prev.find((i) => i.key === key);
      if (existing) return prev.map((i) => (i.key === key ? { ...i, qty: i.qty + qty } : i));
      return [...prev, { key, id: product.id, name: product.name, price: product.price, img: product.img, size, qty }];
    });
    setCartOpen(true);
  }, []);

  const removeItem = useCallback((key) => setItems((prev) => prev.filter((i) => i.key !== key)), []);
  const updateQty = useCallback((key, qty) => setItems((prev) => prev.map((i) => (i.key === key ? { ...i, qty: Math.max(1, qty) } : i))), []);

  const count = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);
  const subtotal = useMemo(() => items.reduce((s, i) => s + i.qty * i.price, 0), [items]);

  const authPages = ["signin", "signup", "forgot", "confirmation", "reset"];
  const isAuth = authPages.includes(page);

  let body;
  if (page === "home") body = <Home go={go} addItem={addItem} />;
  else if (page === "shop") body = <Shop go={go} addItem={addItem} />;
  else if (page === "product") body = <ProductPage productId={productId} go={go} addItem={addItem} />;
  else if (page === "cart") body = <CartPage items={items} go={go} removeItem={removeItem} updateQty={updateQty} subtotal={subtotal} />;
  else if (page === "signin") body = <SignIn go={go} />;
  else if (page === "signup") body = <SignUp go={go} />;
  else if (page === "forgot") body = <ForgotPassword go={go} />;
  else if (page === "confirmation") body = <Confirmation go={go} />;
  else if (page === "reset") body = <ResetPassword go={go} />;

  return (
    <>
      {!isAuth && <Navbar page={page} go={go} cartCount={count} openCart={() => setCartOpen(true)} />}
      {body}
      {!isAuth && <Newsletter />}
      {!isAuth && <Footer go={go} />}
      {cartOpen && <MiniCart items={items} close={() => setCartOpen(false)} removeItem={removeItem} updateQty={updateQty} subtotal={subtotal} go={go} />}
    </>
  );
}
