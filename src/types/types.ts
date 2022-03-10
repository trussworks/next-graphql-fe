import { TagColorsEnum } from "./enums"

export type Incident = {
  id: React.Key
  colorCode: TagColorsEnum
  subject: {
    firstName: string
    lastName: string
  }
  receivedAt: string
  status: string
  analyst: {
    firstName: string
  }
}
