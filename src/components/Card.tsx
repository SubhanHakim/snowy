// ...existing code...
export default function Card({ img, title, desc }: { img: string; title: string; desc: string }) {
  return (
    <div className="group relative block h-full">
      <div className="relative h-full transform rounded-xl border-2 border-black bg-white transition-transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 overflow-hidden flex flex-col">
        {/* image area: fixed max height so GIF besar tapi proporsional */}
        <div className="w-full shrink-0 flex items-center justify-center p-4 border-b-2 border-black">
          <img
            src={img}
            alt={title}
            className="w-full max-h-56 md:max-h-64 lg:max-h-72 object-contain"
            loading="lazy"
          />
        </div>

        {/* content area: mengambil sisa tinggi supaya semua card sama tinggi */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold uppercase text-black">{title}</h3>
            <p className="text-xs text-gray-500 mt-1">{desc}</p>
          </div>

          {/* placeholder value (jika diperlukan tampilkan di sini) */}
          <div className="mt-4">
            {/* contoh value, hapus jika tidak diperlukan */}
          </div>
        </div>
      </div>
    </div>
  )
}
// ...existing code...