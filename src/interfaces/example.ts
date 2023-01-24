import { Important, Validate, Visibility, Weather } from '@Interfaces/types'

export interface ExampleEntry {
  id: number
  content: string
  date: string
  weather: Weather
  visibility: Visibility
  validate: Validate
  important: Important

}

export type ExampleSensitiveEntryPick = Pick<ExampleEntry, 'content' | 'weather' | 'visibility' | 'date' | 'validate'>
export type ExampleSensitiveEntryOmit = Omit<ExampleEntry, 'id' | 'important'>
export type NewExampleEntry = Omit<ExampleEntry, 'id'>
