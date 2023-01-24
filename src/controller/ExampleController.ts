import ExampleData from '@JsonArchives/example.json'
import { ExampleEntry, ExampleSensitiveEntryOmit, NewExampleEntry } from '@Interfaces/example'

const example: ExampleEntry[] = ExampleData as ExampleEntry[]

export const getEntries = (): ExampleEntry[] => example

export const getEntriesSensitive = (): ExampleSensitiveEntryOmit[] => {
  return example.map((res) => {
    const { id, important, ...other } = res
    return other
  })
}

export const findById = (id: number): ExampleSensitiveEntryOmit | undefined => {
  const result = example.find(ex => ex.id === id)
  if (result != null) {
    const { id, important, ...other } = result
    return other
  }
  return undefined
}

export const addExample = (newExampleEntry: NewExampleEntry): ExampleEntry => {
  const newExample = {
    id: Math.max(...example.map(ex => ex.id)) + 1,
    ...newExampleEntry
  }
  example.push(newExample)
  return newExample
}
