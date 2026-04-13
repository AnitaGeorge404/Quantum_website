export default function FacultyCard({ name, phone, email, linkedin, researchAreas, image }) {
  return (
    <div className="group rounded-2xl border border-sky-100/80 bg-white/70 backdrop-blur-sm p-6 md:p-7 hover:shadow-lg hover:border-sky-200 transition-all duration-300">
      {image && (
        <div className="relative overflow-hidden rounded-xl mb-5">
          <img
            src={image}
            alt={name}
            className="h-52 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/28 to-transparent" />
        </div>
      )}
      <h3 className="text-lg md:text-xl font-semibold text-slate-900">{name}</h3>
      
      <div className="mt-4 space-y-2 text-sm text-slate-700">
        {phone && (
          <p>
            <span className="font-medium text-slate-600">Phone:</span> {phone}
          </p>
        )}
        {email && (
          <p>
            <span className="font-medium text-slate-600">Email:</span>{" "}
            <a href={`mailto:${email}`} className="text-sky-700 hover:text-sky-900 underline">
              {email}
            </a>
          </p>
        )}
        {linkedin && (
          <p>
            <span className="font-medium text-slate-600">LinkedIn:</span>{" "}
            <a href={linkedin} target="_blank" rel="noreferrer" className="text-sky-700 hover:text-sky-900 underline">
              Profile
            </a>
          </p>
        )}
      </div>

      {researchAreas && researchAreas.length > 0 && (
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600 mb-2">Research Areas</p>
          <div className="flex flex-wrap gap-1">
            {researchAreas.map((area) => (
              <span key={area} className="inline-block rounded-full bg-sky-50 border border-sky-200 px-2.5 py-1 text-xs text-slate-700">
                {area}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
