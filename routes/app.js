import express from "express"
import { guardarTestimonial } from "../controllers/testimonialesController.js"
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaDetalle,
  paginaTestimoniales
} from "../controllers/pagesController.js"

const router = express.Router()

router.get("/", paginaInicio)

router.get("/nosotros", paginaNosotros)

router.get("/viajes", paginaViajes)

router.get("/viajes/:slug", paginaDetalle)

router.get("/testimoniales", paginaTestimoniales)
router.post("/testimoniales", guardarTestimonial)

export default router