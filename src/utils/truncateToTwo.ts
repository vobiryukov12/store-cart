/**
 * Функция для округления числа до двух знаков после запятой
 * @example truncateToTwo(5.12556)
 * @param {number} num -  число
 * @returns {number} число с двумя знаками после запятой
 */

export const truncateToTwo = (num: number) => Math.floor(num * 100) / 100;
