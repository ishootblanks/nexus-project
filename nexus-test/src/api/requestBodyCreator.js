import uid from "uid";

import { dateGenerator } from "./dateGenerator";

export function requestBodyCreator(favouriteFood) {
  return favouriteFood
    ? JSON.stringify(
        {
          _id: uid(12),
          meta: {
            dateCreated: "2020-06-29T09:19:28.565+02:00",
            dateModified: "2020-06-29T09:19:31.209+02:00",
            dateSubmitted: null,
            survey: { id: process.env.REACT_APP_SURVEY_ID, version: 2 },
            revision: 1,
            permissions: [],
            status: [
              {
                type: "READY_TO_SUBMIT",
                value: { at: "2020-06-29T07:19:37.298Z" },
              },
            ],
            group: { id: null, path: null },
            specVersion: 3,
          },

          data: {
            favorite_food: {
              value: favouriteFood,
              meta: {
                type: "selectSingle",
                dateModified: dateGenerator(),
              },
            },
          },
        },
        null,
        4
      )
    : new Error("Please select food");
}
