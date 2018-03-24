class Api::V1::TutorialsController < Api::V1::BaseController
  def index
    render json: Tutorial.order(updated_at: :desc)
  end

  def create
    tutorial = Tutorial.new(tutorial_params)
    if tutorial.save
      render json: tutorial, status: 200
    else
      render json: { success: :false }, status: 500
    end
  end

  def update
  end

  def detroy
  end

  private
  def tutorial_params
    params.require(:tutorial).permit(:name, :status, :level, :last_viewed, :linked)
  end
end