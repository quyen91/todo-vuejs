class Api::V1::TodosController < Api::V1::BaseController
  def index
    render json: Todo.order(updated_at: :desc)
  end

  def create
    todo = Todo.new(todo_params)
    if todo.save
      render json: todo, status: 200
    else
      render json: { success: :false}, status: 500
    end
  end

  def update
  end

  def detroy
  end

  def search
  end

  private
  def todo_params
    params.require(:todo).permit(:name, :body)
  end
end