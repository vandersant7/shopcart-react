import AppRoutes from "./routes"
import MainLayout from "./layout/MainLayout"
import { CartProvider } from "./context/CartContext"
import { AuthProvider } from "./context/AuthContext"

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

