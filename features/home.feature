@homepage
Feature: Swag Lab - Home Page

Background: User should go to the cart page
  Given Salma is on the login page
  When Salma login with "standard_user" credential
  Then Salma should see home page
  
  @positive_cart
  Scenario Outline: As a standard_user , I want to go to the cart page
    When Salma click on icon chart
    Then Salma should see cart page
