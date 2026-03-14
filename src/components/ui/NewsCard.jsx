import Card from "./Card";

export default function NewsCard({ title, date, summary }) {
  return (
    <Card className="p-7">
      <p className="text-sm font-medium text-blue-900">{date}</p>
      <h3 className="mt-3 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-gray-600 leading-relaxed">{summary}</p>
    </Card>
  );
}
