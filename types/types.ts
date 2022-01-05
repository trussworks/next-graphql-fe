import { TagColorsEnum } from "./enums"

export type Case = {
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
