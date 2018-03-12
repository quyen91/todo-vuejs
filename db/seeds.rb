50.times do |index|
  Todo.create(
    name: "This is task - ##{index}",
    body: "Task content ##{index}"
  )
end