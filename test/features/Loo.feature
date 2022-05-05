Feature: I wake up at the loo
  Scenario: When we begin the game we should be waking up on the loo
    Given I started the game
    When I look around
    Then I should find myself on the loo
