Feature: As a player I can pick up things in order to use them later
  Scenario: I am in the loo. I see a dollar and I can pick it up.
    Given I am in the loo
    And I see a dollar
    When I pick up the dollar
    Then I should find it in my pockets
    And I should not be able to see it when I look around