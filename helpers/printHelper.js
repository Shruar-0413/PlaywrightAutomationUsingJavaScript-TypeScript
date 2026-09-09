export function printAge(age) {
    console.log(age);
}

export class CustomerDetails {

    /**
     * This method will print the first name of the customer to the console.
     * @param {String} firstName 
     */
    printFirstName(firstName) {
        console.log(firstName);
    }
/**
 * This method will print the last name of the customer to the console.
 * @param {String} lastName 
 */
    printLastName(lastName) {
        console.log(lastName);
    }

}
export const customerDetails = new CustomerDetails();