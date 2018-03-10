class BaseController < ActionController::API
  def index
    render json: Todo.all
  end

  def create
  end

  def update
  end

  def detroy
  end
end