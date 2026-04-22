import React from "react";
import { useForm } from "react-hook-form";

export default function ArticulosRegistro({
  AccionABMC,
  Categorias,
  Item,
  Grabar,
  Volver,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid, isSubmitted },
  } = useForm({ values: Item });
  const onSubmit = (data) => {
    Grabar(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container-fluid">

        <fieldset disabled={AccionABMC === "C"}>

          {/* campo nombre */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Nombre">
                Nombre<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
                <input
                    type="text"
                    {...register("Nombre", {
                        required: { value: true, message: "Nombre es requerido" },
                        minLength: {
                        value: 5,
                        message: "Nombre debe tener al menos 5 caracteres",
                        },
                        maxLength: {
                        value: 60,
                        message: "Nombre debe tener como máximo 60 caracteres",
                        },
                    })}
                    autoFocus
                    className={
                        "form-control " + (errors?.Nombre ? "is-invalid" : "")
                    }
                    />
                    {errors?.Nombre && touchedFields.Nombre && (
                    <div className="invalid-feedback">
                        {errors?.Nombre?.message}
                    </div>
                    )}
            </div>
          </div>

          {/* campo Precio */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Precio">
                Precio<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
                   <input
                        type="number" 
                        step=".01"
                        {...register("Precio", {
                            required: { value: true, message: "Precio es requerido" },
                            min: {
                            value: 0.01,
                            message: "Precio debe ser mayor a 0",
                            },
                            max: {
                            value: 99999.99,
                            message: "Precio debe ser menor o igual a 99999.99",
                            },
                        })}
                        className={
                            "form-control " + (errors?.Precio ? "is-invalid" : "")
                        }
                        />
                        <div className="invalid-feedback">{errors?.Precio?.message}</div>   
            </div>
          </div>

          {/* campo Stock */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Stock">
                Stock<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
            <input
                type="number"
                {...register("Stock", {
                    required: { value: true, message: "Stock es requerido" },
                    min: {
                    value: 0,
                    message: "Stock debe ser mayor a 0",
                    },
                    max: {
                    value: 99999,
                    message: "Stock debe ser menor o igual a 999999",
                    },
                })}
                className={
                    "form-control " + (errors?.Stock ? "is-invalid" : "")
                }
            />
            <div className="invalid-feedback">{errors?.Stock?.message}</div>
            </div>
          </div>

          {/* campo CodigoDeBarra */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="CodigoDeBarra">
                Codigo De Barra<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
               <input
                    type="text"
                    {...register("CodigoDeBarra", {
                        required: {
                        value: true,
                        message: "Codigo De Barra es requerido",
                        },
                        pattern: {
                        value: /^[0-9]{13}$/,
                        message:
                            "Codigo De Barra debe ser un número, de 13 dígitos",
                        },
                    })}
                    className={
                        "form-control" + (errors?.CodigoDeBarra ? " is-invalid" : "")
                    }
                    />
                    <div className="invalid-feedback">
                    {errors?.CodigoDeBarra?.message}
                    </div>
                        
            </div>
          </div>

          {/* campo IdCategoria*/}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="IdCategoria">
                Categoria<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <select
                {...register("IdCategoria", {
                    required: { value: true, message: "Categoria es requerido" },
                })}
                className={
                    "form-control " +
                    (errors?.IdCategoria ? "is-invalid" : "")
                }
                >
                <option value="" key={1}></option>
                {Categorias?.map((x) => (
                    <option value={x.IdCategoria} key={x.IdCategoria}>
                    {x.Nombre}
                    </option>
                ))}
                </select>
                <div className="invalid-feedback">
                {errors?.IdCategoria?.message}
</div>

            </div>
          </div>

          {/* campo FechaAlta */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="FechaAlta">
                Fecha Alta<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                    type="date"
                    {...register("FechaAlta", {
                        required: { value: true, message: "Fecha Alta es requerido" }
                    })}
                    className={
                        "form-control " + (errors?.FechaAlta ? "is-invalid" : "")
                    }
                    />
                    <div className="invalid-feedback">
                    {errors?.FechaAlta?.message}
                    </div>           
            </div>
          </div>

          {/* campo Activo */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Activo">
                Activo<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <select
                {...register("Activo")}
                className="form-control"
                disabled
              >
                <option value={null}></option>
                <option value={false}>NO</option>
                <option value={true}>SI</option>
              </select>
            </div>
          </div>

        </fieldset>

        {/* Botones Grabar, Cancelar/Volver' */}
        <hr />
        <div className="row justify-content-center">
          <div className="col text-center botones">
            {AccionABMC !== "C" && (
              <button type="submit" className="btn btn-primary">
                <i className="fa fa-check"></i> Grabar
              </button>
            )}
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => Volver()}
            >
              <i className="fa fa-undo"></i>
              {AccionABMC === "C" ? " Volver" : " Cancelar"}
            </button>
          </div>
        </div>

        {/* texto: Revisar los datos ingresados... */}
        {!isValid && isSubmitted && (
        <div className="row alert alert-danger mensajesAlert">
            <i className="fa fa-exclamation-sign"></i>
            Revisar los datos ingresados...
        </div>
)}
      </div>
    </form>
  );
}



