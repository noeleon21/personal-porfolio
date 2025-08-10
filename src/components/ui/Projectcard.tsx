type Props = {
  title: string
  description: string
  tags?: string[]
  repoUrl?: string
}

export default function ProjectCard({ title, description, tags = [], repoUrl }: Props) {
  return (
    <article className=" bg-gradient-to-br from-sky-900 to-indigo-900  rounded-xl shadow p-4">
      {/* <div className="h-36 bg-slate-100 rounded-md flex items-center justify-center">Screenshot</div> */}
      <h4 className="mt-3 font-semibold text-sky-300">{title}</h4>
      <p className="mt-2 text-sm text-white">{description}</p>
      <div className="mt-3 text-sm">
        <div className="text-white">{tags.join(' · ')}</div>
        {repoUrl && (
          <div className="mt-2">
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-sky-500">
              Repo
            </a>
          </div>
        )}
      </div>
    </article>
  )
}