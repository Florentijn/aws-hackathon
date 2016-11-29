/**
 * Created by Florentijn Hogerwerf on 01/11/16.
 */


const numberFormatterPercentage = (label: number) => {
    return label + "%";
};


const numberFormatterCurrency = (label: number) => {

    if (label) {
        if (label > 1000000000) {
            return "€ " + (label / 1000000000) + " B"
        }
        if (label > 1000000) {
            return "€ " + (label / 1000000) + " M"
        }
    }
};

const numberFormatterNumber = (label: number) => {

    if (label) {
        if (label > 1000000000) {
            return (label / 1000000000) + " B"
        }
        if (label > 1000000) {
            return (label / 1000000) + " M"
        }
    }
};

export type ValueType = "PERCENTAGE"|"CURRENCY"|"NUMBER";

/**
 * This method formats a number into a formatted string depending on the value type provided.
 * @param label the number to formatPattern
 * @param valueType the value type of the number. e.g. 'NUMBER', 'CURRENCY', or 'PERCENTAGE'
 * @returns the string representation of the number
 */
export default (label: number, valueType: ValueType): string => {

    if (valueType) {
        if (valueType === "PERCENTAGE")
            return numberFormatterPercentage(label);
        else if (valueType === "CURRENCY")
            return numberFormatterCurrency(label);
        else if (valueType === "NUMBER")
            return numberFormatterNumber(label);
    }
    return label;
};