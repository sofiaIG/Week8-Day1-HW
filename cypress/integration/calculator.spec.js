describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number0').click();
    cy.get('.display').should('contain', '0')
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
    cy.get('#number1').click();
    cy.get('.display').should('contain', '1')
    cy.get('#number3').click();
    cy.get('.display').should('contain', '3')
    cy.get('#number4').click();
    cy.get('.display').should('contain', '4')
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
    cy.get('#number6').click();
    cy.get('.display').should('contain', '6')
    cy.get('#number7').click();
    cy.get('.display').should('contain', '7')
    cy.get('#number8').click();
    cy.get('.display').should('contain', '8')
    cy.get('#number9').click();
    cy.get('.display').should('contain', '9')
  })

  it('the arithmetical operations update should update the display with the result of the operation', () =>{
    //Add
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
    //Subtract
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0')
    //Multiply
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
    cy.get('#number2').click();
    //Divide
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1')

  })

  it('should chain multiple operators together',()=>{
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2')
  })

  it('should get right number with different range of numbers',() =>{
    //Negative Numbers
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1')
    //Decimal numbers
    cy.get('#number2').click();
    cy.get('#decimal').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4.2')
    //Large numbers
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '488884')
  })

  it('division by 0 should return 0 ',()=>{
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0')
    

  })

})