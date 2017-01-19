/*Найпростіший скрипт калькулятора
* він видає діаголові вікна, в яких
* запрошуе два числа і оператор над ними*/
function startCalc() {
    var firstValue;
    var secondValue;
    var operator;
    var result;

    firstValue = prompt("Введіть перше число", "0");
    secondValue = prompt("Введіть друге число", "0");
    operator = getOperator();
    if (operator == null) {
        alert("Введено невірний оператор. Завершення роботи.");
        return;
    }
    result = mathValues(firstValue, secondValue, operator);
    alert("Результат роботи:" +
        "\n" + firstValue + " " + operator + " " + secondValue + " = " + result);

    function getOperator() {
        var tempValue;
        const operators = ["+", "-", "/", "*"];

        tempValue = prompt("Введіть оператор:" +
                "\n\"+\" - додавання" +
                "\n\"-\" - віднімання" +
                "\n\"/\" - ділення" +
                "\n\"*\" - множення", "");
        if (operators.some(v => v == tempValue)) return tempValue;
        else return null;
    }

    function mathValues(fArg, sArg, operator) {
        switch (operator) {
            case "+": return +fArg + +sArg;
            case "-": return fArg - sArg;
            case "/": return fArg / sArg;
            case "*": return fArg * sArg;
            default: return null;
        }
    }
}