import { Viaje } from "../models/Viaje.js"
import { Testimoniales } from "../models/Testimoniales.js"

//Consultar 3 viajes del modelo Viaje
export const paginaInicio = async (req, res) => {
  //Dividimos la query para usar un PromiseALL
  const viaje = Viaje.findAll({ limit: 3 })
  const testimonial = Testimoniales.findAll({ limit: 3 })

  //Ya que estas promesas estan en pending las concretamos usando el await
  const [viajes, testimoniales] = await Promise.all([viaje, testimonial])
  try {
    res.render("inicio", {
      pagina: "Inicio",
      clase: "home",
      viajes,
      testimoniales
    })
  } catch (e) {
    throw new Error(`Error al traer los datos ${e}`)
  }
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

export const paginaTestimoniales = async (req, res) => {
  const testimoniales = await Testimoniales.findAll()
  try {
    res.render("testimoniales", {
      pagina: "Testimoniales",
      testimoniales
    })
  } catch (e) {
    throw new Error(`Erro al consultar los testimoniales ${e}`)
  }
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