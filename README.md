# Note Taker Starter Code
<!-- ![MIT Badge](https://img.shields.io/badge/License-MIT-green) -->

## Description
This application creates an employee information and profile HTML webpage. 

## Table of Contents 
* [Website](#Website)
* [Installation](#Installation)
* [Usage](#Usage)
* [Test](#Test)
* [Contributors](#contributors)
* [Technology](#technology)
* [License](license)
* [Questions](#Questions)

***

## Website
Here is a link to the live website:
[Note Taker Starter Coder](https://github.com/vtori37/team-profile-generator)

## Installation 
To access the application

## Usage
This project can be used to create company profile pages.

## Test
Here is a demonstration of the application.


## Contributors


## Technology
* HTML5
* CSS 
* JS


## License 
https://opensource.org/licenses/MIT

Copyright © <years> <copyright holder>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



### Questions
If you have any questions or concerns regarding this project, feel free to reach out to Victoria Rice at vrice360@gmail.com

/* User Story
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

Acceptance Criteria
GIVEN a note-taking application

WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page

WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column

WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page

WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes

WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column

WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column */


/* 
The following HTML routes should be created:

GET notes should return the notes.html file.

GET should return the index.html file.

The following API routes should be created:

GET /api/notes should read the db.json file and return all saved notes as JSON.

POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).  */