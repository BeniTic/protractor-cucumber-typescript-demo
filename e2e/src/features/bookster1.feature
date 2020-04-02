@non-angular
Feature: Bookster - Check rented books

  Background: Open Bookster Landing Page
    Given I visit the Bookster homepage "https://www.bookster.ro/landing/"


@bookster
Scenario: Check rented books
    Given User is on landing page
    When I Login to bookster with user "beniamin.ticana@endava.com" and pass "19901811"
    And Home page populated
    And I select profile
    Then I check rented books

@bookster
Scenario: Check wishlist books
    Given User is on landing page
    When I Login to bookster with user "beniamin.ticana@endava.com" and pass "19901811"
    And Home page populated
    And I select profile
    Then I check wishlist number of books to be "Wishlist (9)"
