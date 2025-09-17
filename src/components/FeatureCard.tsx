export default function FeatureCard({ title, img, desc }: { title: string; img: string; desc?: string }) {
  return (
    <div className="card p-4 md:p-6 hover:bg-white/10 transition">
      <div className="aspect-[16/9] w-full overflow-hidden rounded-xl mb-4 bg-white/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={title} className="w-full h-full object-contain" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      {desc && <p className="text-gray-300 mt-2">{desc}</p>}
    </div>
  );
}
