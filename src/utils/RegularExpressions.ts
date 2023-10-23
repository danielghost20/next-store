
/**
 * @name handleInputNumberCard
 * @param {HTMLInputElement} event 
 * @param {Dispatch<SetStateAction>} setValue
 * @description Esta funcion retorna un numero con 16 digitos separados por 1 espacio por cada 4 numeros 
 */

/**
 * @name handleInputNumberCVV
 * @param event 
 * @param setValue
 * @description Esta funcion retorna un numero con 16 digitos separados por 1 espacio por cada 4 numeros 
 */

/**
 * @name handleInputDateCard
 * @param event 
 * @param setValue
 * @description Esta funcion retorna un numero con 16 digitos separados por 1 espacio por cada 4 numeros 
 */


export const handleInputNumberCard = (
  event: React.ChangeEvent<HTMLInputElement>,
  setValue: (formatted: string) => void
) => {
  const value = event.target.value;
  const numericValue = value.replace(/[^0-9]/g, "");
  const formattedValue = numericValue.substring(0, 16);
  const formattedWithSpaces = formattedValue.replace(/(\d{4})(?=\d)/g, "$1 ");
  setValue(formattedWithSpaces);
};

export const handleInputNumberCVV = (
  event: React.ChangeEvent<HTMLInputElement>,
  setValue: (formatted: string) => void
) => {
  const inputValue = event.target.value;
  const valorSinEspacios = inputValue.replace(/\s/g, "");
  if (/^\d*$/.test(valorSinEspacios) && valorSinEspacios.length <= 3) {
    setValue(valorSinEspacios);
  }
};

export const handleInputDateCard = (
  event: React.ChangeEvent<HTMLInputElement>,
  setValue: (formatted: string) => void
) => {
  const newValue = event.target.value.replace(/\D/g, ""); // Elimina cualquier carácter no numérico
  let formattedValue = "";
  if (newValue.length <= 4) {
    for (let i = 0; i < newValue.length; i += 2) {
      const chunk = newValue.slice(i, i + 2);

      if (chunk.length === 2) {
        if (chunk >= "01" && chunk <= "12") {
          formattedValue += chunk + "/";
        } else if (chunk >= "23" && chunk <= "29") {
          formattedValue += chunk;
        }
      } else {
        formattedValue += chunk;
      }
    }
  }
  setValue(formattedValue);
};

export const regex = {
    cardNumberRegex :/^(\d{4}[- ]?){3}\d{4}$/,
    dateRegex : /^(0[1-9]|1[0-2])\/(2[3-9]|0[1-9]|1[0-9])$/,
    cvvRegex : /^\d{3}$/
}
