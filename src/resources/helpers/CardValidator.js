import CardValidator from 'card-validator';

export const validCreditCard = (name = null, data, param = null) => {
    
    var numberValidation = CardValidator.number(data);

    if (!numberValidation.isPotentiallyValid) {
        return false;
    }

    if (numberValidation.card) {
        return numberValidation.card;
        console.log(numberValidation.card.type);
    }
}