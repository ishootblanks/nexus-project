# Challenge

For the following challenge use an environment (client / server side) that you are comfortable with to build an application solving the problems below.
For instance use plain HTML/JS/CSS, VueJS, React or build a mobile Application with Android / iOS.

Fork this repository in order to work and later submit the project as pull request.

## Considering user Input

1. Ask the user for their favorite meal among Pizza, Pasta, Sarma, and Pommes Frites via Drop Down.
2. Allow the user to press a button and submit the result as POST request to the following REST Endpoint:

   ```
   https://app.surveystack.io/api/submissions
   ```

   With the following payload structure:

   ```json
   {
     "_id": "5ef996008f7300000134bf33",
     "meta": {
       "dateCreated": "2020-06-29T09:19:28.565+02:00",
       "dateModified": "2020-06-29T09:19:31.209+02:00",
       "dateSubmitted": null,
       "survey": { "id": "5ef99549f5b9e700010429df", "version": 2 },
       "revision": 1,
       "permissions": [],
       "status": [
         {
           "type": "READY_TO_SUBMIT",
           "value": { "at": "2020-06-29T07:19:37.298Z" }
         }
       ],
       "group": { "id": null, "path": null },
       "specVersion": 3
     },
     "data": {
       "favorite_food": {
         "value": "pommes_frites",
         "meta": {
           "type": "selectSingle",
           "dateModified": "2020-06-29T09:19:31.209+02:00"
         }
       }
     }
   }
   ```

   Generate unique ID for `_id` field. Also in the `data` section of the JSON exchange `dateModified` appropriately.

## Working with Data

1. fetch the data set from `https://app.surveystack.io/api/submissions?survey=5ef99549f5b9e700010429df`.
2. fetch the definition over here `https://app.surveystack.io/api/surveys/5ef99549f5b9e700010429df`
3. Parse and show the most commonly chosen Foodtype, display it to the user as Text. Use the definition to resolve values to labels.

## Visualize

2. Visualize the data by counting food types and displaying them as bar chart.
3. Do the same as Pie chart.

# Submit

Submit your solution by creating a pull request. Send us an E-Mail to impact@nexus-computing.com.
