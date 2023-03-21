## How to run
1. Download the file
2. Open the file in Visual Studio Code
3. On terminal write "npm run wdio"<br><br>
Before running the code, you may need to change the values of the fields that I set in each test case,<br>
as it may cause an error due to the fact that the data already exists.

## Description
This is a autotest script written in JavaScript using the WebDriverIO library.<br>
The script contains 4 tests: "Login", "Create client", "View and edit client", and "Create coupon".
<br><br>

The "Create client" test clicks on a button to add a new client, fills in a form with client details,<br>
and saves the client. It then accepts an alert and pauses for 5 seconds.
<br><br>
![Create client test](https://imgur.com/ofysy0h.png)
<br><br>

The "Open to read and edit" test navigates to the first client in the list, clicks to view its details, <br>
updates some client details, saves the changes, accepts an alert, and pauses for 5 seconds.
<br><br>
![Open to read and edit](https://imgur.com/6rx6zPA.png)
<br><br>

The "Create coupon" test navigates to the coupon list, clicks to add a new coupon, fills in a form with coupon details, <br>
saves the coupon, accepts an alert, and pauses for 5 seconds.
<br><br>
![Create coupon](https://imgur.com/onaJmaE.png)
