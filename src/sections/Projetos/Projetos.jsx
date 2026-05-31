import { useState, useEffect } from 'react'
import './Projetos.css'

const GITHUB_USER = 'jacksonjlgravino'
const REPOS_API_URL = `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`
const PROFILE_API_URL = `https://api.github.com/users/${GITHUB_USER}`
const PROJECTS_TO_SHOW_INITIALLY = 6

const truncateText = (text, maxLength = 100) => {
  if (!text) return 'Sem descrição.'
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
}

function ProjectCard({ repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="project-card"
      aria-label={`Abrir repositório ${repo.name} no GitHub`}
    >
      <h3>{repo.name}</h3>
      <p>{truncateText(repo.description)}</p>
      <div className="repo-info">
        <span>
          <i className="fas fa-code"></i> {repo.language || 'N/A'}
        </span>
        <span>
          <i className="fas fa-star"></i> {repo.stargazers_count}
        </span>
      </div>
    </a>
  )
}

export default function Projetos() {
  const [repos, setRepos] = useState([])
  const [totalRepos, setTotalRepos] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(PROFILE_API_URL)
        const data = await res.json()
        if (data.public_repos !== undefined) {
          setTotalRepos(data.public_repos)
        }
      } catch {
        // silencia erro do perfil, não é crítico
      }
    }

    const fetchRepos = async () => {
      try {
        const res = await fetch(REPOS_API_URL)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        const filtered = data.filter((repo) => !repo.fork)
        setRepos(filtered)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
    fetchRepos()
  }, [])

  const visibleRepos = isExpanded ? repos : repos.slice(0, PROJECTS_TO_SHOW_INITIALLY)
  const hasMore = repos.length > PROJECTS_TO_SHOW_INITIALLY
  const remaining = repos.length - PROJECTS_TO_SHOW_INITIALLY

  const handleToggle = () => {
    if (isExpanded) {
      document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsExpanded((prev) => !prev)
  }

  return (
    <section id="projetos" className="content-section">
      <h2>
        Meus Projetos
        {totalRepos !== null && (
          <span className="repo-count-badge">{totalRepos} repositórios</span>
        )}
      </h2>

      <div className="project-grid">
        {loading && <p className="status-message">Carregando projetos do GitHub...</p>}

        {error && (
          <p className="status-message error-message">
            Não foi possível carregar os projetos. Verifique o usuário.
          </p>
        )}

        {!loading && !error && repos.length === 0 && (
          <p className="status-message error-message">
            Nenhum projeto público encontrado ou todos são forks.
          </p>
        )}

        {visibleRepos.map((repo) => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>

      {hasMore && !loading && !error && (
        <button className="cta-button action-button" onClick={handleToggle}>
          {isExpanded
            ? `Mostrar menos (${PROJECTS_TO_SHOW_INITIALLY}) projetos`
            : `Ver mais projetos (${remaining} restantes)`}
        </button>
      )}

      <p className="github-link-info">
        <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i> Acessar perfil completo no GitHub
        </a>
      </p>
    </section>
  )
}
