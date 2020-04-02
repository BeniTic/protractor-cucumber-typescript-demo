@angular
Feature: Blur Admin
  As a test I want ot open blur admin homeoage

  Background: Open Blur Admin
    Given I visit the BlurAdmin homepage "https://www.akveo.com/blur-admin-mint/#/dashboard"

  @bluradmina
  Scenario: Open Blur Admin homepage
    Given I check dashboard title is visible

  @bluradmina
  Scenario: Check homepage feed messages
    Given I check feed messages list is visible
    When I click on the first message
    Then I check the content message matches

  @bluradmin
  Scenario: Check feed message and select video to redirect
    Given I check feed messages list is visible
    When I click on second message
    Then I click on content video
    And I check redirect link