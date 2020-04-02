@non-angular
Feature: Bookster - Check points

  Background: Open Bookster Landing Page
    Given I visit the Bookster homepage "https://www.bookster.ro/landing/"


@bookster
Scenario: Check bookster points
    Given User is on landing page
    When I Login to bookster with user "beniamin.ticana@endava.com" and pass "19901811"
    Then Home page populated
    And I check acumulated points to be "140 puncte"
