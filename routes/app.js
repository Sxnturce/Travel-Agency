import express from "express"
import { paginaInicio } from "../controllers/pagesController.js"
import { paginaNosotros } from "../controllers/pagesController.js"
import { paginaViajes } from "../controllers/pagesController.js"
import { paginaTestimoniales } from "../controllers/pagesController.js"
import { paginaDetalle } from "../controllers/pagesController.js"


const router = express.Router()

router.get("/", paginaInicio)

router.get("/nosotros", paginaNosotros)

router.get("/viajes", paginaViajes)

router.get("/viajes/:slug", paginaDetalle)

router.get("/testimoniales", paginaTestimoniales)

export default router