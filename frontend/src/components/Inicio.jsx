import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="mt-4 p-5 rounded" style={{ backgroundColor: "lightgray" }}>
      <h1>Pymes 2025</h1>
      <p>Este ejemplo está desarrollado con las siguientes tecnologías:</p>
      <p>
        Backend: NodeJs, Express , WebApiRest, Swagger, Sequelize, Sqlite y Javascript.
      </p>
      <p>
        Frontend: Single Page Application, HTML, CSS, Bootstrap, Javascript, NodeJs y React.
      </p>
      <Link to="/categorias" className="btn btn-lg btn-primary">
          <i className="fa fa-search"> </i>  Ver Categorias
      </Link>

    </div>
  )
}
export { Inicio }


