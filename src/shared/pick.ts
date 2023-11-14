const pick = <T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[],
): Partial<T> => {
  const findObj: Partial<T> = {}
  for (const key of keys) {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      findObj[key] = obj[key]
    }
  }
  return findObj
}

export default pick
