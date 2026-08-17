import {
    StringUtils,
    NumberUtils,
    DateUtils
} from "./libraryNamespace";

console.log(
    StringUtils.capitalize("hello")
);

console.log(
    StringUtils.reverse("hello")
);

console.log(
    NumberUtils.square(10)
);

console.log(
    NumberUtils.isEven(20)
);

console.log(
    DateUtils.getYear()
);

console.log(
    DateUtils.getDate()
);