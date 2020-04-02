@non-angular
Feature: Bookster - Search for book

  Background: Open Bookster Landing Page
    Given I visit the Bookster homepage "https://www.bookster.ro/landing/"

@bookster
Scenario: Search for book
    Given User is on landing page
    When I Login to bookster with user "beniamin.ticana@endava.com" and pass "19901811"
    Then Home page populated
    And User search for book