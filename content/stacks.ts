import {
  Braces,
  Code2,
  Database,
  Atom,
  Layers,
  Zap,
  Wind,
  Frame,
  RefreshCw,
  Route,
  Feather,
  ArrowLeftRight,
  Hexagon,
  Server,
  ServerCog,
  Webhook,
  Container,
  Triangle,
  GitBranch,
  Github,
  ShieldCheck,
  CheckCheck,
  Figma,
  Send,
  Mail,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type StackCategory =
  | 'Linguagens'
  | 'Front-end'
  | 'Back-end'
  | 'Banco de Dados'
  | 'Infra/Deploy'
  | 'Ferramentas'
  | 'Design'
  | 'Integrações'

/** confirmed = encontrada nos manifestos do repo · high = evidência clara de uso (deploy/workflow). */
export type StackConfidence = 'confirmed' | 'high'

export type Stack = {
  name: string
  category: StackCategory
  icon: LucideIcon
  /** projeto/repo onde foi identificada */
  source: string
  confidence: StackConfidence
}

/**
 * Stacks REAIS extraídas dos repositórios de github.com/apsantos05
 * (portifolio, acerto/AcertaVest, arrematex, ayhub). Nada inventado.
 * Editar aqui altera a esteira inteira — a seção é 100% data-driven.
 */
export const stacks: Stack[] = [
  // ── Linguagens ──────────────────────────────────────────────
  { name: 'TypeScript', category: 'Linguagens', icon: Braces, source: 'Portfólio · AcertaVest · Arrematex', confidence: 'confirmed' },
  { name: 'JavaScript', category: 'Linguagens', icon: Braces, source: 'AYHub', confidence: 'confirmed' },
  { name: 'Python', category: 'Linguagens', icon: Code2, source: 'Arrematex', confidence: 'confirmed' },
  { name: 'SQL', category: 'Linguagens', icon: Database, source: 'AcertaVest · Arrematex', confidence: 'confirmed' },

  // ── Front-end ───────────────────────────────────────────────
  { name: 'React', category: 'Front-end', icon: Atom, source: 'Portfólio · AcertaVest · Arrematex · AYHub', confidence: 'confirmed' },
  { name: 'Next.js', category: 'Front-end', icon: Layers, source: 'Portfólio · AcertaVest', confidence: 'confirmed' },
  { name: 'Vite', category: 'Front-end', icon: Zap, source: 'Arrematex · AYHub', confidence: 'confirmed' },
  { name: 'Tailwind CSS', category: 'Front-end', icon: Wind, source: 'Portfólio · AcertaVest', confidence: 'confirmed' },
  { name: 'Framer Motion', category: 'Front-end', icon: Frame, source: 'Portfólio', confidence: 'confirmed' },
  { name: 'React Query', category: 'Front-end', icon: RefreshCw, source: 'Arrematex', confidence: 'confirmed' },
  { name: 'React Router', category: 'Front-end', icon: Route, source: 'Arrematex', confidence: 'confirmed' },
  { name: 'Lucide', category: 'Front-end', icon: Feather, source: 'Portfólio · AcertaVest', confidence: 'confirmed' },
  { name: 'Axios', category: 'Front-end', icon: ArrowLeftRight, source: 'Arrematex', confidence: 'confirmed' },

  // ── Back-end ────────────────────────────────────────────────
  { name: 'Node.js', category: 'Back-end', icon: Hexagon, source: 'Portfólio · AYHub · AcertaVest', confidence: 'confirmed' },
  { name: 'Express', category: 'Back-end', icon: Server, source: 'AYHub', confidence: 'confirmed' },
  { name: 'Django', category: 'Back-end', icon: ServerCog, source: 'Arrematex', confidence: 'confirmed' },
  { name: 'REST APIs', category: 'Back-end', icon: Webhook, source: 'Portfólio · AcertaVest · Arrematex · AYHub', confidence: 'confirmed' },

  // ── Banco de Dados ──────────────────────────────────────────
  { name: 'PostgreSQL', category: 'Banco de Dados', icon: Database, source: 'AcertaVest · Arrematex', confidence: 'confirmed' },
  { name: 'Supabase', category: 'Banco de Dados', icon: Database, source: 'AcertaVest', confidence: 'confirmed' },
  { name: 'Redis', category: 'Banco de Dados', icon: Database, source: 'Arrematex', confidence: 'confirmed' },

  // ── Infra/Deploy ────────────────────────────────────────────
  { name: 'Docker', category: 'Infra/Deploy', icon: Container, source: 'Arrematex', confidence: 'confirmed' },
  { name: 'Vercel', category: 'Infra/Deploy', icon: Triangle, source: 'Portfólio · AcertaVest', confidence: 'high' },
  { name: 'Git', category: 'Infra/Deploy', icon: GitBranch, source: 'Todos', confidence: 'high' },
  { name: 'GitHub', category: 'Infra/Deploy', icon: Github, source: 'Todos', confidence: 'high' },

  // ── Ferramentas ─────────────────────────────────────────────
  { name: 'Zod', category: 'Ferramentas', icon: ShieldCheck, source: 'Portfólio', confidence: 'confirmed' },
  { name: 'ESLint', category: 'Ferramentas', icon: CheckCheck, source: 'AcertaVest', confidence: 'confirmed' },

  // ── Design ──────────────────────────────────────────────────
  { name: 'Figma', category: 'Design', icon: Figma, source: 'Design System', confidence: 'high' },

  // ── Integrações ─────────────────────────────────────────────
  { name: 'Resend', category: 'Integrações', icon: Mail, source: 'Portfólio', confidence: 'confirmed' },
  { name: 'Telegram API', category: 'Integrações', icon: Send, source: 'AcertaVest', confidence: 'confirmed' },
]

/** Divide as stacks em N faixas equilibradas (para linhas da esteira). */
export function stacksInRows(rows: number): Stack[][] {
  const out: Stack[][] = Array.from({ length: rows }, () => [])
  stacks.forEach((s, i) => out[i % rows].push(s))
  return out
}
