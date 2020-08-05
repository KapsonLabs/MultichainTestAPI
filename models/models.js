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
      "name":"Nana",
      "address":"1k8GnYot5RJPzMMZjvQXKioYAw7YtGksctw75",
      "score":"5"
    },
    {
      "name":"Kwame",
      "address":"1Zf2cs3xZNuoFh4KrCgT38DWprqwz6aQm6HD9Q",
      "score":"0"
    },
    {
      "name":"David",
      "address":"13Tto3fTHRBch4dkzDRPbSe8kDmMPHcnHYRM8y",
      "score":"0"
    },
    {
      "name":"Jassy",
      "address":"1SbQxiaCdri1ziE9pLcyiygygD4ChWCi1cRZVj",
      "score":"0"
    },
    {
      "name":"Edmond",
      "address":"1SbQxiaCdri1ziE9pLcyiygygD4ChWCi1cRZVj",
      "score":"0"
    },
    {
      "name":"Solomon",
      "address":"1SbQxiaCdri1ziE9pLcyiygygD4ChWCi1cRZVj",
      "score":"0"
    },
    {
      "name":"Emma",
      "address":"1SbQxiaCdri1ziE9pLcyiygygD4ChWCi1cRZVj",
      "score":"0"
    },
    {
      "name":"Alfred",
      "address":"1SbQxiaCdri1ziE9pLcyiygygD4ChWCi1cRZVj",
      "score":"0"
    },
    {
      "name":"Christian",
      "address":"1SbQxiaCdri1ziE9pLcyiygygD4ChWCi1cRZVj",
      "score":"0"
    },
    {
      "name":"Abraham",
      "address":"1SbQxiaCdri1ziE9pLcyiygygD4ChWCi1cRZVj",
      "score":"0"
    },
  ]
}

module.exports = {
  Static
}