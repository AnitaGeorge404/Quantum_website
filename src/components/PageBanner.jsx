export default function PageBanner({ title }) {
  return (
    <div className="p-8 bg-gray-200">
      <h2 className="text-2xl font-semibold">{title || 'Page Banner'}</h2>
    </div>
  );
}
