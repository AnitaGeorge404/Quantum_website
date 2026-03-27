import Card from "./Card";

export default function GalleryCard({ title, subtitle, image }) {
  return (
    <Card className="h-full">
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 to-transparent" />
      </div>
      <div className="p-6 md:p-7">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-3 text-slate-600">{subtitle}</p>
      </div>
    </Card>
  );
}
