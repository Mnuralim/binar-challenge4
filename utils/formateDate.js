function formatDate() {
  const miliseconds = Date.now();

  const dateObject = new Date(miliseconds);

  const tanggal = dateObject.getDate();
  const bulan = dateObject.getMonth() + 1;
  const tahun = dateObject.getFullYear();

  const namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  return `${tanggal} ${namaBulan[bulan - 1]} ${tahun}`;
}

export default formatDate;
