import { AuthProvider } from "./context/AuthContext/AuthContext";
import { CartProvider } from "./context/CartContext/CartContext";
import MainLayout from "./layout/MainLayout";
import AppRoutes from "./routes";

export default function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </CartProvider>
    </AuthProvider>

  )
}

