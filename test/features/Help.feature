Feature: As a player I need help
  Scenario: I am in the loo. I dont know what to do, therefore I need help.
    Given I am in the loo and dont know what to do
    When I cry for help
    Then I get a helpfull information
