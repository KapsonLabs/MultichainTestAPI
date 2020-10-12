// import * as mongoose from "mongoose";

// const Schema = mongoose.Schema;

// export const UserSchema = new Schema({
//   name: {
//     type: String,
//     required: "Enter a name"
//   },
//   address: {
//     type: String,
//     required: " Enter an address"
//   },
//   createdDate: {
//     type: Date,
//     default: Date.now
//   }
// });

// export const QuizSchema = new Schema({
//     quizName: {
//         type: String,
//         required: "Enter a quiz name"
//     },
//     quizType: {
//         type: String,
//         required: "Enter a quiz type"
//     },
//     createdDate: {
//         type: Date,
//         default: Date.now
//     }
// })

// export const QuizScoreSchema = new Schema({
//     quizPLayer: {
//         type: Schema.ObjectId,
//         ref: "User"
//       },
//     relatedQuiz: {
//         type: Schema.ObjectId,
//         ref: "Quiz"
//     },
//     score: {
//       type: Number,
//       required: "Enter a score"
//     }
// })

'use strict'

const Static = () => {
  return [
    {
      "id": 1,
      "name":"Alfred",
      "address":"1k8GnYot5RJPzMMZjvQXKioYAw7YtGksctw75",
      "score":"48.5"
    },
    {
      "id": 2,
      "name":"Kwame",
      "address":"1aKQH4efbAPbZm24zxaQjroUzfPUzpvfXvoovL",
      "score":"35"
    },
    {
      "id": 3,
      "name":"David",
      "address":"1Zf2cs3xZNuoFh4KrCgT38DWprqwz6aQm6HD9Q",
      "score":"32"
    },
    {
      "id": 4,
      "name":"Marlene",
      "address":"13Tto3fTHRBch4dkzDRPbSe8kDmMPHcnHYRM8y",
      "score":"26.5"
    },
    {
      "id": 5,
      "name":"Jassy",
      "address":"1SbQxiaCdri1ziE9pLcyiygygD4ChWCi1cRZVj",
      "score":"26"
    },
    {
      "id": 6,
      "name":"Edmond",
      "address":"1GBSVwLgUhM4KxZXP8C8zxvQGPx4bJK1ryxqDs",
      "score":"20"
    },
    {
      "id": 7,
      "name":"Solomon",
      "address":"12fxMyYWceqs83yDY5sZBXoSu43b8H2A7picMb",
      "score":"15"
    },
    {
      "id": 8,
      "name":"Robert",
      "address":"1R9PLsX8VQqFC2v2P5Crde4ZfAFZqQHfTTzmtX",
      "score":"14"
    },
    {
      "id": 9,
      "name":"Christian",
      "address":"1Gyid9AULxevuPwJ7N7TBruunffJJB44WRYESu",
      "score":"5"
    },
    {
      "id": 10,
      "name":"Daisy",
      "address":"1GRt13YAvHNj9MXXPKAMpoLCvcSjU48feMgwh6",
      "score":"0"
    },
    {
      "id": 11,
      "name":"Lillian",
      "address":"15TsAvHNj9MXXPrde4ZfAFZqQHfjU68iH3rru7",
      "score":"0"
    },
  ]
}

module.exports = {
  Static
}