import path from "path";

// Fungsi untuk mendapatkan path dari direktori penyimpanan
const getPathStorage = () => {
  // Menggabungkan path dari direktori kerja saat ini dengan path penyimpanan dokumen
  const documentPath = path.join(process.cwd(), process.env.STORAGE_DOCUMENT);

  const imagePath = path.join(process.cwd(), process.env.STORAGE_IMAGE);

  // Menggabungkan path dari direktori kerja saat ini dengan path penyimpanan sertifikat
  const pathTemplate = path.join(process.cwd(), process.env.STORAGE_TEMPLATE);

  const pathCmsBeranda = path.join(
    process.cwd(),
    process.env.STORAGE_CMSBERANDA,
  );

  const pathCmsArtikel = path.join(
    process.cwd(),
    process.env.STORAGE_CMSARTIKEL,
  );

  // Mengembalikan array yang berisi path untuk dokumen dan sertifikat
  return [
    documentPath,
    pathTemplate,
    pathCmsBeranda,
    pathCmsArtikel,
    imagePath,
  ];
};

export default getPathStorage;
