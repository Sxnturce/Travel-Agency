import { Viaje } from "../models/Viaje.js"

export const paginaInicio = (req, res) => {
  res.render("inicio", {
    pagina: "Inicio"
  })
}

export const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros"
  })
}

export const paginaViajes = async (req, res) => {
  //Consultar base de datos
  const viajes = await Viaje.findAll()

  res.render("viajes", {
    pagina: "Proximos Viajes",
    viajes
  })
}

export const paginaTestimoniales = (req, res) => {
  res.render("testimoniales", {
    pagina: "Testimoniales"
  })
}

//Muestra un vijae por su id
export const paginaDetalle = async (req, res) => {
  const { slug } = req.params

  try {
    const viaje = await Viaje.findOne({ where: { slug } })

    res.render("viaje", {
      pagina: "Informacion viaje",
      viaje
    })
  } catch (e) {
    throw new Error(`Error al obtener el viaje error en: ${e}`);
  }
}