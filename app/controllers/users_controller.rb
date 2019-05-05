class UsersController < ApplicationController
    before_action :authorize_request, except: :create

    params.require(:user).permit( :username, :password )
end