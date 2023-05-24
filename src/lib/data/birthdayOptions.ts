
const monthOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const date = new Date();
const currentYear = date.getFullYear();


export const birthdayOptions = (month: number, day: number, year: number | null) => {
    if (month in monthOptions) {
        if (day > 31 || day < 1) {
            return "Invalid day!" && false;
        } else {
            if (day > 30) {
                if (month != 1 || 3 || 5 || 7 || 8 || 10 || 12) {
                    return "Invalid month!" && false;
                } else {
                    if (year >= currentYear) {
                        return "Invalid year!" && false;
                    } else if (year === null) {
                        return `Birthday set as **${month}**/**${day}**`
                    }
                    else {
                        return `Birthday set as: **${month}**/**${day}**/**${year}**!`;
                    }
                }
            }
        }
    } else {
        return "Invalid month!" && false;
    }
}