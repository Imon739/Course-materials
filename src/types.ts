export type MaterialLink = {
  name: string
  url: string
}

export type Materials = Record<string, Record<string, MaterialLink[]>>

export type CourseSuggestion = {
  id: string
  trimester: string
  courseName: string
}
