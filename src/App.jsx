import MenuCard from "./components/MenuCard.jsx";

export default function App() {
  return (
    <main>
      <h1>Daftar Menu Makanan</h1>

      <MenuCard
        nama="Nasi Goreng"
        kategori="Makanan Utama"
        harga={15000}
        tersedia={true}
      />

      <MenuCard
        nama="Mie Goreng"
        kategori="Makanan Utama"
        harga={12000}
        tersedia={true}
      />

      <MenuCard
        nama="Es Teh Manis"
        kategori="Minuman"
        harga={5000}
        tersedia={false}S
      />
    </main>
  );
}
