# Data

## Data layer

- List of gentlemen
  - id
  - name
  - status
  - profession
  - twitter
  - alternative text
  - selected

## Data modifications (functions)

- Toggle selected property of gentlemen
- Select all gentlemen
- Delete a gentlemen

# Components

## App

- Contains the gentlemen list -> variable de estado
- Contains the gentlemenlist
- Contains the function "toggle"
- Contains the function "select"
- Contains the function "delete"

- Sends the list of gentleman to Info
- Sends the functions "delete" and "toggle" to gentleman
- Sends the function "select all" to button

## Info

- Receives a list of gentlemen
- Displays the number of selected gentlemen

## Button

- Receives the function to "select all"

## Gentlemen

- Receives the function "toggle"
- Receives the function "delete"
- Receives a gentleman
