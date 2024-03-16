/**
 * Функция для обрезки строки до определенной длины и добавления многоточия
 * @example truncateString("Видеокамера", 5)
 * @param {string} str - строка для обрезки
 * @param {number} count -  длины строки после обрезки
 * @returns {string} возвращает обрезанную строку с многточием
 */

export const truncateString = (str: string, count: number): string =>
  str.length > count ? str.slice(0, count).trim() + '...' : str
