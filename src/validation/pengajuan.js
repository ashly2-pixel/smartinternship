import Joi from "joi";

const createPengajuan = Joi.object({
  user_id: Joi.number().required(),
  posisi: Joi.string().required(),
});
// Perubahan minor untuk konsistensi kode 

export { createPengajuan };
