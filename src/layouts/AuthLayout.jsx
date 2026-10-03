import Navbar from "../componentes/Navbar";
function AuthLayout({ children }) {
  return (
    <>
      <Navbar autenticado={false} />
      <div className="w3-container w3-content" style={{ maxWidth: "500px", marginTop: "100px" }}>
        {children}
      </div>
    </>
  );
}

export default AuthLayout;