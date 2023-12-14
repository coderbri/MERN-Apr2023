Queries used:

```bash
$ mongo
> show dbs
> use my_first_db

my_first_db > db.createCollection("students")
my_first_db > db.students.insertOne({ name: "Jane Doe", home_state: "New York", lucky_number: 7, birthday: { month: 5, day: 15, year: 1994, } })

{
  acknowledged: true,
  insertedId: ObjectId('657a787a66805dc1f0bd584c')
}

my_first_db > db.students.insertOne({ name: "Jane Doe", home_state: "New York", lucky_number: 7, birthday: { month: 5, day: 15, year: 1994 } })
my_first_db > db.students.insertOne({ name: "John Smith", home_state: "Chicago", lucky_number: 42, birthday: { month: 8, day: 23, year: 1987 } })
my_first_db > db.students.insertOne({ name: "Abigail Jones", home_state: "California", lucky_number: 5, birthday: { month: 3, day: 18, year: 2001 } })
my_first_db > db.students.insertOne({ name: "Daniel Liu", home_state: "Washington", lucky_number: 1, birthday: { month: 12, day: 21, year: 2003 } })
my_first_db > db.students.insertOne({ name: "Eleanor Gonzalez", home_state: "California", lucky_number: 12, birthday: { month: 10, day: 6, year: 1998 } })
my_first_db > db.students.insertOne({ name: "Kyle Miyamura", home_state: "California", lucky_number: 9, birthday: { month: 2, day: 11, year: 2000 } })
my_first_db > db.students.insertOne({ name: "Charlotte Blanche", home_state: "Blanche", lucky_number: 14, birthday: { month: 4, day: 25, year: 2004 } })
my_first_db > db.students.insertOne({ name: "Charlotte Blanche", home_state: "Washington", lucky_number: 14, birthday: { month: 4, day: 25, year: 2004 } })

my_first_db > db.students.find()
[
  {
    _id: ObjectId('657a787a66805dc1f0bd584c'),
    name: 'Jane Doe',
    home_state: 'New York',
    lucky_number: 7,
    birthday: { month: 5, day: 15, year: 1994 }
  },
  ...,
  {
    _id: ObjectId('657a7b9166805dc1f0bd5853'),
    name: 'Charlotte Blanche',
    home_state: 'Washington',
    lucky_number: 14,
    birthday: { month: 4, day: 25, year: 2004 }
  }
]

my_first_db > db.students.find({ home_state: "California" })
[
  {_id: ObjectId('657a79ad66805dc1f0bd584e'), name: 'Abigail Jones', home_state: 'California', lucky_number: 5, birthday: { month: 3, day: 18, year: 2001 }},
  {_id: ObjectId('657a7aa166805dc1f0bd5850'), name: 'Eleanor Gonzalez', home_state: 'California', lucky_number: 12, birthday: { month: 10, day: 6, year: 1998 }},
  {_id: ObjectId('657a7ae366805dc1f0bd5851'), name: 'Kyle Miyamura', home_state: 'California', lucky_number: 9, birthday: { month: 2, day: 11, year: 2000 }}
]

my_first_db > db.students.find({ home_state: "Washington" })
[
  {_id: ObjectId('657a7a3d66805dc1f0bd584f'), name: 'Daniel Liu', home_state: 'Washington', lucky_number: 1, birthday: { month: 12, day: 21, year: 2003 }},
  {_id: ObjectId('657a7b9166805dc1f0bd5853'), name: 'Charlotte Blanche', home_state: 'Washington', lucky_number: 14, birthday: { month: 4, day: 25, year: 2004 }}
]

my_first_db > db.students.find({ lucky_number: { $gt: 3 } })
[
  {_id: ObjectId('657a787a66805dc1f0bd584c'), name: 'Jane Doe', home_state: 'New York', lucky_number: 7, birthday: { month: 5, day: 15, year: 1994 }},
  {_id: ObjectId('657a793066805dc1f0bd584d'), name: 'John Smith', home_state: 'Chicago', lucky_number: 42, birthday: { month: 8, day: 23, year: 1987 }},
  {_id: ObjectId('657a79ad66805dc1f0bd584e'), name: 'Abigail Jones', home_state: 'California', lucky_number: 5, birthday: { month: 3, day: 18, year: 2001 }},
  {_id: ObjectId('657a7aa166805dc1f0bd5850'), name: 'Eleanor Gonzalez', home_state: 'California', lucky_number: 12, birthday: { month: 10, day: 6, year: 1998 }},
  {_id: ObjectId('657a7ae366805dc1f0bd5851'), name: 'Kyle Miyamura', home_state: 'California', lucky_number: 9, birthday: { month: 2, day: 11, year: 2000 }},
  {_id: ObjectId('657a7b4066805dc1f0bd5852'), name: 'Charlotte', home_state: 'Blanche', lucky_number: 14, birthday: { month: 4, day: 25, year: 2004 }},
  {_id: ObjectId('657a7b9166805dc1f0bd5853'), name: 'Charlotte Blanche', home_state: 'Washington', lucky_number: 14, birthday: { month: 4, day: 25, year: 2004 }}
]

my_first_db > db.students.find({ lucky_number: { $gt: 3, $lt: 10 } })
[
  {_id: ObjectId('657a787a66805dc1f0bd584c'), name: 'Jane Doe', home_state: 'New York', lucky_number: 7, birthday: { month: 5, day: 15, year: 1994 }},
  {_id: ObjectId('657a79ad66805dc1f0bd584e'), name: 'Abigail Jones', home_state: 'California', lucky_number: 5, birthday: { month: 3, day: 18, year: 2001 }},
  {_id: ObjectId('657a7ae366805dc1f0bd5851'), name: 'Kyle Miyamura', home_state: 'California', lucky_number: 9, birthday: { month: 2, day: 11, year: 2000 }}
]

my_first_db > db.students.find({ lucky_number: { $gte: 1, $lte: 9 } })
[
  {_id: ObjectId('657a787a66805dc1f0bd584c'), name: 'Jane Doe', home_state: 'New York', lucky_number: 7, birthday: { month: 5, day: 15, year: 1994 }},
  {_id: ObjectId('657a79ad66805dc1f0bd584e'), name: 'Abigail Jones', home_state: 'California', lucky_number: 5, birthday: { month: 3, day: 18, year: 2001 }},
  {_id: ObjectId('657a7a3d66805dc1f0bd584f'), name: 'Daniel Liu', home_state: 'Washington', lucky_number: 1, birthday: { month: 12, day: 21, year: 2003 }},
  {_id: ObjectId('657a7ae366805dc1f0bd5851'), name: 'Kyle Miyamura', home_state: 'California', lucky_number: 9, birthday: { month: 2, day: 11, year: 2000 }}
]

my_first_db > db.students.updateMany({}, { $set: { interests: ["coding", "brunch", "MongoDB"] } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 8,
  modifiedCount: 8,
  upsertedCount: 0
}

my_first_db > db.students.updateOne({ name: "John Smith" }, { $push: { interests: "Playing Basketball"} })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
my_first_db > db.students.updateOne({ name: "Daniel Liu" }, { $push: { interests: "taxes"} })
my_first_db > db.students.updateOne({ name: "Abigail Jones" }, { $push: { interests: "taxes"} })
my_first_db > db.students.updateOne({ name: "Abigail Jones" }, { $pull: { interests: "taxes"} })

my_first_db > db.students.deleteMany({ home_state: "California" })
{ acknowledged: true, deletedCount: 3 }

my_first_db > db.students.deleteOne({ name: "Charlotte" })
{ acknowledged: true, deletedCount: 1 }

my_first_db > db.students.deleteOne({ lucky_number: { $gt: 5 } })
{ acknowledged: true, deletedCount: 1 }

my_first_db > db.students.updateMany({}, { $set: { number_of_belts: 0 } })
my_first_db > db.students.updateMany({ home_state: "Washington" }, { $inc: { number_of_belts: 1 } })
my_first_db > db.students.updateMany({}, { $rename: { number_of_belts: "belts_earned" } })
my_first_db > db.students.updateMany({}, { $unset: { lucky_number: 1 } })

my_first_db > db.students.updateMany({}, { $set: { updated_at: new Date() } })
```

