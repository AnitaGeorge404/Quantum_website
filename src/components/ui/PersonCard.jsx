import Card from "./Card";

export default function PersonCard({ name, role, focus, image }) {
  return (
    <Card className="h-full p-6 md:p-7">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={image}
          alt={name}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/28 to-transparent" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-900">{name}</h3>
      <p className="mt-2 inline-flex rounded-full border border-blue-700 bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
        {role}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">{focus}</p>
    </Card>
  );
}
