 import { useState, useEffect } from "react"; // hooks nativos de react

 /**
  * 
  * @param key 
  * @param initialState 
  * @returns {Value, setValue}
  * @description useLocalStorage es un custom hook que devuelve data extraida del localstorage, asi como colocar data en este mismo
  */

export default function useLocalStorage<T>(key: string, initialState: T) {

  // Creamos un estado para guardar la data cuando se ejecute cualquiera de los dos useEffect y guardarla

  const [value, setValue] = useState<T>(initialState);

  // Este useEffect cumple la tarea de cambiar el estado cuando se monta la aplicacion, si existe algun tipo de data se agrega al estado, de lo contrario se pasa el valor inicial, el cual podria ser un arreglo, etd

  useEffect(() => {
    const items = localStorage.getItem(key)
    if(items) {
      setValue(JSON.parse(items))
    } else {
      setValue(initialState)
    }
  }, [])

  // Este useEffect cumple con la tarea de agregar data al localstorage, de esta manera podemos mantener esa data constante
  // Nota (cuando se agrega data por primera vez, en un estado global se captura la data desde donde se usa el estado, asi que cuando alguna vez el usuario recargue la pagina, la data se empezara a extraer del localstorage)

  useEffect(() => {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}
