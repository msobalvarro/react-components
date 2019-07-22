/** Asignamos el nombre de la ruta según el título */
export const routing = (ref = "") => {
    let txt = ref.toLowerCase()
    txt = txt.replace(" de ", "-").replace(" y ", "-").replace(" ", "-")

    /**Removiendo todos los acentos de las palabras */
    txt = txt.replace('á', 'a').replace('é', 'e').replace('í', 'i').replace('ó', 'o').replace('ú', 'u')

    return txt
}

export const orderBy = (arr = [], order = []) => {

}