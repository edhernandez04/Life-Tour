class UsersController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    users = User.all

    render json: users
  end

  def create

    user = User.new(
      username: params[:username],
      password: params[:password],
    )

    if user.save
      render json: user
    else
      render json: {errors: user.errors.full_messages}
    end
    
     
  end

end
