/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newNumbers: number[] = [];

    if (numbers.length === 0) {
        return newNumbers;
    }
    const firstElement = numbers[0];
    const lastElement = numbers[numbers.length - 1];

    return numbers.length > 1 ?
            [firstElement, lastElement]
        :   [firstElement, firstElement];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled_numbers = numbers.map((num: number): number => num * 3);

    return tripled_numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const string_tonumber = numbers.map((string: string): number =>
        isNaN(Number(string)) ? 0 : Number(string),
    );
    return string_tonumber;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const remove_dollars = amounts.map((string: string): string =>
        string.replace("$", ""),
    );
    const string_to_num = remove_dollars.map((string: string): number =>
        isNaN(Number(string)) ? 0 : Number(string),
    );

    return string_to_num;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let check_exclaim = messages.map((message: string): string => {
        if (message.includes("!")) {
            return message.toUpperCase();
        } else {
            return message;
        }
    });

    let check_question = check_exclaim.filter(
        (message: string): boolean => !message.includes("?"),
    );
    return check_question;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word) => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.every(
        (color) => color === "red" || color === "blue" || color === "green",
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let num_sum = addends.reduce(
        (currentTotal: number, num: number): number => currentTotal + num,
        0,
    );
    //let string_sum: string = num_sum.toString();
    //let string_nums: string[] = addends.map((num:number): string=> num.toString() )
    if (addends.length === 0) {
        return "0=0";
    }
    let string_nums = addends.join("+");

    return `${num_sum}=${string_nums}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    // Calculate the sum of the values
    let sum: number = 0;
    let negative_found: boolean = false;

    let sum_list: number[] = values.reduce(
        (accumulator: number[], current_number: number): number[] => {
            sum += current_number;

            if (current_number < 0 && !negative_found) {
                accumulator.push(current_number);
                accumulator.push(sum);
                negative_found = true;
            } else {
                accumulator.push(current_number);
            }

            // if(!negative_found){
            //     accumulator.push(sum);
            // }
            return accumulator; //Random change for commit
        },
        [],
    );

    return sum_list;
}
