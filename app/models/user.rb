class User < ApplicationRecord
    has_secure_password

    has_many :ratings 

    validates :username, presence: true, uniqueness: true
    validates :password,
            length: { minimum: 1 },
            if: -> { new_record? || !password.nil? }
end
