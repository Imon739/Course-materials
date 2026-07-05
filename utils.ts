const SEASON_PREFIX: Record<string, string> = {
  spring: 'SP',
  summer: 'SU',
  fall: 'FA',
  autumn: 'FA',
  winter: 'WI'
}

/**
 * Turns "Spring 2023" into "SP23", "Summer 2025" into "SU25", etc.
 * Falls back to the first two letters of the term + last two digits of the year.
 */
export function trimesterCode(trimesterName: string): string {
  const parts = trimesterName.trim().split(/\s+/)
  const season = (parts[0] ?? '').toLowerCase()
  const year = parts[1] ?? ''
  const yearSuffix = year.slice(-2)
  const prefix = SEASON_PREFIX[season] ?? season.slice(0, 2).toUpperCase()
  return `${prefix}${yearSuffix}`
}

export type ResourceCategory =
  | 'slide' | 'assignment' | 'quiz' | 'exam' | 'note'
  | 'book' | 'video' | 'lab' | 'solution' | 'report'
  | 'practice' | 'cheat' | 'link'

const CATEGORY_RULES: [RegExp, ResourceCategory][] = [
  [/slide/i, 'slide'],
  [/assignment/i, 'assignment'],
  [/quiz/i, 'quiz'],
  [/mid|final|exam|question/i, 'exam'],
  [/note/i, 'note'],
  [/book/i, 'book'],
  [/video/i, 'video'],
  [/lab/i, 'lab'],
  [/solu?tion|solve|answer/i, 'solution'],
  [/report/i, 'report'],
  [/problem|practice|logisim/i, 'practice'],
  [/cheat/i, 'cheat']
]

/** Classifies a resource label (e.g. "Mid materials", "Lab report") into a small icon category. */
export function resourceCategory(name: string): ResourceCategory {
  for (const [pattern, category] of CATEGORY_RULES) {
    if (pattern.test(name)) return category
  }
  return 'link'
}
