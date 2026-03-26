import "./campo-formulario.estilos.css"

export function CampoDeFormulario({ children }) {
  return (
    <h2 className="campo-form">
      {children}
    </h2>
  );
}