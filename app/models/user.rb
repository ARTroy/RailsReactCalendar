class User < ApplicationRecord
    has_secure_password
    
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :name, presence: true, length: {minimum: 3}

end
