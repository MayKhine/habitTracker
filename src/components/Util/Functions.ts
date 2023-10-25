import { DateTime } from "luxon"

export const dateLength = (startDate: string, endDate: string) => {
  const luxonStartDate = DateTime.fromISO(startDate)
  const luxonEndDate = DateTime.fromISO(endDate)

  const dateLength = luxonEndDate.diff(luxonStartDate, ["days"]).toObject()

  return dateLength.days
}
