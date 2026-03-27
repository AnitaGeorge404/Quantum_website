import Card from "./Card";

export default function ResearchCard({ title, summary, tag }) {
  return (
    <Card className="h-full p-8 flex flex-col justify-between">
      <div>
        {tag ? (
          <p className="mb-5 inline-flex text-xs font-bold uppercase tracking-widest text-secondary-500">
            {tag}
          </p>
        ) : null}
        <h3 className="text-2xl font-bold text-primary-900 group-hover:text-secondary-600 transition-colors mb-4">{title}</h3>
        <p className="leading-relaxed text-slate-500 md:text-lg">{summary}</p>
      </div>
      
      {/* Decorative arrow */}
      <div className="mt-8 flex items-center text-primary-400 group-hover:text-secondary-500 transition-colors">
        <span className="text-sm font-semibold tracking-wide uppercase mr-3">Learn More</span>
        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Card>
  );
}
