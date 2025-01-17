// Checks for args or flags supplied to command
export const isEmptyCommand = (flags: object, args: object) => {
  if (!hasFlags(flags) && !hasArgs(args)) {
    return true
  }
  return false
}

export const hasFlags = (flags: object) => {
  return Object.keys(flags).length
}

export const hasArgs = (args: object) => {
  return Object.keys(args).length
}
