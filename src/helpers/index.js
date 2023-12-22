export const formateEuro = count => {
    return Number(count).toLocaleString('es-ES', {
        style: 'currency',
        currency: 'EUR'
    })
}