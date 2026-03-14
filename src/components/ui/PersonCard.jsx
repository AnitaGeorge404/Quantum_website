import Card from "./Card";

export default function PersonCard({ name, role, focus, image }) {
  return (
    <Card className="p-6">
      <img src={image} alt={name} className="w-full h-52 object-cover rounded-lg" />
      <h3 className="mt-5 text-xl font-semibold text-gray-900">{name}</h3>
      <p className="mt-1 text-sm font-medium text-blue-900">{role}</p>
      <p className="mt-3 text-gray-600 text-sm leading-relaxed">{focus}</p>
    </Card>
  );
}
