import Card from "./Card";

export default function PersonCard({ name, role, focus }) {
  return (
    <Card className="h-full p-6 md:p-8 hover:shadow-md transition-shadow border border-slate-100/60 bg-white">
      <h3 className="text-xl font-bold text-slate-900">{name}</h3>
      <div className="mt-4 mb-4">
        <span className="inline-flex rounded-full bg-blue-600 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
          {role}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-slate-600">{focus}</p>
    </Card>
  );
}
