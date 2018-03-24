50.times do |index|
  Todo.create(
    name: "This is task - ##{index}",
    body: "Task content ##{index}"
  )
end

10.times do |index|
  Tutorial.create(
    name: "This is tutorial - ##{index}",
    status: 0,
    level: 0
  )
end