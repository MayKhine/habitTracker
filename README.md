# Habit Tracker

## React + TypeScript + Vite

- project creation

  > pnpm create vite@latest habitTracker --template react-ts
  > -luxon
  > pnpm install --save-dev @types/luxon

- MongoDb
  - connect to mongo shell: mongosh
  - choose db: use dbName (mydb)
  - create a new collection: habitTracker
    {
    week: 1,
    habitList: [
    {
    name: 'exercise',
    achievement: [0, 1, 1, 1, 0, 0, 1]
    },
    {
    name: 'study',
    achievement: [1, 1, 1, 0, 0, 0, 0]
    },
    ]
    }
    > db.habitTracker.insert({ week: 1, habitList: [ { name: 'exercise', achievement: [0, 1, 1, 1, 0, 0, 1] }, { name: 'study', achievement: [1, 1, 1, 0, 0, 0, 0] }] })
