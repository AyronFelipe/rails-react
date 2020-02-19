50.times do
    User.create({
        name: Faker::Name.name_with_middle ,
        email: Faker::Internet.email,
        password: Faker::Internet.password,
        birthday: Faker::Date.birthday(min_age: 18, max_age: 65),
        gender: Faker::Gender.short_binary_type
    })
end