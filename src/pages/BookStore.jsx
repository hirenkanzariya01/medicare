
// ============================================================
// LUMINARY BOOKS - Full Stack React Bookstore E-Commerce App
// Single-file React JSX for Claude Artifacts
// Uses: React, Framer Motion, Context API, localStorage
// ============================================================

import { useState, useEffect, useContext, createContext, useRef, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";

// ─────────────────────────────────────────────────────────────
// 1. BOOKS DATA
// ─────────────────────────────────────────────────────────────
const booksData = [
  { id: 1, title: "The Midnight Library", author: "Matt Haig", price: 14.99, originalPrice: 19.99, category: "Fiction", rating: 4.8, reviews: 2847, description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. Would you have done anything different, if you had the chance to undo your regrets?", image: "📚", color: "#667eea", pdfLink: "#", demoPages: 12, isFree: false, badge: "Bestseller", tags: ["life", "philosophy", "hope"] },
  { id: 2, title: "Atomic Habits", author: "James Clear", price: 0, originalPrice: 16.99, category: "Self-Help", rating: 4.9, reviews: 5621, description: "No matter your goals, Atomic Habits offers a proven framework for improving every day. James Clear reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.", image: "🎯", color: "#f093fb", pdfLink: "#", demoPages: 20, isFree: true, badge: "Free", tags: ["productivity", "habits", "success"] },
  { id: 3, title: "Dune", author: "Frank Herbert", price: 12.99, originalPrice: 17.99, category: "Sci-Fi", rating: 4.7, reviews: 3102, description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the spice melange. A sweeping tale of adventure and mysticism.", image: "🌌", color: "#4facfe", pdfLink: "#", demoPages: 15, isFree: false, badge: "Classic", tags: ["space", "politics", "epic"] },
  { id: 4, title: "The Psychology of Money", author: "Morgan Housel", price: 11.99, originalPrice: 15.99, category: "Finance", rating: 4.8, reviews: 4291, description: "Doing well with money isn't necessarily about what you know. It's about how you behave. And behavior is hard to teach, even to really smart people. This book shares 19 short stories exploring the strange ways people think about money.", image: "💰", color: "#43e97b", pdfLink: "#", demoPages: 18, isFree: false, badge: "Must Read", tags: ["money", "investing", "mindset"] },
  { id: 5, title: "Project Hail Mary", author: "Andy Weir", price: 13.99, originalPrice: 18.99, category: "Sci-Fi", rating: 4.9, reviews: 1893, description: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. A lone astronaut must save the earth from disaster in this incredible new science-based thriller.", image: "🚀", color: "#fa709a", pdfLink: "#", demoPages: 10, isFree: false, badge: "New", tags: ["space", "survival", "science"] },
  { id: 6, title: "Think Again", author: "Adam Grant", price: 0, originalPrice: 14.99, category: "Self-Help", rating: 4.6, reviews: 2134, description: "Intelligence is usually seen as the ability to think and learn, but in a rapidly changing world, there's another set of cognitive skills that might matter more: the ability to rethink and unlearn.", image: "🧠", color: "#a8edea", pdfLink: "#", demoPages: 22, isFree: true, badge: "Free", tags: ["thinking", "growth", "mindset"] },
  { id: 7, title: "The Name of the Wind", author: "Patrick Rothfuss", price: 11.49, originalPrice: 16.99, category: "Fantasy", rating: 4.8, reviews: 3876, description: "Told in Kvothe's own words, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen. A rich, layered, and magical coming-of-age story.", image: "🔮", color: "#764ba2", pdfLink: "#", demoPages: 14, isFree: false, badge: "Award Winner", tags: ["magic", "music", "adventure"] },
  { id: 8, title: "Sapiens", author: "Yuval Noah Harari", price: 15.99, originalPrice: 22.99, category: "History", rating: 4.7, reviews: 6102, description: "From a renowned historian comes a groundbreaking narrative of humanity's creation and evolution. How did our human ancestors conquer this planet? What made Homo sapiens so much more powerful than all other humans and animals?", image: "🦴", color: "#f7971e", pdfLink: "#", demoPages: 25, isFree: false, badge: "Bestseller", tags: ["history", "humanity", "evolution"] },
  { id: 9, title: "The Alchemist", author: "Paulo Coelho", price: 0, originalPrice: 12.99, category: "Fiction", rating: 4.6, reviews: 7834, description: "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. A story about discovering the treasure that lies within us.", image: "⭐", color: "#ffecd2", pdfLink: "#", demoPages: 30, isFree: true, badge: "Free Classic", tags: ["journey", "destiny", "philosophy"] },
  { id: 10, title: "Neuromancer", author: "William Gibson", price: 9.99, originalPrice: 14.99, category: "Sci-Fi", rating: 4.5, reviews: 1567, description: "The sky above the port was the color of television, tuned to a dead channel. Case was the sharpest data-thief in the matrix—until he crossed the wrong people and they burned out his nervous system.", image: "💻", color: "#0f3460", pdfLink: "#", demoPages: 8, isFree: false, badge: "Cult Classic", tags: ["cyberpunk", "hacking", "dystopia"] },
  { id: 11, title: "Educated", author: "Tara Westover", price: 13.49, originalPrice: 17.99, category: "Memoir", rating: 4.8, reviews: 4567, description: "An account of the struggle for self-invention. It is a tale of fierce family loyalty, and also of betrayal. Tara Westover didn't set foot in a classroom until she was 17—yet this memoir details her journey from survivalist family to Cambridge.", image: "📖", color: "#ee0979", pdfLink: "#", demoPages: 16, isFree: false, badge: "Award Winner", tags: ["family", "education", "resilience"] },
  { id: 12, title: "The Lean Startup", author: "Eric Ries", price: 0, originalPrice: 18.99, category: "Business", rating: 4.5, reviews: 3201, description: "Most startups fail. But many of those failures are preventable. The Lean Startup is a new approach being adopted across the globe, changing the way companies are built and new products are launched.", image: "🚀", color: "#11998e", pdfLink: "#", demoPages: 20, isFree: true, badge: "Free", tags: ["startup", "innovation", "business"] },
];

const categories = ["All", ...new Set(booksData.map(b => b.category))];

// ─────────────────────────────────────────────────────────────
// 2. CONTEXTS
// ─────────────────────────────────────────────────────────────
const ThemeContext = createContext();
const CartContext = createContext();
const WishlistContext = createContext();
const ToastContext = createContext();

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("luminary-theme");
    return saved ? saved === "dark" : true;
  });
  const toggle = () => setDark(d => { const n = !d; localStorage.setItem("luminary-theme", n ? "dark" : "light"); return n; });
  return <ThemeContext.Provider value={{ dark, toggle }}>{children}</ThemeContext.Provider>;
}

function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem("luminary-cart") || "[]"); } catch { return []; }
  });
  useEffect(() => localStorage.setItem("luminary-cart", JSON.stringify(cart)), [cart]);
  const addToCart = useCallback((book) => setCart(c => {
    const ex = c.find(i => i.id === book.id);
    if (ex) return c.map(i => i.id === book.id ? { ...i, qty: i.qty + 1 } : i);
    return [...c, { ...book, qty: 1 }];
  }), []);
  const removeFromCart = useCallback((id) => setCart(c => c.filter(i => i.id !== id)), []);
  const updateQty = useCallback((id, qty) => {
    if (qty < 1) { setCart(c => c.filter(i => i.id !== id)); return; }
    setCart(c => c.map(i => i.id === id ? { ...i, qty } : i));
  }, []);
  const clearCart = useCallback(() => setCart([]), []);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);
  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart, total, count }}>{children}</CartContext.Provider>;
}

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    try { return JSON.parse(localStorage.getItem("luminary-wishlist") || "[]"); } catch { return []; }
  });
  useEffect(() => localStorage.setItem("luminary-wishlist", JSON.stringify(wishlist)), [wishlist]);
  const toggle = useCallback((book) => setWishlist(w => w.find(i => i.id === book.id) ? w.filter(i => i.id !== book.id) : [...w, book]), []);
  const isWished = useCallback((id) => wishlist.some(i => i.id === id), [wishlist]);
  return <WishlistContext.Provider value={{ wishlist, toggle, isWished }}>{children}</WishlistContext.Provider>;
}

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const show = useCallback((msg, type = "success") => {
    const id = Date.now();
    setToasts(t => [...t, { id, msg, type }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3000);
  }, []);
  return (
    <ToastContext.Provider value={show}>
      {children}
      <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 9999, display: "flex", flexDirection: "column", gap: 8 }}>
        <AnimatePresence>
          {toasts.map(t => (
            <motion.div key={t.id} initial={{ opacity: 0, x: 80, scale: 0.8 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: 80, scale: 0.8 }}
              style={{ padding: "12px 20px", borderRadius: 12, background: t.type === "error" ? "#ef4444" : t.type === "warning" ? "#f59e0b" : "#10b981", color: "#fff", fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: 14, boxShadow: "0 8px 32px rgba(0,0,0,0.3)", cursor: "pointer", minWidth: 220 }}
              onClick={() => setToasts(t2 => t2.filter(x => x.id !== t.id))}>
              {t.type === "success" ? "✓ " : t.type === "error" ? "✕ " : "⚠ "}{t.msg}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

// Hooks
const useTheme = () => useContext(ThemeContext);
const useCart = () => useContext(CartContext);
const useWishlist = () => useContext(WishlistContext);
const useToast = () => useContext(ToastContext);

// ─────────────────────────────────────────────────────────────
// 3. DESIGN TOKENS
// ─────────────────────────────────────────────────────────────
const getTheme = (dark) => ({
  bg: dark ? "#0a0a0f" : "#fafaf8",
  surface: dark ? "#12121a" : "#ffffff",
  surface2: dark ? "#1a1a2e" : "#f0ede8",
  border: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
  text: dark ? "#f0ede8" : "#1a1a2e",
  textMuted: dark ? "#8a8a9a" : "#6b7280",
  accent: "#c9a84c",
  accentGlow: "rgba(201,168,76,0.3)",
  gradient: "linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #c9a84c 100%)",
  cardBg: dark ? "rgba(26,26,46,0.8)" : "rgba(255,255,255,0.9)",
  glass: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
  shadow: dark ? "0 8px 32px rgba(0,0,0,0.5)" : "0 8px 32px rgba(0,0,0,0.1)",
});

// ─────────────────────────────────────────────────────────────
// 4. COMPONENTS
// ─────────────────────────────────────────────────────────────

// Stars
function Stars({ rating, size = 14 }) {
  return (
    <span style={{ display: "inline-flex", gap: 2, alignItems: "center" }}>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} style={{ fontSize: size, color: i <= Math.round(rating) ? "#f59e0b" : "#d1d5db" }}>★</span>
      ))}
    </span>
  );
}

// Book Card
function BookCard({ book, onView, style }) {
  const { dark } = useTheme();
  const t = getTheme(dark);
  const { addToCart } = useCart();
  const { toggle, isWished } = useWishlist();
  const toast = useToast();
  const wished = isWished(book.id);

  const handleCart = (e) => {
    e.stopPropagation();
    if (book.isFree) { toast("Free PDF available for download!", "warning"); return; }
    addToCart(book);
    toast(`"${book.title}" added to cart!`);
  };

  const handleWish = (e) => {
    e.stopPropagation();
    toggle(book);
    toast(wished ? "Removed from wishlist" : "Added to wishlist ♥", wished ? "warning" : "success");
  };

  const handleShare = (e) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(`Check out: ${book.title} by ${book.author}`);
    toast("Link copied to clipboard!");
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onClick={() => onView(book)}
      style={{
        background: t.cardBg,
        backdropFilter: "blur(20px)",
        border: `1px solid ${t.border}`,
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: t.shadow,
        position: "relative",
        ...style,
      }}
    >
      {/* Badge */}
      {book.badge && (
        <div style={{ position: "absolute", top: 12, left: 12, zIndex: 2, background: book.isFree ? "#10b981" : t.accent, color: book.isFree ? "#fff" : "#1a1a2e", padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>
          {book.badge}
        </div>
      )}
      {/* Wish */}
      <motion.button whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} onClick={handleWish}
        style={{ position: "absolute", top: 12, right: 12, zIndex: 2, background: "rgba(0,0,0,0.3)", border: "none", borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 16, color: wished ? "#ef4444" : "#fff", backdropFilter: "blur(8px)" }}>
        {wished ? "♥" : "♡"}
      </motion.button>

      {/* Cover */}
      <div style={{ height: 180, background: `linear-gradient(135deg, ${book.color}22, ${book.color}55)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 30% 30%, ${book.color}44, transparent 70%)` }} />
        {book.image}
      </div>

      {/* Info */}
      <div style={{ padding: "16px" }}>
        <div style={{ fontSize: 11, color: t.accent, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>{book.category}</div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: t.text, marginBottom: 4, lineHeight: 1.3 }}>{book.title}</div>
        <div style={{ fontSize: 12, color: t.textMuted, marginBottom: 8 }}>{book.author}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
          <Stars rating={book.rating} />
          <span style={{ fontSize: 11, color: t.textMuted }}>({book.reviews.toLocaleString()})</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            {book.isFree ? (
              <span style={{ fontSize: 20, fontWeight: 800, color: "#10b981", fontFamily: "'Playfair Display', serif" }}>FREE</span>
            ) : (
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 20, fontWeight: 800, color: t.accent, fontFamily: "'Playfair Display', serif" }}>${book.price}</span>
                <span style={{ fontSize: 12, color: t.textMuted, textDecoration: "line-through" }}>${book.originalPrice}</span>
              </span>
            )}
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleShare}
              style={{ background: t.glass, border: `1px solid ${t.border}`, borderRadius: 8, padding: "6px 8px", cursor: "pointer", fontSize: 14, color: t.textMuted }}>
              ↗
            </motion.button>
            <motion.button whileHover={{ scale: 1.05, background: book.isFree ? "#10b981" : t.accent }} whileTap={{ scale: 0.95 }} onClick={handleCart}
              style={{ background: book.isFree ? "#10b981" : t.gradient, border: "none", borderRadius: 8, padding: "6px 14px", cursor: "pointer", fontSize: 12, fontWeight: 700, color: "#1a1a2e", transition: "all 0.2s" }}>
              {book.isFree ? "⬇ Download" : "+ Cart"}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Skeleton Card
function SkeletonCard({ dark }) {
  const t = getTheme(dark);
  const shimmer = {
    background: dark ? "linear-gradient(90deg, #1a1a2e 25%, #252540 50%, #1a1a2e 75%)" : "linear-gradient(90deg, #f0ede8 25%, #e8e4de 50%, #f0ede8 75%)",
    backgroundSize: "200% 100%",
    animation: "shimmer 1.5s infinite",
  };
  return (
    <div style={{ background: t.cardBg, borderRadius: 20, overflow: "hidden", border: `1px solid ${t.border}` }}>
      <div style={{ height: 180, ...shimmer }} />
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
        {[80, 120, 60, 100].map((w, i) => (
          <div key={i} style={{ height: 14, width: `${w}%`, borderRadius: 8, ...shimmer }} />
        ))}
      </div>
    </div>
  );
}

// Book Preview Modal
function BookModal({ book, onClose }) {
  const { dark } = useTheme();
  const t = getTheme(dark);
  const { addToCart } = useCart();
  const toast = useToast();

  if (!book) return null;
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
        <motion.div initial={{ scale: 0.8, opacity: 0, y: 40 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.8, opacity: 0 }}
          onClick={e => e.stopPropagation()}
          style={{ background: dark ? "#12121a" : "#fff", borderRadius: 24, maxWidth: 600, width: "100%", maxHeight: "90vh", overflow: "auto", border: `1px solid ${t.border}`, boxShadow: "0 24px 80px rgba(0,0,0,0.6)" }}>
          {/* Header */}
          <div style={{ height: 200, background: `linear-gradient(135deg, ${book.color}33, ${book.color}77)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80, position: "relative" }}>
            {book.image}
            <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: "rgba(0,0,0,0.5)", border: "none", borderRadius: "50%", width: 36, height: 36, cursor: "pointer", color: "#fff", fontSize: 18 }}>✕</button>
          </div>
          <div style={{ padding: 28 }}>
            <div style={{ fontSize: 12, color: t.accent, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>{book.category}</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, color: t.text, margin: "8px 0 4px" }}>{book.title}</h2>
            <div style={{ color: t.textMuted, marginBottom: 12 }}>by {book.author}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Stars rating={book.rating} size={16} />
              <span style={{ color: t.textMuted, fontSize: 13 }}>{book.rating} · {book.reviews.toLocaleString()} reviews</span>
            </div>
            <p style={{ color: t.textMuted, lineHeight: 1.7, marginBottom: 20 }}>{book.description}</p>
            {/* Demo pages note */}
            <div style={{ background: t.glass, border: `1px solid ${t.border}`, borderRadius: 12, padding: "12px 16px", marginBottom: 20, fontSize: 13, color: t.textMuted }}>
              📄 {book.demoPages} demo pages available for preview
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {book.isFree ? (
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => { toast("Downloading PDF..."); }}
                  style={{ flex: 1, padding: "14px 24px", background: "#10b981", border: "none", borderRadius: 12, cursor: "pointer", fontWeight: 700, color: "#fff", fontSize: 15 }}>
                  ⬇ Download Free PDF
                </motion.button>
              ) : (
                <>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => { addToCart(book); toast(`Added to cart!`); onClose(); }}
                    style={{ flex: 1, padding: "14px 24px", background: t.gradient, border: "none", borderRadius: 12, cursor: "pointer", fontWeight: 700, color: "#1a1a2e", fontSize: 15 }}>
                    🛒 Add to Cart · ${book.price}
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => toast("Demo preview opened!")}
                    style={{ padding: "14px 20px", background: t.glass, border: `1px solid ${t.border}`, borderRadius: 12, cursor: "pointer", color: t.text, fontSize: 15 }}>
                    👁 Preview
                  </motion.button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Navbar
function Navbar({ page, setPage }) {
  const { dark, toggle } = useTheme();
  const t = getTheme(dark);
  const { count } = useCart();
  const { wishlist } = useWishlist();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "books", label: "Books" },
    { id: "free", label: "Free Books" },
    { id: "about", label: "About" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
        background: scrolled ? (dark ? "rgba(10,10,15,0.95)" : "rgba(250,250,248,0.95)") : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${t.border}` : "none",
        transition: "all 0.3s ease",
        padding: "0 24px",
      }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} onClick={() => setPage("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, background: t.gradient, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>📚</div>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 800, color: t.text }}>
            <span style={{ color: t.accent }}>L</span>uminary
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="desktop-nav">
          {navLinks.map(l => (
            <motion.button key={l.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setPage(l.id)}
              style={{ background: page === l.id ? `${t.accentGlow}` : "transparent", border: page === l.id ? `1px solid ${t.accent}` : "1px solid transparent", borderRadius: 8, padding: "6px 16px", cursor: "pointer", color: page === l.id ? t.accent : t.textMuted, fontWeight: page === l.id ? 700 : 400, fontSize: 14, transition: "all 0.2s" }}>
              {l.label}
            </motion.button>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <motion.button whileHover={{ scale: 1.1, rotate: 20 }} whileTap={{ scale: 0.9 }} onClick={toggle}
            style={{ background: t.glass, border: `1px solid ${t.border}`, borderRadius: 8, width: 36, height: 36, cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {dark ? "☀️" : "🌙"}
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} onClick={() => setPage("wishlist")} style={{ background: t.glass, border: `1px solid ${t.border}`, borderRadius: 8, width: 36, height: 36, cursor: "pointer", fontSize: 15, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            ♥
            {wishlist.length > 0 && <span style={{ position: "absolute", top: -6, right: -6, background: "#ef4444", color: "#fff", borderRadius: "50%", width: 18, height: 18, fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{wishlist.length}</span>}
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} onClick={() => setPage("cart")} style={{ background: t.gradient, border: "none", borderRadius: 8, padding: "8px 16px", cursor: "pointer", fontSize: 14, fontWeight: 700, color: "#1a1a2e", display: "flex", alignItems: "center", gap: 6, position: "relative" }}>
            🛒 {count > 0 && <span style={{ background: "#1a1a2e", color: t.accent, borderRadius: "50%", width: 20, height: 20, fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{count}</span>}
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} onClick={() => setPage("login")} style={{ background: t.glass, border: `1px solid ${t.border}`, borderRadius: 8, padding: "8px 14px", cursor: "pointer", color: t.text, fontSize: 13 }}>
            Login
          </motion.button>
          {/* Mobile Hamburger */}
          <motion.button whileHover={{ scale: 1.1 }} onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: t.glass, border: `1px solid ${t.border}`, borderRadius: 8, width: 36, height: 36, cursor: "pointer", fontSize: 18, display: "none", alignItems: "center", justifyContent: "center" }}
            className="hamburger">
            {menuOpen ? "✕" : "☰"}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            style={{ background: dark ? "#12121a" : "#fff", borderTop: `1px solid ${t.border}`, padding: "16px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
            {navLinks.map(l => (
              <button key={l.id} onClick={() => { setPage(l.id); setMenuOpen(false); }}
                style={{ background: "transparent", border: "none", padding: "10px 0", cursor: "pointer", color: page === l.id ? t.accent : t.text, fontWeight: page === l.id ? 700 : 400, textAlign: "left", fontSize: 16 }}>
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ─────────────────────────────────────────────────────────────
// 5. PAGES
// ─────────────────────────────────────────────────────────────

// HOME PAGE
function HomePage({ setPage, setSelectedBook }) {
  const { dark } = useTheme();
  const t = getTheme(dark);
  const { addToCart } = useCart();
  const toast = useToast();
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const featuredInView = useInView(featuredRef, { once: true });
  const [modal, setModal] = useState(null);

  const featured = booksData.slice(0, 6);
  const stats = [{ n: "12K+", l: "Books" }, { n: "50K+", l: "Readers" }, { n: "4.8★", l: "Avg Rating" }, { n: "99%", l: "Satisfied" }];

  return (
    <div style={{ minHeight: "100vh", background: t.bg }}>
      {/* Hero */}
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 70 }}>
        {/* BG Effects */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{ position: "absolute", top: "-30%", right: "-20%", width: 700, height: 700, borderRadius: "50%", background: `radial-gradient(circle, ${t.accentGlow} 0%, transparent 70%)`, opacity: 0.6 }} />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            style={{ position: "absolute", bottom: "-20%", left: "-10%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, rgba(102,126,234,0.15) 0%, transparent 70%)` }} />
        </div>

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: t.glass, border: `1px solid ${t.border}`, borderRadius: 20, padding: "6px 16px", marginBottom: 24, backdropFilter: "blur(8px)" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
              <span style={{ fontSize: 13, color: t.textMuted }}>New arrivals every week</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 900, color: t.text, lineHeight: 1.1, marginBottom: 24 }}>
              Discover Your<br />
              <span style={{ background: t.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Next Great
              </span><br />
              Adventure
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              style={{ color: t.textMuted, fontSize: 18, lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>
              Curated books across every genre. From timeless classics to modern masterpieces — find your perfect read today.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <motion.button whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${t.accentGlow}` }} whileTap={{ scale: 0.95 }}
                onClick={() => setPage("books")}
                style={{ padding: "16px 32px", background: t.gradient, border: "none", borderRadius: 14, cursor: "pointer", fontSize: 16, fontWeight: 700, color: "#1a1a2e" }}>
                Browse Collection →
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setPage("free")}
                style={{ padding: "16px 32px", background: "transparent", border: `2px solid ${t.border}`, borderRadius: 14, cursor: "pointer", fontSize: 16, color: t.text, display: "flex", alignItems: "center", gap: 8 }}>
                ⬇ Free Books
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 48 }}>
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.1 }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 800, color: t.accent }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: t.textMuted }}>{s.l}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Hero Books Grid */}
          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {booksData.slice(0, 4).map((book, i) => (
              <motion.div key={book.id}
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -8, rotate: i % 2 === 0 ? -2 : 2 }}
                onClick={() => setModal(book)}
                style={{ background: `linear-gradient(135deg, ${book.color}22, ${book.color}44)`, border: `1px solid ${book.color}44`, borderRadius: 16, padding: 20, cursor: "pointer", backdropFilter: "blur(10px)", transform: i === 1 ? "translateY(20px)" : i === 3 ? "translateY(20px)" : "none" }}>
                <div style={{ fontSize: 40, marginBottom: 10 }}>{book.image}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, fontWeight: 700, color: t.text, marginBottom: 4 }}>{book.title}</div>
                <div style={{ fontSize: 11, color: t.textMuted }}>{book.author}</div>
                <div style={{ marginTop: 8, fontWeight: 800, color: book.isFree ? "#10b981" : t.accent, fontSize: 15 }}>{book.isFree ? "FREE" : `$${book.price}`}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Featured Section */}
      <div ref={featuredRef} style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={featuredInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontSize: 13, color: t.accent, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 12 }}>Curated Selection</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: t.text }}>Featured Books</h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}>
          {featured.map((book, i) => (
            <motion.div key={book.id} initial={{ opacity: 0, y: 40 }} animate={featuredInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}>
              <BookCard book={book} onView={setModal} />
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setPage("books")}
            style={{ padding: "14px 36px", background: t.gradient, border: "none", borderRadius: 14, cursor: "pointer", fontSize: 16, fontWeight: 700, color: "#1a1a2e" }}>
            View All Books →
          </motion.button>
        </div>
      </div>

      {/* CTA Banner */}
      <div style={{ margin: "0 24px 80px", borderRadius: 24, overflow: "hidden", position: "relative" }}>
        <div style={{ background: `linear-gradient(135deg, ${t.accent}22, #667eea33)`, border: `1px solid ${t.border}`, borderRadius: 24, padding: "60px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24, backdropFilter: "blur(10px)" }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 800, color: t.text, marginBottom: 8 }}>Free Books Available!</h3>
            <p style={{ color: t.textMuted, fontSize: 16 }}>Download premium PDFs completely free. No signup required.</p>
          </div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setPage("free")}
            style={{ padding: "16px 32px", background: "#10b981", border: "none", borderRadius: 14, cursor: "pointer", fontSize: 16, fontWeight: 700, color: "#fff" }}>
            Get Free Books ⬇
          </motion.button>
        </div>
      </div>

      <BookModal book={modal} onClose={() => setModal(null)} />
    </div>
  );
}

// BOOKS PAGE
function BooksPage() {
  const { dark } = useTheme();
  const t = getTheme(dark);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [modal, setModal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filtered = booksData
    .filter(b => (category === "All" || b.category === category) && (b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase())))
    .sort((a, b) => sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : sort === "rating" ? b.rating - a.rating : 0);

  return (
    <div style={{ minHeight: "100vh", background: t.bg, paddingTop: 90 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 40 }}>
          <div style={{ fontSize: 13, color: t.accent, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 8 }}>Our Collection</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: t.text, marginBottom: 8 }}>All Books</h1>
          <p style={{ color: t.textMuted }}>{filtered.length} books found</p>
        </motion.div>

        {/* Filters */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          style={{ display: "flex", gap: 12, marginBottom: 32, flexWrap: "wrap", alignItems: "center" }}>
          <input
            value={search} onChange={e => setSearch(e.target.value)} placeholder="🔍  Search books or authors..."
            style={{ flex: 1, minWidth: 200, padding: "12px 16px", background: t.surface, border: `1px solid ${t.border}`, borderRadius: 12, color: t.text, fontSize: 14, outline: "none" }} />
          <select value={category} onChange={e => setCategory(e.target.value)}
            style={{ padding: "12px 16px", background: t.surface, border: `1px solid ${t.border}`, borderRadius: 12, color: t.text, fontSize: 14, cursor: "pointer", outline: "none" }}>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={sort} onChange={e => setSort(e.target.value)}
            style={{ padding: "12px 16px", background: t.surface, border: `1px solid ${t.border}`, borderRadius: 12, color: t.text, fontSize: 14, cursor: "pointer", outline: "none" }}>
            <option value="default">Sort: Default</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </motion.div>

        {/* Category Pills */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {categories.map(c => (
            <motion.button key={c} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setCategory(c)}
              style={{ padding: "6px 16px", background: category === c ? t.gradient : t.glass, border: `1px solid ${category === c ? t.accent : t.border}`, borderRadius: 20, cursor: "pointer", fontSize: 13, fontWeight: category === c ? 700 : 400, color: category === c ? "#1a1a2e" : t.textMuted, transition: "all 0.2s" }}>
              {c}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}>
            {Array(8).fill(0).map((_, i) => <SkeletonCard key={i} dark={dark} />)}
          </div>
        ) : filtered.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "80px 0" }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>📭</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: t.text, marginBottom: 8 }}>No books found</h3>
            <p style={{ color: t.textMuted }}>Try a different search term or category</p>
          </motion.div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}>
            {filtered.map((book, i) => (
              <motion.div key={book.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <BookCard book={book} onView={setModal} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <BookModal book={modal} onClose={() => setModal(null)} />
    </div>
  );
}

// FREE BOOKS PAGE
function FreeBooksPage() {
  const { dark } = useTheme();
  const t = getTheme(dark);
  const toast = useToast();
  const freeBooks = booksData.filter(b => b.isFree);
  const [modal, setModal] = useState(null);

  return (
    <div style={{ minHeight: "100vh", background: t.bg, paddingTop: 90 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
        {/* Banner */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          style={{ background: "linear-gradient(135deg, #10b98122, #10b98144)", border: "1px solid #10b98155", borderRadius: 24, padding: "40px 48px", marginBottom: 48, textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, #10b98122, transparent 70%)" }} />
          <div style={{ fontSize: 56, marginBottom: 16 }}>🎁</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 900, color: t.text, marginBottom: 12, position: "relative" }}>Free Books Collection</h1>
          <p style={{ color: t.textMuted, fontSize: 18, position: "relative" }}>Download premium books in PDF format — completely free, no registration needed.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 28 }}>
          {freeBooks.map((book, i) => (
            <motion.div key={book.id} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}
              style={{ background: t.cardBg, backdropFilter: "blur(20px)", border: `1px solid ${t.border}`, borderRadius: 20, overflow: "hidden", boxShadow: t.shadow }}>
              <div style={{ height: 180, background: `linear-gradient(135deg, ${book.color}22, ${book.color}55)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 72, position: "relative" }}>
                {book.image}
                <div style={{ position: "absolute", top: 12, right: 12, background: "#10b981", color: "#fff", padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>FREE PDF</div>
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ fontSize: 12, color: t.accent, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>{book.category}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: t.text, marginBottom: 4 }}>{book.title}</h3>
                <p style={{ fontSize: 13, color: t.textMuted, marginBottom: 6 }}>by {book.author}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
                  <Stars rating={book.rating} />
                  <span style={{ fontSize: 12, color: t.textMuted }}>({book.reviews.toLocaleString()})</span>
                </div>
                <p style={{ fontSize: 13, color: t.textMuted, lineHeight: 1.6, marginBottom: 16 }}>{book.description.substring(0, 100)}...</p>
                <div style={{ display: "flex", gap: 8 }}>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => { toast(`Downloading "${book.title}" PDF...`); }}
                    style={{ flex: 1, padding: "12px", background: "#10b981", border: "none", borderRadius: 10, cursor: "pointer", fontWeight: 700, color: "#fff", fontSize: 14 }}>
                    ⬇ Download PDF
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setModal(book)}
                    style={{ padding: "12px 14px", background: t.glass, border: `1px solid ${t.border}`, borderRadius: 10, cursor: "pointer", color: t.text, fontSize: 14 }}>
                    👁
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <BookModal book={modal} onClose={() => setModal(null)} />
    </div>
  );
}

// CART PAGE
function CartPage({ setPage }) {
  const { dark } = useTheme();
  const t = getTheme(dark);
  const { cart, removeFromCart, updateQty, clearCart, total, count } = useCart();
  const toast = useToast();
  const [checkedOut, setCheckedOut] = useState(false);

  const handleCheckout = () => {
    clearCart();
    setCheckedOut(true);
    toast("Order placed successfully! 🎉");
  };

  if (checkedOut) {
    return (
      <div style={{ minHeight: "100vh", background: t.bg, paddingTop: 90, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring" }} style={{ textAlign: "center" }}>
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5 }} style={{ fontSize: 80, marginBottom: 24 }}>🎉</motion.div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, color: t.text, marginBottom: 12 }}>Order Confirmed!</h2>
          <p style={{ color: t.textMuted, marginBottom: 32 }}>Thank you for your purchase. Your books are on the way!</p>
          <motion.button whileHover={{ scale: 1.05 }} onClick={() => { setCheckedOut(false); setPage("books"); }}
            style={{ padding: "14px 32px", background: t.gradient, border: "none", borderRadius: 12, cursor: "pointer", fontWeight: 700, color: "#1a1a2e", fontSize: 16 }}>
            Continue Shopping →
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: t.bg, paddingTop: 90 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 32 }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 800, color: t.text }}>Your Cart</h1>
          <p style={{ color: t.textMuted }}>{count} item{count !== 1 ? "s" : ""} in your cart</p>
        </motion.div>

        {cart.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "80px 0" }}>
            <div style={{ fontSize: 80, marginBottom: 24 }}>🛒</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: t.text, marginBottom: 12 }}>Your cart is empty</h3>
            <p style={{ color: t.textMuted, marginBottom: 32 }}>Discover amazing books to add to your collection</p>
            <motion.button whileHover={{ scale: 1.05 }} onClick={() => setPage("books")}
              style={{ padding: "14px 32px", background: t.gradient, border: "none", borderRadius: 12, cursor: "pointer", fontWeight: 700, color: "#1a1a2e", fontSize: 16 }}>
              Browse Books
            </motion.button>
          </motion.div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 32, alignItems: "start" }}>
            {/* Items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <AnimatePresence>
                {cart.map(item => (
                  <motion.div key={item.id} layout initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30, height: 0 }}
                    style={{ background: t.cardBg, border: `1px solid ${t.border}`, borderRadius: 16, padding: 20, display: "flex", gap: 20, alignItems: "center", backdropFilter: "blur(10px)" }}>
                    <div style={{ width: 70, height: 70, background: `linear-gradient(135deg, ${item.color}33, ${item.color}55)`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, flexShrink: 0 }}>
                      {item.image}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: t.text, marginBottom: 4 }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: t.textMuted }}>{item.author}</div>
                      <div style={{ color: t.accent, fontWeight: 700, marginTop: 4 }}>${item.price}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, background: t.glass, border: `1px solid ${t.border}`, borderRadius: 10, padding: "4px 8px" }}>
                        <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={() => updateQty(item.id, item.qty - 1)}
                          style={{ background: "none", border: "none", cursor: "pointer", color: t.text, fontSize: 18, width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>−</motion.button>
                        <span style={{ color: t.text, fontWeight: 700, minWidth: 20, textAlign: "center" }}>{item.qty}</span>
                        <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={() => updateQty(item.id, item.qty + 1)}
                          style={{ background: "none", border: "none", cursor: "pointer", color: t.text, fontSize: 18, width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>+</motion.button>
                      </div>
                      <div style={{ fontWeight: 700, color: t.text, minWidth: 60, textAlign: "right" }}>${(item.price * item.qty).toFixed(2)}</div>
                      <motion.button whileHover={{ scale: 1.1, color: "#ef4444" }} onClick={() => { removeFromCart(item.id); toast("Removed from cart", "warning"); }}
                        style={{ background: "none", border: "none", cursor: "pointer", color: t.textMuted, fontSize: 18 }}>✕</motion.button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <button onClick={() => { clearCart(); toast("Cart cleared", "warning"); }}
                style={{ background: "none", border: "none", cursor: "pointer", color: t.textMuted, fontSize: 13, textAlign: "left", padding: "4px 0" }}>
                Clear cart
              </button>
            </div>

            {/* Summary */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              style={{ background: t.cardBg, border: `1px solid ${t.border}`, borderRadius: 20, padding: 28, backdropFilter: "blur(10px)", position: "sticky", top: 90 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: t.text, marginBottom: 24 }}>Order Summary</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: t.textMuted, fontSize: 14 }}>
                  <span>Subtotal ({count} items)</span><span>${total.toFixed(2)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: t.textMuted, fontSize: 14 }}>
                  <span>Shipping</span><span style={{ color: "#10b981" }}>Free</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: t.textMuted, fontSize: 14 }}>
                  <span>Tax (8%)</span><span>${(total * 0.08).toFixed(2)}</span>
                </div>
                <div style={{ height: 1, background: t.border, margin: "4px 0" }} />
                <div style={{ display: "flex", justifyContent: "space-between", color: t.text, fontWeight: 700, fontSize: 18 }}>
                  <span>Total</span><span style={{ color: t.accent }}>${(total * 1.08).toFixed(2)}</span>
                </div>
              </div>
              <motion.button whileHover={{ scale: 1.03, boxShadow: `0 8px 30px ${t.accentGlow}` }} whileTap={{ scale: 0.97 }} onClick={handleCheckout}
                style={{ width: "100%", padding: "16px", background: t.gradient, border: "none", borderRadius: 14, cursor: "pointer", fontWeight: 800, color: "#1a1a2e", fontSize: 16, marginBottom: 12 }}>
                Checkout Now →
              </motion.button>
              <button onClick={() => setPage("books")}
                style={{ width: "100%", padding: "12px", background: "transparent", border: `1px solid ${t.border}`, borderRadius: 14, cursor: "pointer", color: t.textMuted, fontSize: 14 }}>
                Continue Shopping
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

// WISHLIST PAGE
function WishlistPage({ setPage }) {
  const { dark } = useTheme();
  const t = getTheme(dark);
  const { wishlist, toggle } = useWishlist();
  const { addToCart } = useCart();
  const toast = useToast();
  const [modal, setModal] = useState(null);

  return (
    <div style={{ minHeight: "100vh", background: t.bg, paddingTop: 90 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 40 }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 800, color: t.text }}>♥ Wishlist</h1>
          <p style={{ color: t.textMuted }}>{wishlist.length} saved book{wishlist.length !== 1 ? "s" : ""}</p>
        </motion.div>

        {wishlist.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "80px 0" }}>
            <div style={{ fontSize: 80, marginBottom: 24 }}>💔</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: t.text, marginBottom: 12 }}>Your wishlist is empty</h3>
            <p style={{ color: t.textMuted, marginBottom: 32 }}>Save books you love for later</p>
            <motion.button whileHover={{ scale: 1.05 }} onClick={() => setPage("books")}
              style={{ padding: "14px 32px", background: t.gradient, border: "none", borderRadius: 12, cursor: "pointer", fontWeight: 700, color: "#1a1a2e", fontSize: 16 }}>
              Browse Books
            </motion.button>
          </motion.div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
            <AnimatePresence>
              {wishlist.map((book, i) => (
                <motion.div key={book.id} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ delay: i * 0.08 }}>
                  <BookCard book={book} onView={setModal} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
      <BookModal book={modal} onClose={() => setModal(null)} />
    </div>
  );
}

// LOGIN PAGE
function LoginPage({ setPage }) {
  const { dark } = useTheme();
  const t = getTheme(dark);
  const toast = useToast();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: "", password: "", name: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast(isLogin ? "Logged in successfully! Welcome back 👋" : "Account created! Welcome to Luminary 🎉");
    setTimeout(() => setPage("home"), 1000);
  };

  return (
    <div style={{ minHeight: "100vh", background: t.bg, paddingTop: 90, display: "flex", alignItems: "center", justifyContent: "center", padding: "90px 24px 40px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", maxWidth: 900, width: "100%", gap: 0, borderRadius: 24, overflow: "hidden", boxShadow: t.shadow }}>
        {/* Left Decorative */}
        <div style={{ background: `linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)`, padding: 60, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 30% 70%, ${t.accentGlow}, transparent 60%)` }} />
          <div style={{ fontSize: 56, marginBottom: 24, position: "relative" }}>📚</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 800, color: "#f0ede8", marginBottom: 16, position: "relative", lineHeight: 1.2 }}>
            Your reading<br />
            <span style={{ background: t.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>journey</span> awaits
          </h2>
          <p style={{ color: "rgba(240,237,232,0.6)", lineHeight: 1.7, position: "relative" }}>
            Join thousands of readers discovering their next great book with Luminary.
          </p>
          <div style={{ display: "flex", gap: 20, marginTop: 32, position: "relative" }}>
            {["12K+\nBooks", "50K+\nReaders", "Free\nPDFs"].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                {s.split("\n").map((line, j) => (
                  <div key={j} style={{ color: j === 0 ? t.accent : "rgba(240,237,232,0.5)", fontWeight: j === 0 ? 800 : 400, fontSize: j === 0 ? 20 : 12, fontFamily: j === 0 ? "'Playfair Display', serif" : "inherit" }}>{line}</div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <div style={{ background: t.surface, padding: 48 }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: t.text, marginBottom: 8 }}>
            {isLogin ? "Welcome back" : "Create account"}
          </h3>
          <p style={{ color: t.textMuted, marginBottom: 32 }}>
            {isLogin ? "Sign in to continue reading" : "Start your reading journey today"}
          </p>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {!isLogin && (
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: t.textMuted, marginBottom: 6 }}>Full Name</label>
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="John Doe" required={!isLogin}
                  style={{ width: "100%", padding: "12px 16px", background: t.surface2, border: `1px solid ${t.border}`, borderRadius: 10, color: t.text, fontSize: 14, outline: "none", boxSizing: "border-box" }} />
              </div>
            )}
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: t.textMuted, marginBottom: 6 }}>Email</label>
              <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="john@example.com" required
                style={{ width: "100%", padding: "12px 16px", background: t.surface2, border: `1px solid ${t.border}`, borderRadius: 10, color: t.text, fontSize: 14, outline: "none", boxSizing: "border-box" }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: t.textMuted, marginBottom: 6 }}>Password</label>
              <input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="••••••••" required
                style={{ width: "100%", padding: "12px 16px", background: t.surface2, border: `1px solid ${t.border}`, borderRadius: 10, color: t.text, fontSize: 14, outline: "none", boxSizing: "border-box" }} />
            </div>
            <motion.button whileHover={{ scale: 1.02, boxShadow: `0 8px 30px ${t.accentGlow}` }} whileTap={{ scale: 0.98 }} type="submit"
              style={{ padding: "14px", background: t.gradient, border: "none", borderRadius: 12, cursor: "pointer", fontWeight: 800, color: "#1a1a2e", fontSize: 16, marginTop: 8 }}>
              {isLogin ? "Sign In →" : "Create Account →"}
            </motion.button>
          </form>

          <div style={{ textAlign: "center", marginTop: 24, color: t.textMuted, fontSize: 14 }}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button onClick={() => setIsLogin(!isLogin)}
              style={{ background: "none", border: "none", cursor: "pointer", color: t.accent, fontWeight: 700, fontSize: 14 }}>
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </div>

          <div style={{ textAlign: "center", marginTop: 16, color: t.textMuted, fontSize: 12 }}>
            Demo app — no real authentication
          </div>
        </div>
      </div>
    </div>
  );
}

// ABOUT PAGE
function AboutPage() {
  const { dark } = useTheme();
  const t = getTheme(dark);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const team = [
    { name: "Alexandra Chen", role: "Founder & CEO", emoji: "👩‍💼" },
    { name: "Marcus Wright", role: "Head of Curation", emoji: "📚" },
    { name: "Sarah Kim", role: "UX Designer", emoji: "🎨" },
    { name: "James Torres", role: "Tech Lead", emoji: "💻" },
  ];

  const values = [
    { icon: "📖", title: "Curated Quality", desc: "Every book in our collection is hand-picked by our expert team of literary enthusiasts." },
    { icon: "🌍", title: "Global Reach", desc: "We bring stories from every corner of the world to readers everywhere." },
    { icon: "🎁", title: "Free Access", desc: "We believe everyone deserves access to great books, offering hundreds of free PDFs." },
    { icon: "🌱", title: "Community First", desc: "Building a community of passionate readers who inspire each other." },
  ];

  return (
    <div style={{ minHeight: "100vh", background: t.bg, paddingTop: 90 }}>
      {/* Hero */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "80px 24px 60px", textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ fontSize: 72, marginBottom: 24 }}>📚</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, color: t.text, marginBottom: 16 }}>
            Books Change<br />
            <span style={{ background: t.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Everything</span>
          </h1>
          <p style={{ color: t.textMuted, fontSize: 18, lineHeight: 1.8, maxWidth: 600, margin: "0 auto" }}>
            Luminary Books was born from a simple belief: that the right book at the right time can transform a life. We're a passionate team dedicated to connecting readers with stories that matter.
          </p>
        </motion.div>
      </div>

      {/* Values */}
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 80px" }}>
        <motion.h2 initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 800, color: t.text, textAlign: "center", marginBottom: 48 }}>
          What We Stand For
        </motion.h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}>
          {values.map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              style={{ background: t.cardBg, border: `1px solid ${t.border}`, borderRadius: 20, padding: 28, backdropFilter: "blur(10px)" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>{v.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: t.text, marginBottom: 8 }}>{v.title}</h3>
              <p style={{ color: t.textMuted, lineHeight: 1.7, fontSize: 14 }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 80px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 800, color: t.text, textAlign: "center", marginBottom: 48 }}>Meet the Team</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 24 }}>
          {team.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              style={{ background: t.cardBg, border: `1px solid ${t.border}`, borderRadius: 20, padding: "32px 24px", textAlign: "center", backdropFilter: "blur(10px)" }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>{m.emoji}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: t.text, marginBottom: 4 }}>{m.name}</h3>
              <div style={{ fontSize: 13, color: t.accent, fontWeight: 600 }}>{m.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 404 PAGE
function NotFoundPage({ setPage }) {
  const { dark } = useTheme();
  const t = getTheme(dark);
  return (
    <div style={{ minHeight: "100vh", background: t.bg, paddingTop: 90, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "90px 24px 40px" }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <motion.div animate={{ rotate: [0, -10, 10, -10, 10, 0] }} transition={{ duration: 1, delay: 0.3 }} style={{ fontSize: 100, marginBottom: 24 }}>📕</motion.div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(60px, 10vw, 120px)", fontWeight: 900, color: t.text, marginBottom: 8, lineHeight: 1 }}>404</h1>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: t.textMuted, marginBottom: 16 }}>Chapter Not Found</h2>
        <p style={{ color: t.textMuted, fontSize: 16, marginBottom: 32 }}>This page seems to have gone missing from our library.</p>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setPage("home")}
          style={{ padding: "14px 32px", background: t.gradient, border: "none", borderRadius: 12, cursor: "pointer", fontWeight: 700, color: "#1a1a2e", fontSize: 16 }}>
          Return to Home
        </motion.button>
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 6. FOOTER
// ─────────────────────────────────────────────────────────────
function Footer({ setPage }) {
  const { dark } = useTheme();
  const t = getTheme(dark);
  return (
    <footer style={{ background: dark ? "#07070e" : "#f0ede8", borderTop: `1px solid ${t.border}`, padding: "48px 24px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, background: t.gradient, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>📚</div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 800, color: t.text }}>Luminary</span>
            </div>
            <p style={{ color: t.textMuted, fontSize: 14, lineHeight: 1.7, maxWidth: 280 }}>
              Your premium destination for curated books. Discover, read, and grow with stories that matter.
            </p>
          </div>
          {[
            { title: "Shop", links: [["home", "Home"], ["books", "All Books"], ["free", "Free Books"]] },
            { title: "Account", links: [["login", "Login"], ["cart", "Cart"], ["wishlist", "Wishlist"]] },
            { title: "Company", links: [["about", "About Us"], ["home", "Blog"], ["home", "Contact"]] },
          ].map((col, i) => (
            <div key={i}>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: t.text, marginBottom: 16, fontSize: 16 }}>{col.title}</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {col.links.map(([page, label]) => (
                  <button key={label} onClick={() => setPage(page)}
                    style={{ background: "none", border: "none", cursor: "pointer", color: t.textMuted, fontSize: 14, textAlign: "left", padding: 0, transition: "color 0.2s" }}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: `1px solid ${t.border}`, paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <span style={{ color: t.textMuted, fontSize: 13 }}>© 2024 Luminary Books. All rights reserved.</span>
          <span style={{ color: t.textMuted, fontSize: 13 }}>Built with React & ♥</span>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────
// 7. APP
// ─────────────────────────────────────────────────────────────
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function AppContent() {
  const [page, setPage] = useState("home");
  const { dark } = useTheme();
  const t = getTheme(dark);

  const renderPage = () => {
    switch (page) {
      case "home": return <HomePage setPage={setPage} />;
      case "books": return <BooksPage />;
      case "free": return <FreeBooksPage />;
      case "cart": return <CartPage setPage={setPage} />;
      case "wishlist": return <WishlistPage setPage={setPage} />;
      case "login": return <LoginPage setPage={setPage} />;
      case "about": return <AboutPage />;
      default: return <NotFoundPage setPage={setPage} />;
    }
  };

  return (
    <div style={{ fontFamily: "'Crimson Pro', Georgia, serif", background: t.bg, color: t.text, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=Crimson+Pro:wght@300;400;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow-x: hidden; }
        @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
        select option { background: ${dark ? "#1a1a2e" : "#fff"}; color: ${t.text}; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${t.accent}; border-radius: 3px; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          [style*="grid-template-columns: 1fr 1fr"]:not(.hero-books) { grid-template-columns: 1fr !important; }
          [style*="grid-template-columns: 1fr 340px"] { grid-template-columns: 1fr !important; }
          [style*="grid-template-columns: 2fr 1fr 1fr 1fr"] { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
      <Navbar page={page} setPage={setPage} />
      <AnimatePresence mode="wait">
        <motion.div key={page} variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
          {renderPage()}
        </motion.div>
      </AnimatePresence>
      <Footer setPage={setPage} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <ToastProvider>
            <AppContent />
          </ToastProvider>
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  );
}
