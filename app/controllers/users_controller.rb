class UsersController < ApplicationController
    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation)
    end
end