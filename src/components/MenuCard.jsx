export default function MenuCard({ nama, kategori, harga, tersedia }) {
  return (
    <article className="kartu">
      <h3>{nama}</h3>
      <p>Kategori: {kategori}</p>
      <p>Harga: Rp{harga.toLocaleString("id-ID")}</p>
      {tersedia ? (
        <span className="lencana">Tersedia</span>
      ) : (
        <span className="lencana off">Habis</span>
      )}
    </article>
  );
}
