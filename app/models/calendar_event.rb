class CalendarEvent < ApplicationRecord
    validates :start_datetime, presence: true
    validates :title, presence: true
    validate :valid_date_range_required

    def valid_date_range_required
        if end_datetime <= start_datetime
            #errors.add(:end_datetime, "end date must be greater than start date");
            errors[:base] << "End datetime must be greater than Start datetime"
        end
    end
end
