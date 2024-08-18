export const guardarTestimonial = (req, res) => {
  const { nombre, email, mensaje } = req.body
  let errors = []

  if (!nombre.trim()) {
    errors = [...errors, { name: "Complete el campo de nombre" }];
  }

  if (!email.trim()) {
    errors = [...errors, { email: "Complete el campo de email" }];
  }

  if (!mensaje.trim()) {
    errors = [...errors, { msg: "Complete este campo" }];
  }

  if (errors) {
    res.render("testimoniales", {
      pagina: "Testimoniales",
      errors,
      nombre,
      email,
      mensaje
    })
  }
}