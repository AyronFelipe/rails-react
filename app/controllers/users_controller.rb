class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.select("id, email, name, birthday, gender").all

    render json: {status: 'SUCCESS', message: 'Loaded users', data: @users}, status: :ok
  end

  # GET /users/1
  def show
    @user = User.find(params[:id])
    render json: {status: 'SUCCESS', message: 'Loaded user', data: @user}, status: :ok
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: {status: 'SUCCESS', message:'Saved user'}, status: :created
    else
      render json: {status: 'ERROR', message:'User not saved', data: @user.errors}, status: :unprocessable_entity
    end
  end
  
  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: {status: 'SUCCESS', message:'User updated'}, status: :ok
    else
      render json: {status: 'ERROR', message:'User not updated', data: @user.errors}, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
    render json: {status: 'SUCCESS', message: 'User deleted'}, status: :ok
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:name, :email, :password, :birthday, :gender)
    end
end
