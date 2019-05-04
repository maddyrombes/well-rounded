class User < ApplicationRecord
    has_secure_password
    validates :email, presence: true

    def to_token_payload
        {
            sub: id,
            username: username
        }
    end
end
