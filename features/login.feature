@login
Feature: Swag Labs - Login

 Background: User on the login page
  Given Salma is on the login page

  @positive_standard
  Scenario Outline: As a standard_user, I want to login succesfully
    When Salma login with "standard_user" credential
    Then Salma should see home page

  @negative_locked_out
  Scenario Outline: As a locked_out_user, I should get error message
    When Salma login with "locked_out_user" credential
    Then Salma should see error "Epic sadface: Sorry, this user has been locked out."

  @positive_visual
  Scenario: As a visual_user , I want to login successfully
    When Salma login with "visual_user" credential
    Then Salma should see home page