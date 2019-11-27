class CreateCalendarEvents < ActiveRecord::Migration[5.1]
    def change
        add_column :calendar_events do |t|
            t.datetime :start_datetime
            t.datetime :end_datetime
            t.integer :duration_minutes
            t.timestamps

            t.string :title
            t.string :description
            t.decimal :latitude, { precision: 12, scale: 8 }
            t.decimal :longitude, { precision: 12, scale: 8 }

            t.boolean :is_recurring
            t.integer :recurring_type

            t.belongs_to :user
        end
    end
end