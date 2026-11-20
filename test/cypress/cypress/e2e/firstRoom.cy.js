describe('first room', () => {
    it('wakes the player up on the loo', () => {
        cy.visit('/')
        cy.get('#gameInfo').contains(
            'You wake up on the loo. You have no idea where or who you are.'
        )
    })
})
