type Props = {
  title: string
  description: string
  tags?: string[]
  repoUrl?: string
  liveUrl?: string
}

export default function ProjectCard({ title, description, tags = [], repoUrl, liveUrl }: Props) {
  return (
    <article className="bg-gradient-to-br from-sky-900 to-indigo-900   rounded-xl shadow p-5 flex flex-col h-full">
      {/* Screenshot placeholder */}
      {/* <div className="h-36 bg-slate-100 rounded-md flex items-center justify-center">Screenshot</div> */}

      <div className="mt-1 flex-1">
        <h4 className="mt-1 font-semibold text-sky-300 text-lg">{title}</h4>
        <p className="mt-2 text-sm text-white-600 whitespace-pre-wrap">{description}</p>
      </div>

      <div className="mt-4 text-sm">
        <div className="font-bold text-cream mb-3">{tags.join(' · ')}</div>

        <div className="flex flex-wrap gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-md shadow transition"
              aria-label={`Open live site for ${title}`}
            >
              {/* optionally add an icon here */}
              <span>Website</span>
            </a>
          )}

          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-md shadow transition"
              aria-label={`Open repository for ${title}`}
            >
              <span>Repo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}