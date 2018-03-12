class Api::V1::TodosController < Api::V1::BaseController
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