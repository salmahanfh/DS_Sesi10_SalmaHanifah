Feature: Swag Labs - Login
  Background: User on the login page
    Given Salma is on the login page

  @positive
  Scenario Outline: As a standard_user, I want to login succesfully
    When Salma login with "standard_user" credential
    Then Salma should see home page

  @negative
  Scenario Outline: As a locked_out_user, I should get error message
    When Salma login with "locked_out_user" credential
    Then Salma should see error "Epic sadface: Sorry, this user has been locked out."

  @positive
  Scenario Outline: As a standard_user, I should get to see product detail
    When Salma login with "standard_user" credential
    And Salma should see home page
    And Salma click a product
    Then Salma should see the product detail
