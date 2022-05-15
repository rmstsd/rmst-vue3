export const downloadExcel = (blob, fileName = 'excel') => {
  // let blob = new Blob([steam], { type: 'application/x-xls;charset=UTF-8' })
  const url = URL.createObjectURL(blob)

  let a = document.createElement('a')
  a.href = url
  a.download = `${fileName}.xlsx`
  a.click()
  a = null
  // blob = null
  URL.revokeObjectURL(url)
}
