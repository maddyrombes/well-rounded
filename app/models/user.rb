class User < ApplicationRecord
    has_many :ratings

    has_secure_password

    def to_token_payload
        {
            sub: id,
            username: username
        }
    end
end
