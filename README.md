# Team Profile Generator

## Description

This is a command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person

Completed site's code: [https://github.com/Chip-L/teamProfileGenerator]

Video of working application: [https://drive.google.com/file/d/122Ya_Pt2S9cOE29a36q4pvjCKT4Z8OW9/view]

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Usage](#usage)
- [Tests](#tests)
- [Technologies](#technologies)
- [Credits](#credits)

## User Story

AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria

Here are the critical requirements necessary to develop a this app:

```
GIVEN a command-line application that accepts user input

WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

```

## Usage

Enter the employee information. When complete, copy the website out of the 'dist' folder and place it where you want.

## Tests

Run npm Test

## Credits

Team:

- Lauren Gabaldon
- Josh Lee
- Jared Sutch
- Lacey Pape
- Alex Jurgs
- Tarik Maggio
