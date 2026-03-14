import Card from "./Card";

export default function GalleryCard({ title, subtitle, image }) {
  return (
    <Card>
      <img src={image} alt={title} className="h-56 w-full object-cover rounded-t-xl" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{subtitle}</p>
      </div>
    </Card>
  );
}
