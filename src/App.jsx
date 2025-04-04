import { Layout } from "./mainPages/Layout";
import { UserLoginProvider } from "./context/LoginContext";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <div className="App">
      <UserLoginProvider>
        <ProductProvider>
          <Layout />
        </ProductProvider>
      </UserLoginProvider>
    </div>
  );
}

export default App;
