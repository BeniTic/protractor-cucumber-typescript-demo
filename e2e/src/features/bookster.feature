@non-angular
Feature: Bookster - App Login

  Background: Open Bookster Landing Page
    Given I visit the Bookster homepage "https://www.bookster.ro/landing/"

@bookster
Scenario: Login to Bookster
  Given User is on landing page
  When I Login to bookster with user "beniamin.ticana@endava.com" and pass "19901811"
