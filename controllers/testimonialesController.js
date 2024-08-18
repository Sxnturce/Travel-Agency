import { Testimoniales } from "../models/Testimoniales.js";

export const guardarTestimonial = async (req, res) => {
  const { nombre, email, mensaje } = req.body
  let errors = []

  if (!nombre.trim()) errors = [...errors, { name: "Complete el campo de nombre" }];

  if (!email.trim()) errors = [...errors, { email: "Complete el campo de email" }];

  if (!mensaje.trim()) errors = [...errors, { msg: "Complete este campo" }];

  if (errors.length > 0) {
    const datos = await Testimoniales.findAll()
    res.render("testimoniales", {
      pagina: "Testimoniales",
      errors,
      nombre,
      email,
      mensaje,
      datos
    })
    return;
  }

  //Enviar los datos a la db
  try {
    await Testimoniales.create({
      nombre: nombre.trim(),
      correo: email.trim(),
      mensaje: mensaje.trim()
    })
    res.redirect("/testimoniales")
  } catch (e) {
    throw new Error(`Error al intentar crear un Testimonial: ${e}`)
  }
}