export const validateNameMs = (name = '') => {
  if (name === '') return 'Nome do MS precisa ser preenchido'
  if (name.length <= 4)
    return `Nome: ${name} muito pequeno, deve ser maior do que 4`
  return true
}
